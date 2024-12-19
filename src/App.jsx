import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function getDate(numDays) {
    function getDetails() {
      if (numDays == 0) {
        return `Today is `;
      } else if (numDays < 0) {
        return `${Math.abs(numDays)} ago from today is`;
      } else {
        return `${numDays} from today is`;
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
      <RadioButton
        title="STEP"
        value={step}
        onIncrement={() => setStep(step + 1)}
        onDecrement={() => setStep(Math.max(1, step - 1))}
      />
      <RadioButton
        title="COUNT"
        value={count}
        onIncrement={() => setCount(count + step)}
        onDecrement={() => setCount(count - step)}
      />
      <p>{getDate(count)}</p>
    </div>
  );
}
function RadioButton({ title, value, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center gap-5 text-3xl font-bold ">
      <Button onClick={onDecrement}>-</Button>
      <span>
        {title} : {value}
      </span>
      <Button onClick={onIncrement}>+</Button>
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
