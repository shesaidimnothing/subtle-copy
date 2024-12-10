import Image from 'next/image';

interface ProductCardProps {
  title: string;
  logo: string;
}

const ProductCard = ({ title, logo }: ProductCardProps) => (
  <div className="group cursor-pointer bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#333333] transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#333333] overflow-hidden flex items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center text-white">
            {title[0].toUpperCase()}
          </div>
        </div>
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[#999999] text-sm">FRAMER TEMPLATE</span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="#999999"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard; 