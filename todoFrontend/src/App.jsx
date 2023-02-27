import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const rootUrl = "http://localhost:3001/todo";

function App() {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  const handleTodo = (todo) => {
    setTodo(todo);
  };

  const getTodo = async () => {
    const result = await axios.get(`${rootUrl}/getTodo`);
    // console.log("result:::;", result.data);
    setTodo(result.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30 }}>
        <h1 style={{ textAlign: "center" }}>Todo List App</h1>
        <button style={{margin: 0}} onClick={logout}>Logout</button>
      </div>
      <div>
        <Add handleTodo={handleTodo} todo={todo} />
      </div>
      <div className="cardDiv">
        {todo &&
          todo.map((ele, index) => (
            <>
              <div key={index} className="cardBody">
                <p>
                  Title: <span>{ele.title}</span>
                  <br />
                </p>
                <p>
                  Description: <span>{ele.description}</span>
                </p>
                <p>
                  Status: <span>{ele.status}</span>
                </p>
                {/* <span>
                  <Delete
                    id={ele._id}
                    index={index}
                    handleTodo={handleTodo}
                    todo={todo}
                  />
                </span>
                <span>
                  <Update
                    element={ele}
                    handleTodo={handleTodo}
                    todo={todo}
                    index={index}
                  />
                </span> */}
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default App;
