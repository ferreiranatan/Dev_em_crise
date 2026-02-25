export default function DiaryCard({ title, excerpt, date }) {
  return (
    <article className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 
                        shadow-sm transition-all duration-300 
                        hover:shadow-lg hover:-translate-y-1 hover:border-neutral-600">
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-neutral-400 leading-relaxed mb-6">
        {excerpt}
      </p>

      <div className="flex justify-between items-center text-sm text-neutral-500">
        <span>
          {new Date(date).toLocaleDateString("pt-BR")}
        </span>
        <span className="text-neutral-400">→</span>
      </div>

    </article>
  );
}