import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const roomLinks = [
  { label: 'Superior', href: '/rooms/superior' },
  { label: 'Deluxe', href: '/rooms/deluxe' },
  { label: 'Deluxe Balcony', href: '/rooms/deluxe-balcony' },
  { label: 'Apartment', href: '/rooms/apartment' },
]

const hotelLinks = [
  { label: 'Soluna Café', href: '/cafe' },
  { label: 'Rooftop Breakfast', href: '/experience#breakfast' },
  { label: 'Trải Nghiệm Đà Lạt', href: '/experience' },
  { label: 'Về Chúng Tôi', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-soluna-green text-soluna-white">
      <div className="container-soluna px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-heading text-3xl tracking-widest">SOLUNA</p>
              <p className="font-body text-[9px] tracking-widest-xl uppercase text-soluna-gold mt-1">
                — DALAT HOTEL —
              </p>
            </div>
            <p className="font-body text-sm text-soluna-white/70 leading-relaxed">
              Nơi mặt trời và mặt trăng gặp nhau — boutique hotel 29 phòng
              với thiết kế Japandi và hơi thở của rừng thông Đà Lạt.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/solunahoteldalat"
                className="text-soluna-white/60 hover:text-soluna-gold transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/solunahoteldalat"
                className="text-soluna-white/60 hover:text-soluna-gold transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-soluna-gold mb-4">
              Phòng
            </h4>
            <ul className="space-y-3">
              {roomLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-soluna-white/70 hover:text-soluna-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-soluna-gold mb-4">
              Khách Sạn
            </h4>
            <ul className="space-y-3">
              {hotelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-soluna-white/70 hover:text-soluna-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-soluna-gold mb-4">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-soluna-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-soluna-white/70">
                  14A Đống Đa, Phường 3<br />Đà Lạt, Lâm Đồng
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-soluna-gold shrink-0" />
                <a
                  href="tel:+84823791369"
                  className="font-body text-sm text-soluna-white/70 hover:text-soluna-white transition-colors"
                >
                  082 3791369
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-soluna-gold shrink-0" />
                <a
                  href="mailto:info@solunadalathotel.com"
                  className="font-body text-sm text-soluna-white/70 hover:text-soluna-white transition-colors"
                >
                  info@solunadalathotel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-soluna-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-soluna-white/40">
            © {new Date().getFullYear()} Soluna Dalat Hotel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-xs text-soluna-white/40 hover:text-soluna-white/70 transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="/terms" className="font-body text-xs text-soluna-white/40 hover:text-soluna-white/70 transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
