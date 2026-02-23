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
          Documentando crises técnicas, emocionais e microvitórias no caminho.
        </p>

          <div className="hero-buttons">
            <a href="/diario" className="btn-primary">
              Ver Diário
            </a>

            <a href="/projetos" className="btn-secondary">
              Ver Projetos
            </a>
          </div>
        </div>
    </section>
  );
}
