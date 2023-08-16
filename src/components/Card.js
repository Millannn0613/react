import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-containt">
        <div className="card-title">
          <h3>title</h3>
        </div>
        <div className="card-body">
          <p> sain baina uu door darna uu</p>
        </div>
        <div className="btn">
          <button>
            <a href="/">darah</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
