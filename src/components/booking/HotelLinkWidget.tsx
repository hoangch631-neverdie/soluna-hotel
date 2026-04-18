'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function HotelLinkWidget() {
  const [coreLoaded, setCoreLoaded] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '//book.securebookings.net/css/app-v2.css'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  return (
    <div id="hotellink-widget" className="pt-16 pb-24 scroll-mt-24">
      <div className="text-center mb-10">
        <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-green/50 mb-3">
          Đặt Phòng Trực Tiếp
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-soluna-green">Xác Nhận Lưu Trú</h2>
        <div className="w-12 h-px bg-soluna-gold mx-auto mt-5" />
      </div>

      <div className="hbe-bws">
        <section id="hbe-bws-page">
          <div id="hbe-bws-wrapper" />
        </section>
      </div>

      <Script
        src="//book.securebookings.net/js/v2/widget.all.js"
        strategy="afterInteractive"
        onLoad={() => setCoreLoaded(true)}
      />
      {coreLoaded && (
        <Script
          src="//book.securebookings.net/widgetCustomize?lang=en&widgetType=Facebook&id=bb6137f3-5427-1775699848-4543-9cd1-273ccd5d236a&ajax=true"
          strategy="afterInteractive"
        />
      )}
    </div>
  )
}
