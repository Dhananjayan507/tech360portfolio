import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Our Products | Tech360',
  description: 'Browse our latest tech products',
};

export default function ProductsPage() {
    const products = productsData.products;

    return (
        <div className="fade-in px-4 py-12 md:py-20 max-w-7xl mx-auto min-h-screen">
            <h1 className="gradient-text text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
                Explore Our Collection
            </h1>
            <p className="text-center text-gray-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
                Discover cutting-edge technology curated specifically for you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}