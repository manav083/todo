import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      {props.open ? (
        <div className="mainDiv" onClick={props.close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeading">
              <span>{props.object.heading}</span>
            </div>
            {props.object.flag != "delete" ? (
              <div className="modalContent">
                <div style={{ display: "flex" }}>
                  <div className="label">
                    <label id="title" for="title">
                      Title:
                    </label>
                  </div>
                  <input
                    name="title"
                    value={props.title}
                    onChange={(e) => props.handleTitle(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", marginTop: 20 }}>
                  <div className="label" style={{ marginTop: "auto" }}>
                    <label id="description" for="description">
                      Description:
                    </label>
                  </div>
                  <textarea
                    name="description"
                    value={props.description}
                    onChange={(e) => props.handleDescription(e.target.value)}
                  />
                </div>
                {props.object.flag === "update" ? (
                  <div style={{ display: "flex", marginTop: 20 }}>
                    <div className="label" style={{ marginTop: "auto" }}>
                      <label id="status" for="status">
                        Status:
                      </label>
                    </div>
                    <select
                      name="status"
                      value={props.status}
                      onChange={(e) => props.handleStatus(e.target.value)}
                      style={{ marginLeft: 20 }}
                    >
                      <option value="todo">Todo</option>
                      <option value="progress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <center style={{ marginTop: 30 }}>
                  <button
                    onClick={props.buttonFunction}
                    style={{ backgroundColor: "green" }}
                  >
                    {props.object.buttonText}
                  </button>
                </center>
              </div>
            ) : (
              <div className="modalContent">
                <p>Please type delete to confirm</p>
                <div>
                  <input
                    name="delete"
                    placeholder="delete"
                    value={props.del}
                    onChange={(e) => props.handleDel(e.target.value)}
                  />
                </div>
                <center style={{ marginTop: 30 }}>
                  <button
                    onClick={props.buttonFunction}
                    disabled={props.del === "delete" ? false : true}
                    style={{ backgroundColor: "red" }}
                  >
                    {props.object.buttonText}
                  </button>
                </center>
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
