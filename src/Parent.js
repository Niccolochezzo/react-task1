import { useState } from "react";
import Counter from "./Counter";

export default function Parent() {
  const [inputValue, setInputValue] = useState(90);
  const [start, setStart] = useState();

  return (
    <div className="parent">
      <p>{inputValue} </p>
      <input
        type="number"
        placeholder="Type Number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setStart(parseInt(inputValue))}>
        Change Value
      </button>
      <Counter startValue={start} increase={10} decrease={1} />
      <Counter increase={20} decrease={1} />
      <Counter startValue={200} decrease={1} />
    </div>
  );
}
