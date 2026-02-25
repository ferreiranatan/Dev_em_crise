import DiaryCard from "../../components/diario/DiaryCard";
import { useDiario } from "../../hooks/useDiario";

export default function Diario() {
  const { entries, loading, error } = useDiario();

  if (loading) {
    return <p className="text-center py-20">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center py-20 text-red-500">{error}</p>;
  }

  if (!entries.length) {
    return <p className="text-center py-20">Nenhum registro ainda.</p>;
  }

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">
        Diário
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <DiaryCard key={entry.id} {...entry} />
        ))}
      </div>
    </section>
  );
}