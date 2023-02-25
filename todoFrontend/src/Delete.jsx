import React, { useState } from "react";
import trash from "./assets/trash.png";
import Modal from "./Components/Modal/Modal";
import axios from "axios";

const rootUrl = "http://localhost:3001/user";

const Delete = (props) => {
  const [open, setOpen] = useState(false);
  const [object, setObject] = useState({
    flag: "",
    heading: "",
    modalTitle: "",
    modalDescription: "",
    modalStatus: "",
    buttonText: "",
  });
  const [del, setDel] = useState();

  const handleDel = (del) => {
    setDel(del);
  }

  const handleObject = (flag, heading, buttonText) => {
    setObject({
      flag: flag,
      heading: heading,
      modalTitle: "",
      modalDescription: "",
      modalStatus: "",
      buttonText: buttonText,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTodo = async () => {
    const result = await axios.delete(`${rootUrl}/deleteTodo/${props.id}`);

    if (result.status === 200) {
      props.todo.splice(props.index, 1);
      props.handleTodo([...props.todo]);
      setDel("");
      handleClose();
    }
  };

  return (
    <>
      {" "}
      <img
        src={trash}
        style={{ width: 30 }}
        onClick={() => {
          handleOpen();
          handleObject("delete", "Delete Todo", "Delete");
        }}
      />
      <Modal
        open={open}
        del={del}
        close={handleClose}
        handleDel={handleDel}
        buttonFunction={deleteTodo}
        object={object}
      />
    </>
  );
};

export default Delete;
