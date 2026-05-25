export default function AbigailsHub() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-black to-purple-900 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-400 mb-4 text-sm">
              Welcome to BlueNova
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Your Favorite <span className="text-purple-400">Gen Z</span> Product Hub
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover trendy products, modern vibes, and a bold shopping experience designed for the next generation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-semibold shadow-xl">
                <a
  href="https://a.co/d/0805vX2F"
  target="_blank"
  className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-semibold shadow-xl inline-block"
>
  Buy on Amazon
</a>
              </button>
              <button className="border border-purple-500 hover:bg-purple-600/20 transition px-6 py-3 rounded-2xl font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 rounded-3xl h-40"></div>
                <div className="bg-purple-500 rounded-3xl h-52 mt-8"></div>
                <div className="bg-gray-800 rounded-3xl h-52 -mt-8"></div>
                <div className="bg-blue-400 rounded-3xl h-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About BlueNova</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            BlueNova is a fresh modern brand built for people who love style, creativity, and trending products. We’re creating a space where shopping feels exciting, aesthetic, and connected to Gen Z culture.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold">Featured Products</h2>
              <p className="text-gray-400 mt-2">Products coming soon...</p>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-3 w-full md:w-80 outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition rounded-[2rem] overflow-hidden shadow-xl"
              >
                <div className="h-56 bg-gradient-to-br from-blue-700 to-purple-700"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-gray-400 mb-4">
                    Trendy products will appear here soon.
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-2xl py-3 font-semibold">
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 text-lg">
              More than products — a whole vibe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Modern Shopping',
              'Fast Delivery',
              'Gen Z Trends',
            ].map((service) => (
              <div
                key={service}
                className="bg-black border border-zinc-800 rounded-[2rem] p-8 hover:border-blue-500 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <h3 className="text-2xl font-bold mb-3">{service}</h3>
                <p className="text-gray-400">
                  Designed to give customers a smooth and exciting online experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-purple-900 rounded-[2rem] p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-200 mb-8 text-lg">
            Ready to connect with BlueNova? Reach out anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/30 border border-white/20 rounded-2xl px-5 py-4 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/30 border border-white/20 rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-black/30 border border-white/20 rounded-2xl px-5 py-4 outline-none mb-6"
          ></textarea>

          <button className="bg-white text-black hover:bg-gray-200 transition px-8 py-4 rounded-2xl font-bold text-lg">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-gray-500">
        <p>© 2026 BlueNova. All rights reserved.</p>
      </footer>
    </div>
  );
}
