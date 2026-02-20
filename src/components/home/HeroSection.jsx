import { NavLink } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
          Não é falta de capacidade.
          <br />
          <span className="opacity-80">É o processo.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto">
          Documentando crises técnicas, emocionais e microvitórias
          no caminho.
        </p>

        <div className="flex justify-center gap-4 pt-8">
          <a
            href="/diario"
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
          >
            Ver Diário
          </a>

          <a
            href="/projetos"
            className="px-6 py-3 rounded-md border border-neutral-600 hover:border-white transition"
          >
            Ver Projetos
          </a>
        </div>

      </div>
    </section>
  )
}