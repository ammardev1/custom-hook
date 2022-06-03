import React, { useState } from "react";
import UseDocumentTitle from "./UseDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  UseDocumentTitle(count);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Count - {count}</button>
    </div>
  );
}
export default DocTitleOne;
