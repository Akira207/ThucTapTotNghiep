function SearchResult({ results, onSelectTask }) {
  return (
    <div>
      <h4>Kết quả tìm kiếm</h4>

      {results.length === 0 && <p>Không có kết quả</p>}

      {results.map((task) => (
        <div
          key={task.id}
          onClick={() => onSelectTask(task)}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: 6,
            marginBottom: 6,
          }}
        >
          <strong>{task.title}</strong>
          <div style={{ fontSize: 12 }}>{task.status}</div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
