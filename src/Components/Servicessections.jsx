import React from 'react'

const Servicessections = (props) => {
  return (
    <>
      <div className="col-md-6 p-4 ">
            <div className="servicepage-info servicepage-card p-5 d-flex ">
              <div className="me-4 mt-4"><i className={props.icon} style={{ color: props.color, border: props.border, background: props.background }}
              ></i></div>
              <div>
                <h4>Nesciunt Mete</h4>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Servicessections
