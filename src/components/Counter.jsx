import React, { useState } from "react";

const Counter = () => {
// useState is use for tracking the state
// In useState we have getter and setter.
// setter function is use for setting the new value to the getter.
// setter function set only the getter variable value.
  const [count, setCount] = useState(1);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 1) setCount(count - 1);
    else setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}> Increment</button>
      <button onClick={dec}> Decrement</button>
    </div>
  );
};

export default Counter;
