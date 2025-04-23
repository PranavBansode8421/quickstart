import React from 'react'
import '../css/Service.css'
const Service = (props) => {
  return (
    <>
    <div className="col-md-4 service-card  ">
        <div className="inner row">
            <div className="col-md-3  text-center ">
                <div className="iconwrapper d-flex justify-content-center align-items-center">
                <i class={props.icon} ></i>
                </div>
            
            </div>
            <div className="col-md-9">
                <h3 className='servicename'>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Service
