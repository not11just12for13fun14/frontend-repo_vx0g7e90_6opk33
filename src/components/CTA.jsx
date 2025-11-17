export default function CTA() {
  return (
    <section id="booking" className="relative bg-gradient-to-br from-cyan-600 to-blue-700 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Start with a complimentary 15‑minute consultation</h3>
            <p className="mt-3 text-white/90 max-w-xl">Speak with a clinician to evaluate goals, review options, and build a tailored plan. In‑clinic and virtual sessions available.</p>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="w-full rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40" />
              <input required placeholder="Email" type="email" className="w-full rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40" />
            </div>
            <input required placeholder="Phone" className="w-full rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40" />
            <textarea required rows="3" placeholder="What are your goals?" className="w-full rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40" />
            <button type="submit" className="w-full rounded-md bg-black/80 px-6 py-3 font-medium hover:bg-black">Request consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}
