import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section className="py-24 bg-[#1C1C1C] px-6">
      <div className="max-w-[600px] mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
          <h2 className="text-white text-2xl font-bold">Products</h2>
        </div>
        <div className="space-y-3">
          <ProductCard title="Portafo" logo="/portafo-logo.svg" />
          <ProductCard title="Faktur Invoice" logo="/faktur-logo.svg" />
          <ProductCard title="Goven" logo="/goven-logo.svg" />
          <ProductCard title="Subtle Folio" logo="/subtle-logo.svg" />
        </div>
      </div>
    </section>
  );
};

export default Products; 