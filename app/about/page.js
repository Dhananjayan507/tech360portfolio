export const metadata = {
  title: 'About Us | Tech360 Mini',
  description: 'Learn about our mission to provide 360° technology solutions.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen px-6 py-16 md:py-24 max-w-7xl mx-auto fade-in">
            {/* Header Section */}
            <div className="text-center mb-16 md:mb-24">
                <div className="inline-flex px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-8 text-gray-300 backdrop-blur-sm">
                    Who We Are
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                    Your <span className="gradient-text">360° Technology</span> Partner
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    At Tech360 Mini, we believe that the right technology has the power to transform how you live, work, and create. We curate the world's most premium devices to elevate your digital lifestyle.
                </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="glass-panel p-8 md:p-12 transition-transform duration-300 hover:-translate-y-2">
                    <div className="text-5xl mb-6 drop-shadow-lg">🎯</div>
                    <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">Our Mission</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        To cut through the noise of the tech world and deliver only the highest-quality, most reliable, and beautifully designed hardware directly to creators and professionals.
                    </p>
                </div>
                <div className="glass-panel p-8 md:p-12 transition-transform duration-300 hover:-translate-y-2">
                    <div className="text-5xl mb-6 drop-shadow-lg">👁️</div>
                    <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">Our Vision</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        A world where technology gets out of your way and seamlessly empowers your creativity. We aim to be the definitive destination for premium tech hardware globally.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="glass-panel p-8 md:p-16 mb-24 relative overflow-hidden border border-blue-500/20">
                <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
                <div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
                
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white tracking-tight">The Tech360 Story</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Tech360 Mini started in 2026 with a simple observation: buying technology had become overwhelming. Between endless spec sheets, confusing product variations, and compromised builds, finding the perfect device felt like a chore rather than an exciting upgrade.
                    </p>
                    <p>
                        We decided to change that. By establishing Tech360 Mini, we created a boutique storefront that completely eliminates the guesswork. We do the heavy lifting of testing and validating tech so you don't have to. Every product in our catalog—from high-performance laptops to cutting-edge wearables—has earned its place by passing our rigorous standards for performance, design, and longevity.
                    </p>
                    <p>
                        Today, we are proud to serve thousands of developers, designers, and tech enthusiasts who trust us to power their digital lives.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-white tracking-tight">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 text-2xl">✨</div>
                        <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
                        <p className="text-gray-400 leading-relaxed">If it isn't premium, we don't sell it. We stand by the build quality and performance of every single item.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 text-2xl">🤝</div>
                        <h3 className="text-xl font-bold text-white mb-3">Customer Centric</h3>
                        <p className="text-gray-400 leading-relaxed">Your experience is our absolute priority. We offer fast shipping, easy returns, and dedicated support.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 text-2xl">🚀</div>
                        <h3 className="text-xl font-bold text-white mb-3">Forward Thinking</h3>
                        <p className="text-gray-400 leading-relaxed">We constantly adapt and evolve our catalog to feature only next-generation innovations.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}