// app/products/[slug]/page.js
export default function ProductDetailPage({ params }) {
    const { slug } = params;

    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Product: {slug}</h1>
            <p className="text-gray-600">
                Details for product with slug: <strong>{slug}</strong>
            </p>
        </main>
    );
}