import { useAppDispatch, useAppSelector } from "./redux/hook";
import {
  decrement,
  increment,
  incrementbyvalue,
} from "./redux/featuers/CounterSlice";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className=" flex p-10 border rounded-md bg-slate-300 justify-center items-center gap-3">
        <button
          onClick={() => dispatch(incrementbyvalue(5))}
          className="px-3 py-3 bg-green-600 text-white border rounded-md "
        >
          Increment by vlaue 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 bg-green-600 text-white border rounded-md "
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 bg-red-600 text-white border rounded-md "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
