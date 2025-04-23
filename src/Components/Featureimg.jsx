import React from "react";
import '../css/Features.css'
const Featureimg = (props) => {
  return (
    <div className="p-4 "
    
    >
      <img
        className="w-100 featureimg "
        
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default Featureimg;
