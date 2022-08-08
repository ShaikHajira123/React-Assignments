import {  useState } from "react";
import { Todolist } from "../../../day4-simpleTodo/vite-project/src/components/Todolist";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [copy, setCopy] = useState([]);
  const [filter,setFilter] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(text)
  };

  const handleSubmit = (data) => {
    const payload = {
      name: data,
      status: true,
      id: Math.floor(Math.random() * 100),
    };
    var copyData = [...todo];
    setCopy(copyData);
    setTodo([...todo, payload]);
  };

  const handleStatus = (id) => {
    setTodo(todo.map((e) => (e.id == id ? { ...e, status: !e.status } : e)));
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((e) => e.id != id));
  };

  const handleSort = (e) => {
    if (e.target.value == "asc") {
      setTodo([...todo.sort((a, b) => (a.name > b.name ? 1 : -1))]);
    } else if (e.target.value == "desc") {
      setTodo([...todo.sort((a, b) => (a.name > b.name ? -1 : 1))]);
    } else if (e.target.value == "original") {
      setTodo([...copy]);
    }
  };
console.log(filter)

  return (
    <div>
      <input type="text" placeholder="filter todos...." onChange=
      {(e)=>setFilter(e.target.value)}
      />
      <input type="text" placeholder="enter todo...." onChange={handleChange} />
      <button onClick={() => handleSubmit(text)}>Add</button>

      <select onChange={handleSort}>
        <option value="asc">Asc</option>
        <option value="desc">Des</option>
        <option value="original">Original</option>
      </select>

      {todo.filter(e=>e.name.includes(filter)).map((e, ind) => (
        <div className="todoitem">
          <h2>
            {e.name}
            <span>
              <button
                style={{ color: e.status ? "red" : "green", border: "0" }}
                onClick={() => handleStatus(e.id)}
                >
                ⬤{" "}
              </button>
            </span>
            <span>
              <button onClick={() => deleteTodo(e.id)}>Delete</button>
            </span>
          </h2>
        </div>
      ))}
    </div>
  );
 
};
