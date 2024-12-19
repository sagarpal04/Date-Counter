import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function getDate(numDays) {
    function getDetails() {
      if (numDays === 0) {
        return `Today is `;
      } else if (numDays < 0) {
        return `${Math.abs(numDays)} day(s) ago from today is `;
      } else {
        return `${numDays} day(s) from today is `;
      }
    }

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + numDays);
    const weekDay = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const month = currentDate.toLocaleDateString("en-US", { month: "long" });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${getDetails()} ${weekDay}, ${month} ${date}, ${year}`;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <div className="text-xl flex items-center gap-2">
        <label htmlFor="stepRange">Step: </label>
        <input
          id="stepRange"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="flex items-center text-3xl font-bold">
        <Button onClick={() => setCount((c) => c - step)}>-</Button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border-black rounded-lg border-2"
        />
        <Button onClick={() => setCount((c) => c + step)}>+</Button>
      </div>
      <p>{getDate(count)}</p>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="bg-green-400 text-white rounded-lg h-10 w-10 flex items-center justify-center text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
