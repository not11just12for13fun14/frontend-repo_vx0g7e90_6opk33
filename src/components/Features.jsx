import { Sparkles, ShieldCheck, Activity, Cpu } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Non‑invasive treatments',
    desc: 'Advanced modalities for rejuvenation, contouring, and skin health with minimal downtime.'
  },
  {
    icon: ShieldCheck,
    title: 'Clinically validated',
    desc: 'Protocols aligned with the latest research and safety standards.'
  },
  {
    icon: Activity,
    title: 'Outcome tracking',
    desc: '3D baselines and progress visualizations for measurable, transparent results.'
  },
  {
    icon: Cpu,
    title: 'Smart planning',
    desc: 'AI‑assisted mapping to personalize treatment plans for every skin profile.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative bg-[#0A0D14] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Treatments designed around you</h2>
          <p className="mt-3 text-white/70">From prevention to correction, our technology‑forward approach delivers natural, lasting results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="inline-flex rounded-lg bg-cyan-500/10 p-3 ring-1 ring-cyan-500/20">
                <Icon className="text-cyan-400" size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
