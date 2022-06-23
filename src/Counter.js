import Button from "./CounterButton";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Counter({ startValue, increase, decrease }) {
  const [number, setNumber] = useState(startValue || 0);

  const decre = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
    }
  };

  useEffect(() => {
    if (startValue) {
      setNumber(startValue);
    } else {
      setNumber(0);
    }
  }, [startValue]);

  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{number}</p>
      <Button
        onClick={() => setNumber(number + (increase || 5))}
        text="Increase"
        cusClass="Btn-counter"
      />
      <Button onClick={decre} text="Decrease" cusClass="Btn-counter" />
    </div>
  );
}
