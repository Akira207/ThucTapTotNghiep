import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

import styles from './TaskSearch.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TaskSearch({ keyword, onSearch, results, onSelectTask }) {
  return (
    <div className={cx('wrapper')}>
      <SearchBox value={keyword} onChange={onSearch} />
      <SearchResult results={results} onSelectTask={onSelectTask} />
    </div>
  );
}

export default TaskSearch;
