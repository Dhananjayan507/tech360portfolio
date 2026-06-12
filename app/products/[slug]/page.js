import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';

// Generate static params
export async function generateStaticParams() {
    const products = productsData.products;
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// Product detail page
export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const product = productsData.products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 min-h-[80vh] fade-in">
            <Link href="/products" className="inline-flex items-center gap-2 mb-6 md:mb-8 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                <span>←</span> Back to Products
            </Link>

            <div className="glass-panel overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                {/* Product Image */}
                <div className="relative h-[350px] sm:h-[450px] md:h-full min-h-[350px] bg-white/5">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                        {product.name}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                        <span className="bg-white/10 px-3 py-1.5 rounded-md text-sm text-gray-300 capitalize font-medium">
                            {product.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-yellow-400 font-semibold bg-black/40 px-3 py-1.5 rounded-full border border-white/5 text-sm">
                            ⭐ {product.rating} <span className="text-gray-400 font-normal">({product.reviews} reviews)</span>
                        </span>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-400 mb-8 md:mb-10 flex-1">
                        {product.description}
                    </p>

                    <div className="gradient-text text-4xl sm:text-5xl font-black mb-6 md:mb-8">
                        ${product.price}
                    </div>

                    <div className={`mb-6 md:mb-8 p-4 rounded-xl text-center font-medium border ${product.inStock ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                        {product.inStock ? '✅ In Stock - Ready to Ship' : '❌ Out of Stock'}
                    </div>

                    <button 
                        disabled={!product.inStock}
                        className={`w-full py-4 rounded-xl text-base sm:text-lg font-bold transition-all flex items-center justify-center gap-2 ${product.inStock ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                    >
                        🛒 {product.inStock ? 'Add to Cart' : 'Currently Unavailable'}
                    </button>
                </div>
            </div>
        </div>
    );
}