import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#05070B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 lg:col-span-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Medical aesthetics • FDA-cleared technologies
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Precision care, elevated by 3D technology
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            Experience modern medical esthetics powered by real‑time 3D visualization. Non‑invasive treatments, tailored plans, and measurable results — delivered with clinical excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
              Book a consultation
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10">
              Explore services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="text-3xl font-semibold">10k+</p>
              <p className="text-xs text-white/60">Treatments delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">98%</p>
              <p className="text-xs text-white/60">Patient satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">3D</p>
              <p className="text-xs text-white/60">Planning & tracking</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-6" />
      </div>
    </section>
  )
}
