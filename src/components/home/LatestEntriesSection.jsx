export default function LatestEntriesSection() {
  return (
   <section className="entries-section">
  <div className="entries-header">
    <p className="section-label">Diário</p>
    <h2>Últimos registros</h2>
  </div>

  <div className="entries-grid">

    <div className="entry-card">
      <span className="entry-date">12 Fev 2026</span>
      <h3>Quando o código trava, eu também travo</h3>
      <p>
        Hoje eu percebi que não era bug. Era exaustão mental disfarçada de erro técnico.
      </p>
      <a href="/diario/1">Ler registro</a>
    </div>

    <div className="entry-card">
      <span className="entry-date">08 Fev 2026</span>
      <h3>Refatorando a mim mesmo</h3>
      <p>
        Às vezes melhorar o código é mais fácil do que melhorar a própria disciplina.
      </p>
      <a href="/diario/2">Ler registro</a>
    </div>

    <div className="entry-card">
      <span className="entry-date">02 Fev 2026</span>
      <h3>Microvitória invisível</h3>
      <p>
        Ninguém viu. Não postei. Mas hoje eu consegui resolver algo que me travava há dias.
      </p>
      <a href="/diario/3">Ler registro</a>
    </div>

  </div>
</section>
  )
}