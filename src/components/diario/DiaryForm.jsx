import { useState } from "react";

export default function DiaryForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !content) return;

    onAdd({ title, content });

    setTitle("");
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-6 rounded-2xl shadow-md mb-10"
    >
      <h2 className="text-2xl font-semibold mb-4">
        Nova crise
      </h2>

      <input
        type="text"
        placeholder="Título"
        className="w-full mb-4 p-3 rounded-lg bg-zinc-800 border border-zinc-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Descreva o que aconteceu..."
        className="w-full mb-4 p-3 rounded-lg bg-zinc-800 border border-zinc-700"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2 rounded-lg"
      >
        Salvar
      </button>
    </form>
  );
}