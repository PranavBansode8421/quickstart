import React from 'react'

const Brand = (props) => {
  return (
    
      <div className="col-md-2 col-6">
        <div className="brandlogo ">
          <img
          className='img-fluid'
            src={props.logo}
            alt=""
          />
        </div>
      </div>
    
  )
}

export default Brand
