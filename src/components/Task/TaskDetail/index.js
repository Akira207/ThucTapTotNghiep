import { useEffect, useState } from "react";
import styles from "./TaskDetail.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

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
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Chi tiết công việc</h2>

      {/* Tên công việc */}
      <div className={cx("input-box")}>
        <label className={cx("input-title")}>Tên công việc</label>
        <input
          className={cx("input-field")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Mô tả */}
      <div className={cx("input-box")}>
        <label className={cx("input-title")}>Mô tả</label>
        <textarea
          className={cx("input-field")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Hạn hoàn thành */}
      <div className={cx("input-box-row")}>
        <label className={cx("input-title")}>Hạn hoàn thành: </label>
        <input
          className={cx("input-field")}
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      {/* Trạng thái */}
      <div className={cx("input-box-row")}>
        <label className={cx("input-title")}>Trạng thái</label>
        <select
          className={cx("input-field")}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Todo">Đang làm</option>
          <option value="In Progress">Quá hạn</option>
          <option value="Done">Hoàn Thành</option>
        </select>
      </div>

      {/* Nút thao tác */}
      <div className={cx("action-buttons")}>
        <button className={cx("btn")} onClick={handleUpdate}>
          Cập nhật
        </button>
        <button className={cx("btn")} onClick={() => onDelete(task.id)}>
          Xóa
        </button>
      </div>
      <button className={cx("btn-close")} onClick={onClose}>
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </button>
    </div>
  );
}

export default TaskDetail;
