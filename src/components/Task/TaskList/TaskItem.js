function TaskItem({ task, onSelectTask, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 8,
        marginBottom: 8
      }}
    >
      <strong>{task.title}</strong>
      <div>{task.status}</div>

      <div style={{ marginTop: 6 }}>
        <button onClick={() => onSelectTask(task)}>
          Chi tiết
        </button>

        <button onClick={() => onDelete(task.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
