import { useCounter } from "./ContextAPI/useCounter";

const CounterWithContextAPI = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterWithContextAPI;