import { useState } from "react";
import { v4 } from "uuid";
import "./styles.css";

export default function App() {
  let [data, setdata] = useState();
  let [list, addlist] = useState([]);

  const addtodata = (event) => {
    let item = event.target.value;

    setdata(item);
  };

  const addtoList = () => {
    let item = { name: data, id: v4(), isStrike: false };
    let arr = [...list, item];
    addlist(arr);
  };
  const markStrike = (id) => {
    let newItem = list.map((item) =>
      item.id === id ? { ...item, isStrike: true } : item
    );
    addlist(newItem);
  };

  return (
    <div className="App">
      <input
        onChange={(event) => {
          addtodata(event);
        }}
      ></input>
      <button onClick={() => addtoList()}>Add</button>
      <ul>
        {list.map(({ id, name, isStrike }) => (
          <li key={id} onClick={() => markStrike(id)}>
            {isStrike ? <s>{name}</s> : name}
          </li>
        ))}
      </ul>
    </div>
  );
}
