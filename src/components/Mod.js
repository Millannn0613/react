import React, { useState } from "react";

export default function Modal(props) {
  const modalStyle = {
    transform: props.show ? "translateX(0)" : "translateX(100vh)",
    opacity: props.show ? "1" : "0",
    borderRadius: "20px",
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="close" onClick={props.close}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h1 style={{ textAlign: "center" }}>юун хэрэгт дуртайн</h1>
      <p style={{ textAlign: "center" }}>өнөөдөрт нь амжилт 😄 </p>
    </div>
  );
}
