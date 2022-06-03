import React, { useEffect, useState } from "react";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count  ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Count - {count}</button>
    </div>
  );
}
export default DocTitleTwo;
