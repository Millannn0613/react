import React, { useState, useRef } from "react";
import Button from "./components/Button";
import "./App.css";
import Shadow from "./Shand";
import Modal from "./components/Mod";
export default function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const countRef = useRef(0);
  const Counter = () => {
    console.log("object");
    countRef.current++;
    setCount(count + 1);
  };
  const ModalToggle = () => {
    setToggle(true);
  };
  const CloseModal = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="hi">
        <Button value="count" click={Counter} />
        <div>count: {count}</div>
        <div>count useRef: {countRef.current}</div>
        <Button value="submit" click={ModalToggle} />
      </div>
      <Shadow show={toggle} />
      <Modal show={toggle} close={CloseModal} />
    </>
  );
}
