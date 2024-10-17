import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div
      style={{
        border: "1px solid yellow",
        borderRadius: "10px",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button style={{ marginRight: "10px" }} onClick={handleAdd}>
        +
      </button>
      <button style={{ marginLeft: "10px" }} onClick={handleReduce}>
        -
      </button>
    </div>
  );
}
