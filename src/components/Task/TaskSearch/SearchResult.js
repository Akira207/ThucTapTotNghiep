import styles from "./TaskSearch.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchResult({ results, onSelectTask }) {
  return (
    <div className={cx("search-result")}>
      <h2 className={cx("search-result-title")}>Kết quả tìm kiếm</h2>

      {results.length === 0 && <h4 className={cx('no-results')}>Không có kết quả</h4>}

      <ul className={cx("search-result-list")}>
        {results.map((task) => (
          <li className={cx("search-result-item")}>
            <div
              className={cx(
                "item-title",
                task.status === "Done"
                  ? "done"
                  : task.status === "In Progress"
                  ? "in-progress"
                  : "todo"
              )}
              key={task.id}
              onClick={() => onSelectTask(task)}
            >
              {task.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;

// className={cx(
//           "item-title",
//           task.status === "Done"
//             ? "done"
//             : task.status === "In Progress"
//             ? "in-progress"
//             : "todo"
//         )}
