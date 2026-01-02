import { useEffect, useState } from "react";

function TaskDetail({ task, onUpdate, onDelete, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Todo");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setDeadline(task.deadline || "");
      setStatus(task.status);
    }
  }, [task]);

  if (!task) return null;

  const handleUpdate = () => {
    onUpdate({
      ...task,
      title,
      description,
      deadline,
      status,
    });
  };

  return (
    <div>
      <h3>Chi tiết công việc</h3>

      {/* Tên công việc */}
      <div>
        <label>Tên công việc</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Mô tả */}
      <div>
        <label>Mô tả</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Hạn hoàn thành */}
      <div>
        <label>Hạn hoàn thành</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      {/* Trạng thái */}
      <div>
        <label>Trạng thái</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Nút thao tác */}
      <div style={{ marginTop: 10 }}>
        <button onClick={handleUpdate}>Cập nhật</button>
        <button onClick={() => onDelete(task.id)}>Xóa</button>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}

export default TaskDetail;
