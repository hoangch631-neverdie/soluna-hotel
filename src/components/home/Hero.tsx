import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-soluna-green/40">
        <Image
          src="/images/hero.jpg"
          alt="Soluna Dalat Hotel"
          fill
          priority
          className="object-cover opacity-80"
        />
        {/* Gradient overlay tạo depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-soluna-black/30 via-soluna-black/10 to-soluna-black/70" />
        {/* Texture overlay — vân gỗ/linen effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-soluna-gold via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-gold mb-6">
          Chào bạn đến với Soluna · Đà Lạt
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-soluna-white leading-tight tracking-wide mb-6">
          Một Chút Nắng Ấm.
          <br />
          <span className="italic text-soluna-gold">Một Chút Sương Đêm.</span>
        </h1>

        {/* Gold divider */}
        <div className="w-16 h-px bg-soluna-gold mx-auto mb-6" />

        {/* Subtitle */}
        <p className="font-body text-sm sm:text-base text-soluna-white/80 leading-relaxed mb-10 max-w-lg mx-auto">
          Không chỉ là một nơi để ngủ, Soluna là trạm dừng chân nhỏ xinh với 29 căn phòng—nơi bạn thức giấc cùng ly cà phê ngát hương và chìm vào giấc ngủ sâu giữa tiếng thông reo tĩnh mịch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="btn-ghost">
            Book Trực Tiếp
          </Link>
          <Link
            href="/rooms"
            className="font-body text-xs tracking-widest uppercase text-soluna-white/70 hover:text-soluna-white transition-colors underline underline-offset-4"
          >
            Xem Phòng
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#brand-story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-soluna-white/50 hover:text-soluna-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
