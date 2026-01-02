import TaskItem from "./TaskItem";

import styles from "./TaskList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TaskList({ tasks, onSelectTask, onDelete }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Danh sách công việc</h3>

      {tasks.length === 0 && <p>Chưa có công việc</p>}

      <ul className={cx('task-list')} >
        {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onSelectTask={onSelectTask}
          onDelete={onDelete}
        />
      ))}
      </ul>
    </div>
  );
}

export default TaskList;
