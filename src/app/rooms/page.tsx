import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/lib/data/rooms'
import { Check, Wind, Coffee, Wifi } from 'lucide-react'

export const metadata = {
  title: 'Phòng Nghỉ | Soluna Hotel Dalat',
  description: 'Khám phá 29 căn phòng nhỏ nhắn, mộc mạc và ấm cúng giữa lòng Đà Lạt.',
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-soluna-cream pt-24 pb-16">
      {/* Hero Section */}
      <section className="container-soluna pt-12 pb-20 text-center">
        <p className="font-body text-[10px] tracking-widest-xl uppercase text-soluna-oak mb-4">
          Nơi Dừng Chân
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-soluna-green leading-tight mb-8">
          Ngả Lưng Xuống.
          <br />
          <span className="italic text-soluna-gold">Hít Thở Thật Sâu.</span>
        </h1>
        <div className="divider-gold mx-auto mb-8" />
        <p className="font-body text-sm sm:text-base text-soluna-charcoal/80 max-w-2xl mx-auto leading-loose">
          Mỗi căn phòng tại Soluna đều được chúng tôi chăm chút bằng chất liệu gỗ sồi ủ ấm, ánh sáng tự nhiên dịu nhẹ và chăn gối linen mềm mịn. Dù bạn chọn góc nhỏ nào để ngả lưng, ở đó luôn có sự thanh bình chờ đón.
        </p>
      </section>

      {/* Rooms Zig-Zag List */}
      <section className="container-soluna space-y-24">
        {rooms.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={room.id} className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className={`relative w-full max-w-md aspect-[3/4] arch-mask border ${room.colorTheme} p-3 sm:p-5`}>
                  <div className="relative w-full h-full arch-mask overflow-hidden bg-soluna-black/5">
                     <Image 
                        src={room.image} 
                        alt={room.name} 
                        fill 
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                     />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 max-w-xl">
                 <h2 className="font-heading text-4xl sm:text-5xl text-soluna-green mb-4 flex items-center gap-4 flex-wrap">
                    {room.name}
                    {room.featured && (
                      <span className="font-body text-[9px] tracking-widest uppercase bg-soluna-gold text-soluna-green px-2 py-1 transform -translate-y-1">
                        Yêu thích
                      </span>
                    )}
                 </h2>
                 <p className="font-body text-sm text-soluna-oak mb-6 tracking-wide">{room.size} · {room.bed}</p>
                 <p className="font-body text-base text-soluna-charcoal/80 leading-loose mb-8">
                    {room.description}
                 </p>
                 
                 <div className="flex items-center gap-6 mb-8">
                   <div>
                     <p className="font-body text-[10px] uppercase tracking-widest text-soluna-charcoal/50 mb-1">View</p>
                     <p className="font-body text-sm text-soluna-charcoal">{room.view}</p>
                   </div>
                   <div className="w-px h-8 bg-soluna-oak/30" />
                   <div>
                     <p className="font-body text-[10px] uppercase tracking-widest text-soluna-charcoal/50 mb-1">Giá từ</p>
                     <p className="font-heading text-xl text-soluna-green">{room.price}₫</p>
                   </div>
                 </div>

                 <Link href={`/rooms/${room.slug}`} className="btn-secondary">
                   Chi Tiết
                 </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Common Amenities */}
      <section className="container-soluna mt-32 border-t border-soluna-oak/20 pt-16">
         <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-soluna-green mb-4">Ở Bất Cứ Phòng Nào...</h3>
            <p className="font-body text-sm text-soluna-charcoal/70">Bạn cũng được chúng tôi chuẩn bị sẵn sàng những điều gắn bó gọn gàng nhất.</p>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
               <Coffee size={24} className="text-soluna-oak" />
               <p className="font-body text-xs text-soluna-charcoal/80">Miễn phí bữa sáng<br/>tại tầng 6</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
               <Wind size={24} className="text-soluna-sage" />
               <p className="font-body text-xs text-soluna-charcoal/80">Không gian thoáng đãng<br/>nội thất gỗ sồi</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
               <Check size={24} className="text-soluna-gold" />
               <p className="font-body text-xs text-soluna-charcoal/80">Trà, cà phê & nước suối<br/>mỗi ngày</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
               <Wifi size={24} className="text-soluna-green" />
               <p className="font-body text-xs text-soluna-charcoal/80">Wifi mạnh tốc độ cao<br/>Smart TV giải trí</p>
            </div>
         </div>
      </section>
    </main>
  )
}
