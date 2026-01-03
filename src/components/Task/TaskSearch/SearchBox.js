import { useEffect, useState } from "react";

import styles from "./TaskSearch.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchBox({ value, onChange }) {
  const [text, setText] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(text);
    }, 300);

    return () => clearTimeout(timer);
  }, [text, onChange]);

  return (
    <div className="search-box">
      <h2 className={cx("title")}>Tìm kiếm</h2>
      <div className={cx('input-box')}>
        <input 
          className={cx('input')} 
          placeholder=" "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Tìm kiếm công việc...</label>
      </div>
    </div>
  );
}

export default SearchBox;
