export default function DiaryList({ entries }) {
  return (
    <div>
      {entries.map(entry => (
        <DiaryCard key={entry.id} {...entry} />
      ))}
    </div>
  );
}