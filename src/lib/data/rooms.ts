export interface Room {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  price: string;
  size: string;
  bed: string;
  view: string;
  description: string;
  image: string;
  colorTheme: string;
  featured?: boolean;
}

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'superior',
    name: 'Superior',
    shortDesc: 'Nhỏ gọn, ấm áp, vừa vặn cho một giấc ngủ say.',
    price: '600.000',
    size: '19–26m²',
    bed: 'Standard King (1.8m × 2m)',
    view: 'Nội khu tĩnh lặng',
    description: 'Một góc nhỏ kín đáo và tĩnh lặng nhất tại Soluna. Dành riêng cho những ai chỉ cần một chiếc giường êm, chăn nệm thơm tho và một giấc ngủ không gợn suy nghĩ sau một dài ngày rong ruổi.',
    image: '/images/superior.jpg',
    colorTheme: 'bg-soluna-sage/20 border-soluna-sage/30',
  },
  {
    id: '2',
    slug: 'deluxe',
    name: 'Deluxe',
    shortDesc: 'Thêm khoảng không gian để vươn vai đón nắng.',
    price: '700.000',
    size: '20–35m²',
    bed: 'Standard King (1.8m × 2m)',
    view: 'Thành phố / Giếng trời',
    description: 'Rộng rãi hơn một chút để bạn có thể thoải mái ngả lưng trên sofa đọc nốt cuốn sách dang dở. Nội thất gỗ sồi mộc mạc và thiết kế tối giản mang lại cảm giác dễ chịu ngay từ khi đẩy cửa bước vào.',
    image: '/images/deluxe.jpg',
    colorTheme: 'bg-soluna-oak/15 border-soluna-oak/30',
  },
  {
    id: '3',
    slug: 'deluxe-balcony',
    name: 'Deluxe Balcony',
    shortDesc: 'Góc ban công đắt giá để hít hà sương đêm Đà Lạt.',
    price: '800.000',
    size: '24–32m²',
    bed: 'Twin hoặc King',
    view: 'Toàn cảnh Đà Lạt thơ mộng',
    description: 'Căn phòng mang trọn vẹn tinh thần "Sol & Luna". Hãy mở tung cửa ban công để hơi lạnh trà vào phòng, nhâm nhi một tách trà nóng và ngắm nhìn Đà Lạt chìm đắm giữa mây ngàn và sương mai.',
    image: '/images/deluxe-balcony.jpg',
    colorTheme: 'bg-soluna-green/10 border-soluna-green/20',
    featured: true,
  },
  {
    id: '4',
    slug: 'apartment',
    name: 'Soluna Apartment',
    shortDesc: 'Khoảng không gian riêng biệt, thân thuộc như ở nhà.',
    price: '800.000',
    size: '32m²',
    bed: 'Twin (1.2m × 2m)',
    view: 'Nội khu / Phố thị',
    description: 'Lựa chọn lý tưởng nếu bạn đi cùng một người bạn hoặc gia đình nhỏ và cần nhiều không gian sinh hoạt hơn. Một căn hộ thu nhỏ nép mình giữa lòng khách sạn, đầy đủ và tiện nghi.',
    image: '/images/apartment.jpg',
    colorTheme: 'bg-soluna-gold/15 border-soluna-gold/30',
  },
];
