import React from "react";
import "../css/Price.css";
const Pricecards = (props) => {
  return (
    <div className="col-md-4 price-card  p-4">
      <div className="p-4 bg-light pricewrap">
        <h3>{props.title}</h3>
        <p>{props.description}
          
        </p>
        <h4 className="text-center mt-4">
          <sup>$</sup>{props.price}<sub>/month</sub>
        </h4>
        <div className="text-center">
          <button className="button  mt-4">Start a free trial</button>
        </div>

        <p className="text-center mt-4">No credit card required</p>
        <ul className="d-flex flex-column">
          <li>
            <i className={`${props.available.service1 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service1 ? "":'text-linethrough'}`}>Quam adipiscing vitae proin</span>
          </li>
          <li>
            <i className={`${props.available.service2 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service2 ? "":'text-linethrough'}`}>Nec feugiat nisl pretium</span>
          </li>
          <li>
            <i className={`${props.available.service3 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service3 ? "":'text-linethrough'}`}>Nulla at volutpat diam uteera</span>
          </li>
          <li>
            <i className={`${props.available.service4 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service4 ? "":'text-linethrough'}`}>Pharetra massa massa ultricies</span>
          </li>
          <li>
            <i className={`${props.available.service5 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service5 ? "":'text-linethrough'}`}>Massa ultricies mi quis hendrerit</span>
          </li>
          <li>
            <i className={`${props.available.service6 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service6 ? "":'text-linethrough'}`}>Voluptate id voluptas qui sed aperiam</span>
          </li>
          <li>
            <i className={`${props.available.service7 ? 'bi bi-check' : 'bi bi-x'}`}></i>
            <span className={`${props.available.service7 ? "":'text-linethrough'}`}>Iure nihil dolores recusandae odit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricecards;
