import Link from 'next/link'
import Image from 'next/image'

export default function Cafe() {
  return (
    <section className="section bg-soluna-green text-soluna-white">
      <div className="container-soluna">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-gold mb-4">
              Tầng 3 · Soluna Café
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-soluna-white leading-tight mb-6">
              Ghé Thăm Chúng Tôi.
              <br />
              Bất Cứ Lúc Nào.
            </h2>

            <div className="w-16 h-px bg-soluna-gold mb-6" />

            <p className="font-body text-sm text-soluna-white/75 leading-loose mb-4">
              Soluna Café không chỉ dành riêng cho khách lưu trú. Đây là mảnh sân chung, nơi nắng ghé chơi mỗi sáng và mùi cà phê rang đánh thức cả góc phố.
            </p>
            <p className="font-body text-sm text-soluna-white/75 leading-loose mb-8">
              Hãy tạt ngang qua, tìm một góc nhỏ bên cửa sổ và kể cho chúng tôi nghe về chuyến đi của bạn.
            </p>

            <Link href="/cafe" className="btn-ghost">
              Khám Phá Café
            </Link>
          </div>

          {/* Arch image — cafe visual */}
          <div className="flex justify-center">
            <div className="relative w-72 lg:w-80">
              {/* Main arch frame */}
              <div className="relative arch-mask aspect-[3/4] bg-soluna-green-hover border border-soluna-white/10 overflow-hidden">
                <Image
                  src="/images/cafe.jpg"
                  alt="Soluna Café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 bg-soluna-gold text-soluna-green px-4 py-3">
                <p className="font-body text-[9px] tracking-widest uppercase font-semibold">Mở cửa</p>
                <p className="font-heading text-lg leading-none">07:00 – 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
