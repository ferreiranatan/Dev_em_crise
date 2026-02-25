import { Link } from "react-router-dom";
import DiaryCard from "../diario/DiaryCard";
import diaryData from "../../mocks/projectData";

export default function LatestUpdates() {
  const latest = diaryData.slice(0, 3);

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-semibold text-center mb-14">
        Últimos registros
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latest.map((entry) => (
          <DiaryCard key={entry.id} {...entry} />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/diario"
          className="text-neutral-400 hover:text-white transition"
        >
          Ver todos →
        </Link>
      </div>

    </section>
  );
}