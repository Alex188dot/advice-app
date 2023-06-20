import logo from "./logo.svg";
import "./App.css";
import "./styles/output.css";

import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">{advice}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={getAdvice}
      >
        Get advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p className="mt-6">
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
