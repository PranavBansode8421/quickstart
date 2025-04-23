import React from "react";
import "../css/Features.css";

const Featuresinfo = (props) => {
  return (
    <div className="row p-4  " onClick={() => props.showimg(props.id)}>
      <div className="col-md-11 featuredata  p-4 d-flex ">
        <i className={props.icon}></i>
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Featuresinfo;
