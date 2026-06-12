'use client';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a]/90 border-t border-white/10 py-12 md:py-16 px-6 md:px-10 text-center text-gray-400 mt-auto">
            <h3 className="gradient-text text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Tech360 Mini</h3>
            <p className="mb-8 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Elevating your digital lifestyle with premium, cutting-edge technology.
            </p>
            <div className="flex justify-center gap-6 md:gap-8 mb-10 flex-wrap">
                {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map(social => (
                    <span key={social} className="cursor-pointer transition-colors hover:text-white font-medium text-sm md:text-base">
                        {social}
                    </span>
                ))}
            </div>
            <div className="border-t border-white/5 pt-8 text-xs md:text-sm opacity-70">
                &copy; {new Date().getFullYear()} Tech360 Mini Portfolio. All rights reserved.
            </div>
        </footer>
    );
}