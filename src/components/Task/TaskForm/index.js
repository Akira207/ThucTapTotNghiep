import { useState } from "react";
import classNames from "classnames/bind";
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
    <form className={cx("wrapper")}>
      <h2 className={cx("title")}>Nhập công việc</h2>

      <div className={cx("input-box")}>
        <input
          className={cx("input")}
          value={title}
          placeholder=" "
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Tên công việc</label>
      </div>

      <div className={cx("input-box")}>
        <textarea
          className={cx("input")}
          value={description}
          placeholder=" "
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Mô tả công việc</label>
      </div>

      <div className={cx("input-box")}>
        {/* <label className={cx("static-label")}>Deadline</label> */}
        <input
          type="date"
          className={cx("input")}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button className={cx('btn')}  onClick={handleSubmit}>Thêm công việc</button>
    </form>
  );
}

export default TaskForm;
