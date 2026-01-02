import TaskItem from "./TaskItem";

function TaskList({ tasks, onSelectTask, onDelete }) {
  return (
    <div>
      <h3>Danh sách công việc</h3>

      {tasks.length === 0 && <p>Chưa có công việc</p>}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onSelectTask={onSelectTask}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
