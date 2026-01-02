import { useEffect, useState } from "react";
import classNames from 'classnames/bind';

import styles from "./Home.module.scss";

import TaskForm from "../../components/Task/TaskForm";
import TaskList from "../../components/Task/TaskList";
import TaskDetail from "../../components/Task/TaskDetail";
import TaskSearch from "../../components/Task/TaskSearch";
import TaskFilter from "../../components/Task/TaskFilter";

import { getTasks, saveTasks } from "../../services/taskService";

const cx = classNames.bind(styles);

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState([]);


  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const selectedTask = tasks.find((t) => t.id === selectedTaskId);


  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(newTasks);
    setSelectedTaskId(null);
    saveTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
    setSelectedTaskId(null);
    saveTasks(newTasks);
  };

  const searchResults =
    searchKeyword.trim() === ""
      ? []
      : tasks.filter((task) => {
          const keyword = searchKeyword.toLowerCase();

          const matchKeyword =
            task.title.toLowerCase().includes(keyword) ||
            (task.description || "")
              .toLowerCase()
              .includes(keyword);

          const matchStatus =
            statusFilter.length === 0 ||
            statusFilter.includes(task.status);

          return matchKeyword && matchStatus;
        });


  return (
     <div className="row" >
    
      <div className="col c-3" >
        <TaskForm onAddTask={addTask} />
      </div>
     
      <div className="col c-6" >
        {!selectedTask && (
          <TaskList
            tasks={tasks}
            onSelectTask={(task) => setSelectedTaskId(task.id)}
            onDelete={deleteTask}
          />
        )}

        {selectedTask && (
          <TaskDetail
            task={selectedTask}
            onUpdate={updateTask}
            onDelete={deleteTask}
            onClose={() => setSelectedTaskId(null)}
          />
        )}
      </div>

      <div className="col c-3" >
        <TaskSearch
          keyword={searchKeyword}
          onSearch={setSearchKeyword}
          results={searchResults}
          onSelectTask={(task) => setSelectedTaskId(task.id)}
        />

        <TaskFilter onChange={setStatusFilter} />
      </div>
    </div>
  );
}

export default Home;