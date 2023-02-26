import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";
import axios from "axios";
import edit from "./assets/edit.png";

const rootUrl = "http://localhost:3001/todo";

const Update = (props) => {
  const [title, setTitle] = useState(props.element.title);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(props.element.description);
  const [status, setStatus] = useState(props.element.status);
  const [object, setObject] = useState({
    flag: "",
    heading: "",
    modalTitle: "",
    modalDescription: "",
    modalStatus: "",
    buttonText: "",
  });

  const handleObject = (
    flag,
    heading,
    title,
    description,
    status,
    buttonText
  ) => {
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

  const handleTitle = (title) => {
    console.log("title", title);
    setTitle(title);
  };

  const handleStatus = (status) => {
    setStatus(status);
  }

  const handleDescription = (description) => {
    console.log("description", description);
    setDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = async () => {
    const data = {
      id: props.element._id,
      title: title,
      description: description,
      status: status
    };
    const result = await axios.put(`${rootUrl}/updateTodo`, data);
    if (result.status === 200) {
      // console.log(result);
      props.todo[props.index].title = title;
      props.todo[props.index].description = description;
      props.todo[props.index].status = status;
      props.handleTodo([...props.todo]);
      handleClose();
      setTitle("");
      setDescription("");
      setStatus("");
    }
  };

  return (
    <>
      <img
        src={edit}
        onClick={() => {
          handleOpen();
          handleObject(
            "update",
            "Update Todo",
            props.element.title,
            props.element.description,
            props.element.status,
            "Update"
          );
        }}
        alt = ""
      />
      <Modal
        open={open}
        close={handleClose}
        title={title}
        description={description}
        status={status}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleStatus={handleStatus}
        buttonFunction={updateTodo}
        object={object}
      />
    </>
  );
};

export default Update;
