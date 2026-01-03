import styles from "./TaskFilter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TaskFilter({ onChange }) {
  const STATUS_LABELS = {
    Todo: "Đang làm",
    "In Progress": "Chưa làm",
    Done: "Hoàn thành",
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;

    onChange((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  return (
    <div className={cx("wrapper")}>
      {["Todo", "In Progress", "Done"].map((status) => (
        <label key={status} className={cx("checkbox")}>
          <input type="checkbox" value={status} onChange={handleChange} />
          <span className={cx("checkmark")}></span>
          <span
            className={cx(
              "label",
              status === "Done"
                ? "done"
                : status === "In Progress"
                ? "in-progress"
                : "todo"
            )}
          >
            {STATUS_LABELS[status]}
          </span>
        </label>
      ))}
    </div>
  );
}

export default TaskFilter;
