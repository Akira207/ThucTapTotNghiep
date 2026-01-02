import { useEffect, useState } from "react";

function SearchBox({ value, onChange }) {
  const [text, setText] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(text);
    }, 300);

    return () => clearTimeout(timer);
  }, [text, onChange]);

  return (
    <div>
      <h4>Tìm kiếm</h4>
      <input
        placeholder="Nhập từ khóa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
