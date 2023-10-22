import React from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Counter;
