import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

function TaskSearch({ keyword, onSearch, results, onSelectTask }) {
  return (
    <div>
      <SearchBox value={keyword} onChange={onSearch} />
      <SearchResult results={results} onSelectTask={onSelectTask} />
    </div>
  );
}

export default TaskSearch;
