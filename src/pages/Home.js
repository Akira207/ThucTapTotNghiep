import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";
import TaskDetail from "../components/Task/TaskDetail";
import TaskSearch from "../components/Task/TaskSearch";
import TaskFilter from "../components/Task/TaskFilter";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
        }}
      >
        {/* CỘT TRÁI: Nhập công việc */}
        <div style={{ flex: 1 }}>
          <TaskForm />
        </div>

        {/* CỘT GIỮA: Danh sách công việc */}
        <div style={{ flex: 2 }}>
          <TaskList />
          <TaskDetail />
        </div>

        {/* CỘT PHẢI: Tìm kiếm + Lọc */}
        <div style={{ flex: 1 }}>
          <TaskSearch />
          <TaskFilter />
        </div>
      </div>
    </>
  );
}

export default Home;
