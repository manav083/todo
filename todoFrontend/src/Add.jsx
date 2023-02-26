import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";
import axios from "axios";

const rootUrl = "http://localhost:3001/todo";

const Add = (props) => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("todo");
  const [description, setDescription] = useState("");
  const [object, setObject] = useState({
    flag: "",
    heading: "",
    modalTitle: "",
    modalDescription: "",
    modalStatus: "",
    buttonText: "",
  });

  const handleObject = (flag, heading, title, description, status, buttonText) => {
    setObject({
      flag: flag,
      heading: heading,
      modalTitle: title,
      modalDescription: description,
      modalStatus: status,
      buttonText: buttonText,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleStatus = (status) => {
    setStatus(status);
  }

  const handleTitle = (title) => {
    console.log("title", title);
    setTitle(title);
  };

  const handleDescription = (description) => {
    console.log("description", description);
    setDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTodo = async () => {
    const data = {
      title: title,
      description: description,
      status: status,
    };
    const result = await axios.post(`${rootUrl}/addTodo`, data);
    if (result.status === 200) {
      // console.log(result);
      const d = [result.data];
      props.handleTodo([...props.todo, ...d]);
      setTitle("");
      setDescription("");
      handleClose();
    }
  };

  return (
    <div>
      <button
        onClick={() => {handleOpen(); handleObject("add", "Create Todo", title, description, "todo", "Create")}}
        title="Add"
        style={{ marginLeft: 15, position: "absolute", right: "10%" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <Modal
        open={open}
        close={handleClose}
        handleTitle={handleTitle}
        title={title}
        description={description}
        status=""
        handleDescription={handleDescription}
        handleStatus={handleStatus}
        buttonFunction={addTodo}
        object={object}
      />
    </div>
  );
};

export default Add;
