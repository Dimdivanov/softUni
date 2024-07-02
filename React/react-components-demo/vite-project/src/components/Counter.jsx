import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementBtnClick = () => {
    setCount(count + 1);
  };

  const decrementBtnClick = () => {
    setCount(count - 1);
  };
  const resetBtnClick = () => {
    setCount(0);
  };
  let message = 'Kill Streak';
  if (count == 1) {
    message = `First Blood! 💀`;
  }
  if (count < 0) {
    message = `You're bad RIP`;
  }
  let streak = 'Positive';
  if (count < 0) {
    streak = `Negative`;
  }

  return (
    <>
      <h1>{streak}</h1>
      <h2>{message}</h2>
      <p>{count}</p>
      <button onClick={decrementBtnClick}>-</button>
      <button onClick={resetBtnClick}>Reset</button>
      <button onClick={incrementBtnClick}>+</button>
    </>
  );
}
