// app/products/loading.js
export default function ProductsLoading() {
    return (
        <div className="min-h-screen p-8">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
            </div>
        </div>
    );
}