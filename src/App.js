import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">{count}</h1>
        <button onClick={IncNum} className="btn">
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;