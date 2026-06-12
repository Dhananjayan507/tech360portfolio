'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="glass-panel fade-in group overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.4)]">
            {/* Product Image */}
            <div className="relative h-[250px] sm:h-[280px] bg-white/5 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Stock Badge */}
                <div className={`absolute top-3 right-3 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold z-10 tracking-wide ${product.inStock ? 'bg-green-500/80' : 'bg-red-500/80'}`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-yellow-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                    <span>⭐</span> {product.rating} <span className="text-gray-400 font-normal">({product.reviews})</span>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="m-0 mb-2 text-lg sm:text-xl font-bold text-white tracking-tight">
                    {product.name}
                </h3>

                <p className="m-0 mb-6 text-sm text-gray-400 leading-relaxed flex-1">
                    {product.description.substring(0, 90)}...
                </p>

                <div className="flex justify-between items-center mb-6">
                    <span className="gradient-text text-2xl sm:text-3xl font-extrabold">
                        ${product.price}
                    </span>
                    <span className="bg-white/5 px-3 py-1 rounded-md text-xs text-gray-400 capitalize">
                        {product.category}
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsFavorite(!isFavorite);
                        }}
                        className={`flex-none w-12 h-12 rounded-xl text-xl flex items-center justify-center transition-all ${isFavorite ? 'bg-red-500/10 text-red-500 border border-red-500/30' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </button>

                    <Link href={`/products/${product.slug}`} className="flex-1 no-underline">
                        <button className="w-full h-12 bg-blue-600 text-white border-none rounded-xl text-sm sm:text-base font-semibold transition-all hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                            View Details <span className="text-lg">→</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}