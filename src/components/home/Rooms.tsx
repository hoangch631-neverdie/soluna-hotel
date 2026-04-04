import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const rooms = [
  {
    type: 'Superior',
    slug: 'superior',
    desc: 'Standard King 1.8×2m · 19–26m²',
    from: '600.000',
    detail: 'Nhỏ gọn, vừa vặn cho một giấc ngủ say.',
    bgColor: 'bg-soluna-sage/20',
  },
  {
    type: 'Deluxe',
    slug: 'deluxe',
    desc: 'Standard King 1.8×2m · 20–35m²',
    from: '700.000',
    detail: 'Thêm không gian để vươn vai chào ngày mới.',
    bgColor: 'bg-soluna-oak/15',
  },
  {
    type: 'Deluxe Balcony',
    slug: 'deluxe-balcony',
    desc: 'Twin hoặc King · 24–32m² · Ban công',
    from: '800.000',
    detail: 'Góc ban công đắt giá hít hà sương đêm Đà Lạt.',
    bgColor: 'bg-soluna-green/10',
    featured: true,
  },
  {
    type: 'Apartment',
    slug: 'apartment',
    desc: 'Twin 1.2×2m · 32m² · Layout riêng biệt',
    from: '800.000',
    detail: 'Khoảng không riêng biệt, ấm áp như ở nhà.',
    bgColor: 'bg-soluna-gold/15',
  },
]

export default function Rooms() {
  return (
    <section className="section bg-soluna-cream">
      <div className="container-soluna">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-oak mb-3">
            Phòng Nghỉ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-soluna-green leading-tight">
            Ngả Lưng Xuống.
            <br />
            Hít Thở Thật Sâu.
          </h2>
          <div className="divider-gold" />
          <p className="font-body text-sm text-soluna-charcoal/70 max-w-md mx-auto">
            Mọi căn phòng đều được chúng tôi dùng gỗ sồi ủ ấm và chăn gối linen mềm mịn, chờ đón bạn sau một ngày dạo chơi.
          </p>
        </div>

        {/* Room grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className="group block"
            >
              <div className={`relative overflow-hidden border border-soluna-oak/20 ${room.bgColor} transition-all duration-300 hover:border-soluna-oak/50 hover:shadow-md`}>
                {/* Arch-shaped image placeholder */}
                <div className="relative mx-8 mt-8">
                  <div className="relative arch-mask aspect-[3/4] bg-soluna-green/20">
                    <Image
                      src={`/images/${room.slug}.jpg`}
                      alt={room.type}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Room info */}
                <div className="p-8 pt-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-2xl text-soluna-green">
                      {room.type}
                      {room.featured && (
                        <span className="ml-2 font-body text-[9px] tracking-widest uppercase bg-soluna-gold text-soluna-green px-2 py-0.5 align-middle">
                          Phổ biến nhất
                        </span>
                      )}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-soluna-oak mt-1.5 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <p className="font-body text-xs text-soluna-charcoal/60 mb-1">{room.desc}</p>
                  <p className="font-body text-xs text-soluna-charcoal/50 mb-4">{room.detail}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-body text-xs text-soluna-oak uppercase tracking-wide">Từ</span>
                    <span className="font-heading text-xl text-soluna-green">{room.from}</span>
                    <span className="font-body text-xs text-soluna-charcoal/50">₫/đêm</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/rooms" className="btn-secondary">
            Xem Tất Cả Phòng
          </Link>
        </div>
      </div>
    </section>
  )
}
