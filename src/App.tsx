import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw Error("Something went wrong!" + action.type);
  }
};

export function App() {
  const [state, dispach] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div
      className="flex font-semibold p-2 bg-slate-700 justify-center flex-col w-full mx-auto gap-2"
      style={{ color: state.color ? "#FFF" : "#FFF952" }}
    >
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispach({ type: "newUserInput", payload: e.target.value })
        }
        className="p-2 outline-none max-w-md mx-auto text-black"
      />
      <br />
      <p className="mx-auto mb-5 text-white text-2xl">{state.count}</p>
      <div className="flex gap-3 mx-auto">
        <button
          className="bg-black p-2 rounded"
          onClick={() => dispach({ type: "increment" })}
        >
          +
        </button>
        <button
          className="bg-black px-2 rounded"
          onClick={() => dispach({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="bg-black p-2 rounded"
          onClick={() => dispach({ type: "tgColor" })}
        >
          Toggle Color
        </button>
      </div>
      <p className="mx-auto mb-5 text-white text-2xl">{state.userInput}</p>
    </div>
  );
}
