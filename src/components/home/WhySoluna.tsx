import { Coffee, Sunrise, MapPin, Users } from 'lucide-react'

const usps = [
  {
    icon: Sunrise,
    title: 'Bữa Sáng Dưới Nắng Đẹp',
    desc: 'Thưởng thức bữa xế sáng tự tay chúng tôi chuẩn bị tại tầng 6, ngắm nhìn Đà Lạt bừng tỉnh. Riêng tư, ấm bụng và an yên.',
    accent: 'bg-soluna-gold/10 border-soluna-gold/30',
    iconColor: 'text-soluna-gold',
  },
  {
    icon: Coffee,
    title: 'Một Góc Cà Phê Mở',
    desc: 'Tầng 3 là mảnh sân chung để bạn chậm lại một chút. Nhấp ngụm cà phê đặc sản, sưởi ấm tay và nghe nhạc cùng chúng tôi.',
    accent: 'bg-soluna-sage/10 border-soluna-sage/30',
    iconColor: 'text-soluna-sage',
  },
  {
    icon: Users,
    title: '29 Căn Phòng Ấm Cúng',
    desc: 'Không quá lớn để ồn ào. Đủ nhỏ nhắn để chúng tôi tự mình chăm chút và nhớ tên bạn như một người bạn phương xa ghé thăm.',
    accent: 'bg-soluna-oak/10 border-soluna-oak/30',
    iconColor: 'text-soluna-oak',
  },
  {
    icon: MapPin,
    title: 'Nép Mình Giữa Trung Tâm',
    desc: 'Nằm ngay 14A Đống Đa — đủ gần để thả bộ hòa vào nhịp sống phố thị, đủ tĩnh lặng để bạn có một giấc ngủ thật sâu.',
    accent: 'bg-soluna-green/5 border-soluna-green/20',
    iconColor: 'text-soluna-green',
  },
]

export default function WhySoluna() {
  return (
    <section className="section bg-soluna-white">
      <div className="container-soluna">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-oak mb-3">
            Những Điều Bé Nhỏ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-soluna-green leading-tight">
            Chúng Tôi Chăm Chút
            <br />
            Từng Chi Tiết
          </h2>
          <div className="divider-gold" />
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {usps.map((usp) => {
            const Icon = usp.icon
            return (
              <div
                key={usp.title}
                className={`border rounded-sm p-8 transition-shadow hover:shadow-sm ${usp.accent}`}
              >
                <Icon size={28} className={`mb-4 ${usp.iconColor}`} />
                <h3 className="font-heading text-xl text-soluna-green mb-3">{usp.title}</h3>
                <p className="font-body text-sm text-soluna-charcoal/70 leading-relaxed">{usp.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
