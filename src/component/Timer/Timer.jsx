import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 60) return;
    const timer = setInterval(() => {
      setCount(() => count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <h1>Timer: {count}</h1>;
};
export default Timer;
