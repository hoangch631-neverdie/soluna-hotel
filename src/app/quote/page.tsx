import QuoteCalculator from '@/components/booking/QuoteCalculator';
import Link from 'next/link';

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#F0EBE1] pt-32 pb-24 px-4 sm:px-6"> {/* Added spacing to clear standard header */}
      <div className="container-soluna max-w-5xl">
        <div className="text-center mb-12">
          <Link href="/" className="text-sm font-semibold text-soluna-green border-b border-soluna-green/30 pb-0.5 hover:border-soluna-green hover:text-soluna-green/80 transition-all uppercase tracking-widest block mb-8 w-fit mx-auto">
            ← Quay Lại Trang Chủ
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-soluna-green mb-4">Lên Kế Hoạch Lưu Trú</h1>
          <p className="font-body text-soluna-black/70 max-w-xl mx-auto leading-relaxed">
            Chọn ngày và hạng phòng để nhận báo giá chi tiết ngay lập tức. Mức giá đã bao gồm ăn sáng và các ưu đãi trực tiếp.
          </p>
        </div>

        <QuoteCalculator />
      </div>
    </main>
  );
}
