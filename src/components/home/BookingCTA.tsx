import Link from 'next/link'
import { Check } from 'lucide-react'

const perks = [
  'Giá phòng luôn tốt nhất dành riêng cho bạn',
  'Nhận phòng sớm một chút (nếu phòng đã sẵn sàng)',
  'Nán lại thêm một chút nữa đến 13:00',
  'Một thức uống ấm lòng khi vừa đến nơi',
  'Nhắn tin trực tiếp với chúng tôi bất cứ lúc nào qua Zalo',
]

export default function BookingCTA() {
  return (
    <section className="section bg-soluna-green text-soluna-white">
      <div className="container-soluna">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-gold mb-4">
            Đón Bạn Ghé Chơi
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-soluna-white leading-tight mb-4">
            Trở Thành Khách
            <br />
            <span className="text-soluna-gold italic">Của Chúng Tôi</span>
          </h2>

          <div className="w-16 h-px bg-soluna-gold mx-auto mb-8" />

          {/* Perks list */}
          <ul className="text-left max-w-sm mx-auto space-y-3 mb-10">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <Check size={16} className="text-soluna-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-soluna-white/80">{perk}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="btn-ghost">
              Xem Báo Giá Trực Tiếp Cùng Soluna
            </Link>
            <a
              href="https://wa.me/84xxxxxxxxx"
              className="font-body text-xs tracking-widest uppercase text-soluna-white/60 hover:text-soluna-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hoặc liên hệ Zalo
            </a>
          </div>

          <p className="font-body text-xs text-soluna-white/30 mt-6">
            Bạn chưa chắc chắn? Đừng lo, không cần đặt cọc và hỗ trợ hủy phòng thoải mái.
          </p>
        </div>
      </div>
    </section>
  )
}
