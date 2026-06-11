// app/products/not-found.js
import Link from 'next/link';

export default function ProductsNotFound() {
    return (
        <div className="min-h-screen p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">
                Sorry, we couldn't find the product you're looking for.
            </p>
            <Link href="/products" className="text-blue-600 hover:underline">
                ← Back to All Products
            </Link>
        </div>
    );
}