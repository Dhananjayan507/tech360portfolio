// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Tech360 Mini Portfolio
                </Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/products" className="hover:underline">Products</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                </div>
            </nav>
        </header>
    );
}