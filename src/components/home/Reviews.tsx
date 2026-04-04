import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Minh Anh',
    location: 'TP. Hồ Chí Minh',
    rating: 5,
    text: 'Căn phòng Deluxe Balcony nhìn ra Đà Lạt buổi sáng đẹp không tả được. Ăn sáng tầng 6 là highlight của chuyến đi — sẽ quay lại.',
    type: 'Deluxe Balcony',
  },
  {
    name: 'Thanh Huy',
    location: 'Hà Nội',
    rating: 5,
    text: 'Khách sạn nhỏ nhưng chủ rất nhiệt tình, biết tên mình ngay từ check-in. Café tầng 3 ngon, không gian đẹp, gần trung tâm đi đâu cũng tiện.',
    type: 'Superior',
  },
  {
    name: 'Linh Phương',
    location: 'Đà Nẵng',
    rating: 5,
    text: 'Thiết kế phòng ấm áp, chất liệu gỗ và vải mềm tạo cảm giác thật sự thư giãn. Không khí boutique mà không quá formal — đúng vibe Đà Lạt.',
    type: 'Deluxe',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-soluna-gold text-soluna-gold" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="section bg-soluna-cream">
      <div className="container-soluna">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-oak mb-3">
            Khách Hàng Nói Gì
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-soluna-green leading-tight">
            Trải Nghiệm Thật
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-soluna-white border border-soluna-oak/15 p-8 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="font-body text-sm text-soluna-charcoal/75 leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-soluna-oak/10 pt-4">
                <p className="font-body text-sm font-medium text-soluna-green">{review.name}</p>
                <p className="font-body text-xs text-soluna-charcoal/50">{review.location}</p>
                <p className="font-body text-[10px] tracking-wide uppercase text-soluna-oak mt-1">
                  {review.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-soluna-oak/15">
          {['Booking.com · 9.2', 'Google · 4.8 ★', 'Agoda · 9.0'].map((badge) => (
            <div key={badge} className="text-center">
              <p className="font-body text-xs tracking-widest uppercase text-soluna-oak/60">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
