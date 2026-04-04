export default function BrandStory() {
  return (
    <section id="brand-story" className="section bg-soluna-cream">
      <div className="container-soluna">
        <div className="max-w-3xl mx-auto text-center">
          {/* Sol + Luna symbols */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Sun — hình tròn */}
            <div className="w-10 h-10 rounded-full border border-soluna-gold flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-soluna-gold" />
            </div>
            <div className="w-12 h-px bg-soluna-oak" />
            {/* Moon — hình lưỡi liềm */}
            <div className="w-10 h-10 rounded-full border border-soluna-sage flex items-center justify-center overflow-hidden relative">
              <div className="absolute w-8 h-8 rounded-full bg-soluna-sage translate-x-2" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl text-soluna-green mb-4 leading-tight">
            Sol &amp; Luna
          </h2>

          <div className="divider-gold" />

          {/* Story */}
          <p className="font-body text-sm sm:text-base text-soluna-charcoal/80 leading-loose mb-6">
            <em className="font-heading text-lg text-soluna-green not-italic">Sol</em> là sự ấm áp của ngày mới — giọt nắng lấp lánh trên mép cửa sổ, tiếng cười khe khẽ ở góc cà phê tầng 3, và nhịp đập rộn rã của Đà Lạt lúc sớm mai.
            <br />
            <br />
            <em className="font-heading text-lg text-soluna-green not-italic">Luna</em> là sự dịu dàng của màn đêm — khi phòng ngủ chìm trong ánh đèn dịu êm, chất liệu gỗ sồi ôm lấy giấc ngủ êm đềm, và sương lạnh giăng kín ngoài ban công.
          </p>
          <p className="font-body text-sm sm:text-base text-soluna-charcoal/80 leading-loose">
            Trong 29 căn phòng nhỏ tại Soluna, chúng tôi gom lại cả hai nhịp điệu ấy, chỉ chờ bạn ghé thăm để tự mình cảm nhận.
          </p>

          <div className="mt-10 font-body text-xs tracking-widest-xl uppercase text-soluna-oak">
            Khai trương · Tháng 05, 2026
          </div>
        </div>
      </div>
    </section>
  )
}
