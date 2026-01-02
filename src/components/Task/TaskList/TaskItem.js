import styles from "./TaskList.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function TaskItem({ task, onSelectTask, onDelete }) {
  return (
    <li className={cx("task-item")}>
      <div
        className={cx(
          "item-title",
          task.status === "Done"
            ? "done"
            : task.status === "In Progress"
            ? "in-progress"
            : "todo"
        )}
      >
        {task.title}
      </div>

      <div className={cx("item-actions")}>
        <span
          title="Xem / chỉnh sửa công việc"
          onClick={() => onSelectTask(task)}
        >
          <FontAwesomeIcon icon={faPen} />
        </span>
        {" | "}
        <span onClick={() => onDelete(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </li>
  );
}

export default TaskItem;
