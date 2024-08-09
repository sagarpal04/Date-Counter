import React, { useReducer } from "react";
import "./index.css";

const initialState = {
  count: 0,
  step: 1,
  date: new Date(),
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + state.step,
        date: new Date(state.date.getTime() + state.step * 24 * 60 * 60 * 1000),
      };
    case "decrement":
      return {
        ...state,
        count: state.count - state.step,
        date: new Date(state.date.getTime() - state.step * 24 * 60 * 60 * 1000),
      };
    case "reset":
      return initialState;
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{state.date.toDateString()}</h1>
      <div className="box">
        <div className="range">
          <input
            type="range"
            min={1}
            max={10}
            value={state.step}
            onChange={(e) =>
              dispatch({ type: "setStep", payload: Number(e.target.value) })
            }
          />
          <span>{state.step}</span>
        </div>
        <div className="controller">
          <button onClick={() => dispatch({ type: "decrement" })}>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <p>{state.count}</p>
          <button onClick={() => dispatch({ type: "increment" })}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <div className="reset">
          <button onClick={() => dispatch({ type: "reset" })}>
            <ion-icon name="refresh-outline"></ion-icon>
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
