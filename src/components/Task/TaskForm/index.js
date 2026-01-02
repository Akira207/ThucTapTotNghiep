import { useState } from "react";
import classNames from 'classnames/bind';
import styles from "./TaskForm.module.scss";

const cx = classNames.bind(styles);

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title,
      description,
      deadline,
      status: "Todo",
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <form className={cx('wrapper')} >
      <h2 className={cx('title')}>Nhập công việc</h2>

      <input
        placeholder="Tên công việc"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Mô tả công việc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button onClick={handleSubmit}>Thêm công việc</button>
    </form>
  );
}

export default TaskForm;
