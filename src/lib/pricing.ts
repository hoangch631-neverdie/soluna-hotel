import { isWithinInterval, parse, startOfDay, getMonth } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export type RoomCategory = 'SUDV' | 'SUD' | 'DLC' | 'DLHB' | 'APAR';
export type Season = 'LOW' | 'HIGH' | 'PEAK';

export const ROOM_NAMES: Record<RoomCategory, string> = {
  SUDV: 'Superior with View',
  SUD: 'Superior No View',
  DLC: 'Deluxe Cityview',
  DLHB: 'Deluxe Hill Balcony',
  APAR: 'Apartment',
};

// Official 2026 Rack Rates as per "RACK RATES 2026 - DIRECT SALE.docx"
// No distinction between Weedays and Weekends.
const RACK_RATES: Record<RoomCategory, Record<Season, number>> = {
  // 01 Phòng tiêu chuẩn hướng thành phố (101, 102, 103, 201, 202, 203, 204, 205, 207) -> Matches SUDV and SUD
  SUDV: {
    LOW: 960000,
    HIGH: 1110000,
    PEAK: 1400000,
  },
  SUD: {
    LOW: 960000,
    HIGH: 1110000,
    PEAK: 1400000,
  },
  // 03 Phòng cao cấp hướng thành phố (104, 401, 402, 403, 404, 501, 502, 503, 504) -> Matches DLC
  DLC: {
    LOW: 1200000,
    HIGH: 1350000,
    PEAK: 1700000,
  },
  // 04 Phòng cao cấp hướng đồi và ban công (405-408, 505-508, 607, 608) -> Matches DLHB
  DLHB: {
    LOW: 1280000,
    HIGH: 1430000,
    PEAK: 1800000,
  },
  // 02 Phòng căn hộ (206) -> Matches APAR
  APAR: {
    LOW: 1320000,
    HIGH: 1470000,
    PEAK: 1670000,
  },
};

// VN Timezone
const TIMEZONE = 'Asia/Ho_Chi_Minh';

// Helper to parse DD/MM/YYYY into Date
const p = (dateStr: string) => parse(dateStr, 'dd/MM/yyyy', new Date());

// Define exact Date Ranges for 2026 based on the Rack Rates doc.
const PEAK_RANGES = [
  { start: p('01/01/2026'), end: p('01/01/2026') }, // Tết tây
  { start: p('18/02/2026'), end: p('21/02/2026') }, // Tết âm lịch
  { start: p('25/04/2026'), end: p('26/04/2026') }, // Giỗ tổ
  { start: p('30/04/2026'), end: p('02/05/2026') }, // 30/4 - 1/5
  { start: p('02/09/2026'), end: p('02/09/2026') }, // Quốc khánh
];

const HIGH_RANGES = [
  { start: p('02/01/2026'), end: p('31/01/2026') },
  { start: p('01/02/2026'), end: p('17/02/2026') },
  { start: p('22/02/2026'), end: p('28/02/2026') },
  { start: p('01/06/2026'), end: p('31/08/2026') }, // Note: 02/09 is Peak, so August is safe
  { start: p('01/12/2026'), end: p('31/12/2026') }, // Dec is all High
];

// All other dates not in Peak or High are LOW.
// Explicit LOW ranges explicitly defined in the doc cover March, Apr-May (outside peak), Sep-Nov.

export const getSeasonForDate = (date: Date): Season => {
  const target = startOfDay(date);

  // Check Peak First
  if (PEAK_RANGES.some(range => target >= startOfDay(range.start) && target <= startOfDay(range.end))) {
    return 'PEAK';
  }
  
  // Check High Second
  if (HIGH_RANGES.some(range => target >= startOfDay(range.start) && target <= startOfDay(range.end))) {
    return 'HIGH';
  }

  // Fallback to LOW
  return 'LOW';
};

export interface QuoteBreakdown {
  dateStr: string;
  season: Season;
  price: number;
}

export interface QuoteResult {
  breakdown: QuoteBreakdown[];
  totalRoomPrice: number;
  totalNights: number;
  averagePerNight: number;
  childSurcharge: number;
  totalPrice: number;
  seasonLabel?: string;
}

export const formatVND = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export const calculateQuote = (
  checkIn: Date, 
  checkOut: Date, 
  roomType: RoomCategory,
  childrenPolicies: { age: number }[]
): QuoteResult => {
  
  const breakdown: QuoteBreakdown[] = [];
  let totalRoomPrice = 0;
  
  let current = startOfDay(checkIn);
  const end = startOfDay(checkOut);
  const uniqueSeasons = new Set<Season>();

  while (current < end) {
    const season = getSeasonForDate(current);
    const price = RACK_RATES[roomType][season];
    
    uniqueSeasons.add(season);
    totalRoomPrice += price;
    
    breakdown.push({
      dateStr: formatInTimeZone(current, TIMEZONE, 'dd/MM/yyyy'),
      season,
      price
    });
    
    current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
  }

  const totalNights = breakdown.length;
  const averagePerNight = totalNights > 0 ? totalRoomPrice / totalNights : 0;

  let surchargePerNight = 0;
  childrenPolicies.forEach(child => {
    if (child.age >= 12) surchargePerNight += 120000;       
    else if (child.age >= 6) surchargePerNight += 80000;    
  });

  const totalChildSurcharge = surchargePerNight * totalNights;
  const totalPrice = totalRoomPrice + totalChildSurcharge;

  let seasonLabel = undefined;
  if (uniqueSeasons.size === 1) {
    const s = Array.from(uniqueSeasons)[0];
    if (s === 'LOW') seasonLabel = 'Mùa Thấp Điểm (Giá tốt nghỉ dưỡng, chi phí tiết kiệm)';
    if (s === 'HIGH') seasonLabel = 'Mùa Cao Điểm (Giai đoạn du lịch sôi động)';
    if (s === 'PEAK') seasonLabel = 'Giai Đoạn Lễ Tết (Kỳ nghỉ cao cấp)';
  }

  return {
    breakdown,
    totalRoomPrice,
    totalNights,
    averagePerNight,
    childSurcharge: totalChildSurcharge,
    totalPrice,
    seasonLabel
  };
};
