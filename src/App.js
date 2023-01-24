import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveTaskToRedux } from "./redux/reducer";
export default function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const ourstore = useSelector((state) => state);
  console.log(ourstore.tasks.length);
  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const saveToRedux = () => {
    dispatch(saveTaskToRedux(input));
    console.log("called");
    setInput("");
  };
  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
        <input value={input} onChange={changeHandler}></input>
        <button onClick={saveToRedux}>save Task</button>
        <h1>task length = {ourstore.tasks.length}</h1>
        {ourstore.tasks.map((task) => (
          <h3>{task}</h3>
        ))}
      </header>
    </div>
  );
}
