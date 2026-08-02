export default function StatGrid({ stats }) {
  const items = [
    { label: "Total books", value: stats.total },
    { label: "Currently reading", value: stats.reading },
    { label: "Completed", value: stats.completed },
    { label: "Average progress", value: `${stats.averageProgress}%` },
  ];

  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article className="stat-card" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}
