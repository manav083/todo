import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";
// import { useNavigate } from "react-router-dom";

const rootUrl = "http://localhost:3001/user";

function App() {
  const [todo, setTodo] = useState([]);
  const [updatedTitle, setUpdatedTitle] = useState("");
  // const history = useNavigate();

  const handleTodo = (todo) => {
    setTodo(todo);
  };

  const getTodo = async () => {
    const result = await axios.get(`${rootUrl}/getTodo`);
    // console.log("result:::;", result.data);
    setTodo(result.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <div>
        <div>
          <Add handleTodo={handleTodo} todo={todo} />
        </div>
        <table style={{ marginTop: 70, width: "90vw", position: "absolute" }}>
          <tr>
            <th>S No.</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {todo &&
            todo.map((ele, index) => (
              <>
                <tr style={{ textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{ele.title}</td>
                  <td>{ele.description}</td>
                  <td>{ele.status}</td>
                  <td>
                    <span>
                        <Delete id={ele._id} index={index} handleTodo={handleTodo} todo={todo} />
                    </span>
                    <span>
                      <Update element={ele} handleTodo={handleTodo} todo={todo} index={index}/>
                    </span>
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </>
  );
}

export default App;
