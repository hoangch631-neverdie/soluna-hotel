'use client'

import React, { useState } from 'react';
import { calculateQuote, RoomCategory, ROOM_NAMES, formatVND } from '@/lib/pricing';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, Users, Building, Plus, Minus, Info } from 'lucide-react';

export default function QuoteCalculator() {
  const [checkIn, setCheckIn] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [checkOut, setCheckOut] = useState<string>(format(addDays(new Date(), 2), 'yyyy-MM-dd'));
  const [room, setRoom] = useState<RoomCategory>('DLHB');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number[]>([]); // Array of ages

  // Derived state
  const handleAddChild = (age: number) => setChildren([...children, age]);
  const handleRemoveChild = (index: number) => setChildren(children.filter((_, i) => i !== index));

  const quote = (() => {
    try {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      if (start >= end) return null;
      // Convert child state representation to the pricing engine format
      const childPolicies = children.map(age => ({ age }));
      return calculateQuote(start, end, room, childPolicies);
    } catch {
      return null;
    }
  })();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-soluna-oak/20 overflow-hidden">
      
      {/* Search Header */}
      <div className="bg-soluna-cream p-6 border-b border-soluna-oak/20">
        <h2 className="font-heading text-2xl text-soluna-green mb-6 text-center">Kiểm Tra Giá & Đặt Phòng</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dates */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-soluna-green/80 uppercase">Ngày Nhận Phòng</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 text-soluna-green/60" size={18} />
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-soluna-oak/30 focus:border-soluna-green focus:ring-1 focus:ring-soluna-green outline-none font-body text-soluna-black"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-soluna-green/80 uppercase">Ngày Trả Phòng</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 text-soluna-green/60" size={18} />
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={format(addDays(new Date(checkIn), 1), 'yyyy-MM-dd')}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-soluna-oak/30 focus:border-soluna-green focus:ring-1 focus:ring-soluna-green outline-none font-body text-soluna-black"
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-soluna-green/80 uppercase">Hạng Phòng</label>
            <div className="relative">
              <Building className="absolute left-3 top-3 text-soluna-green/60" size={18} />
              <select 
                value={room}
                onChange={(e) => setRoom(e.target.value as RoomCategory)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-soluna-oak/30 focus:border-soluna-green focus:ring-1 focus:ring-soluna-green outline-none font-body text-soluna-black appearance-none"
              >
                {Object.entries(ROOM_NAMES).map(([key, name]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests summary */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-soluna-green/80 uppercase">Khách</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 text-soluna-green/60" size={18} />
              <div className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-soluna-oak/30 bg-white font-body text-soluna-black">
                {adults} Người Lớn{children.length > 0 ? `, ${children.length} Trẻ` : ''}
              </div>
            </div>
          </div>
        </div>

        {/* Guest Controls (Expansion) */}
        <div className="mt-6 p-4 bg-white/60 rounded-xl border border-soluna-oak/20 flex flex-col md:flex-row gap-8">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-soluna-black w-24">Người lớn:</span>
            <button onClick={() => setAdults(Math.max(1, adults - 1))} className="p-1 rounded-full border border-soluna-oak/50 text-soluna-green hover:bg-soluna-green hover:text-white transition"><Minus size={16}/></button>
            <span className="w-6 text-center tabular-nums">{adults}</span>
            <button onClick={() => setAdults(Math.min(4, adults + 1))} className="p-1 rounded-full border border-soluna-oak/50 text-soluna-green hover:bg-soluna-green hover:text-white transition"><Plus size={16}/></button>
          </div>
          
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-soluna-black w-24">Trẻ em:</span>
              <select 
                className="bg-white border border-soluna-oak/30 p-1.5 rounded-lg font-body text-sm"
                onChange={(e) => {
                  if (e.target.value) {
                    handleAddChild(Number(e.target.value));
                    e.target.value = ""; // reset
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>+ Thêm trẻ em</option>
                <option value="4">Dưới 6 tuổi (Miễn phí)</option>
                <option value="8">6 - 11 tuổi (Phụ thu 80k)</option>
                <option value="12">12 tuổi trở lên (Phụ thu 120k)</option>
              </select>
            </div>
            
            {/* Child Tags */}
            {children.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {children.map((age, idx) => (
                  <div key={idx} className="bg-soluna-cream/80 border border-soluna-oak/40 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    {age < 6 ? 'Dưới 6 tuổi' : age < 12 ? '6-11 tuổi' : 'Trên 12 tuổi'}
                    <button onClick={() => handleRemoveChild(idx)} className="text-red-500/70 hover:text-red-600"><Minus size={14}/></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quote Display Area */}
      <div className="p-6 md:p-8">
        {!quote ? (
          <div className="text-center py-12 text-soluna-green/60 flex flex-col items-center">
            <Info size={32} className="mb-4 opacity-50" />
            <p>Vui lòng chọn ngày trả phòng hợp lệ để xem báo giá.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Breakdown */}
            <div className="flex-1">
              <h3 className="font-heading text-xl text-soluna-black mb-4">Chi Tiết Lưu Trú</h3>
              <p className="text-sm text-soluna-green/80 font-medium mb-6">
                {format(new Date(checkIn), 'dd/MM/yyyy')} — {format(new Date(checkOut), 'dd/MM/yyyy')} ({quote.totalNights} Đêm)
              </p>

              {quote.seasonLabel ? (
                <div className="bg-soluna-sage/10 text-soluna-green p-4 rounded-xl mb-6 text-sm flex items-start gap-3">
                  <Info size={18} className="shrink-0 mt-0.5" />
                  <p>{quote.seasonLabel}</p>
                </div>
              ) : (
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-soluna-black/50 w-full mb-1">Cấu trúc các đêm:</span>
                  {quote.breakdown.map((b, i) => (
                    <div key={i} className={`text-xs px-3 py-1.5 rounded-full border ${
                      b.season === 'PEAK' ? 'bg-rose-50 border-rose-200 text-rose-700' :
                      b.season === 'HIGH' ? 'bg-orange-50 border-soluna-gold text-amber-800' :
                      'bg-soluna-sage/10 border-soluna-sage/30 text-soluna-green'
                    }`}>
                      {b.dateStr} <span className="opacity-50">·</span> {b.season === 'PEAK' ? 'Lễ Tết' : b.season === 'HIGH' ? 'Cao Điểm' : 'Thấp Điểm'}
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {quote.breakdown.map((b, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-soluna-oak/10 pb-3">
                    <span className="text-soluna-black/70">Đêm {i+1} ({b.dateStr})</span>
                    <span className="font-semibold text-soluna-black">{formatVND(b.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Total */}
            <div className="lg:w-80 bg-soluna-green text-soluna-cream p-6 rounded-2xl flex flex-col h-fit">
              <h3 className="font-heading text-xl mb-6 text-soluna-gold">Tổng Chi Phí</h3>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-80">Tiền phòng ({quote.totalNights} đêm)</span>
                  <span>{formatVND(quote.totalRoomPrice)}</span>
                </div>
                
                {quote.childSurcharge > 0 && (
                  <div className="flex justify-between items-start text-sm">
                    <div className="flex flex-col">
                      <span className="opacity-80">Phụ thu khách/trẻ em</span>
                      <span className="text-xs opacity-50 mt-1">{children.length} trẻ em</span>
                    </div>
                    <span>{formatVND(quote.childSurcharge)}</span>
                  </div>
                )}
                
                <div className="w-full h-px bg-soluna-cream/20 my-2"></div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold opacity-90">Tổng cộng</span>
                  <span className="font-heading text-2xl text-soluna-gold tracking-wide">{formatVND(quote.totalPrice)}</span>
                </div>

                {quote.totalNights > 1 && (
                  <div className="text-right text-xs opacity-70 mt-2">
                    Trung bình <span className="font-semibold">{formatVND(Math.round(quote.totalPrice/quote.totalNights))}</span> / đêm
                  </div>
                )}
              </div>

              <a
                href="https://zalo.me/0823791368"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-soluna-gold text-soluna-green hover:bg-white hover:text-soluna-green transition-colors font-bold py-4 rounded-xl uppercase tracking-widest text-sm"
              >
                Liên Hệ Đặt Phòng →
              </a>
              <p className="text-center text-[10px] opacity-50 mt-4 px-4 uppercase tracking-widest leading-relaxed">
                Đã bao gồm thuế, phí phục vụ & bữa sáng.
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
