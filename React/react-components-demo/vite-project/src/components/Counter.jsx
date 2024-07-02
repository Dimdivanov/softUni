import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementBtnClick = () => {
    setCount(count + 1);
  };

  const decrementBtnClick = () => {
    setCount(count - 1);
  };
  let message = 'Kill Streak';
  if (count == 1) {
    message = `First Blood! 💀`;
  }
  return (
    <>
      <h2>Kill Counter</h2>
      <h3>{message}</h3>
      <p>{count}</p>
      <button onClick={decrementBtnClick}>-</button>
      <button onClick={incrementBtnClick}>+</button>
    </>
  );
}
