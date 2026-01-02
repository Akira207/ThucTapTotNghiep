function TaskFilter({ onChange }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;

    onChange((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  return (
    <div>
      <h4>Lọc trạng thái</h4>

      {["Todo", "In Progress", "Done"].map((status) => (
        <div key={status}>
          <input
            type="checkbox"
            value={status}
            onChange={handleChange}
          />
          {status}
        </div>
      ))}
    </div>
  );
}

export default TaskFilter;
