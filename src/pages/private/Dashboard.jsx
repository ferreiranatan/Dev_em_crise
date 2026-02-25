import { useDiario } from "../../hooks/useDiario";
import DiaryForm from "../../components/diario/DiaryForm";
import DiaryCard from "../../components/diario/DiaryCard";

export default function Dashboard() {
  const { entries, loading, error, addEntry } = useDiario();

  if (loading) return <p className="text-center py-20">Carregando...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">
        Dashboard
      </h1>

      <DiaryForm onAdd={addEntry} />

      <div className="space-y-6">
        {entries.length === 0 ? (
          <p className="text-center text-zinc-400">
            Nenhum registro ainda.
          </p>
        ) : (
          entries.map((entry) => (
            <DiaryCard key={entry.id} {...entry} />
          ))
        )}
      </div>
    </section>
  );
}