import React from "react";
import "../css/Price.css";
import Pricecards from "./Pricecards";
const Price = () => {

    const carddata=[
        {
            id:1,
            title:"Free Plan",
            description : "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
            price:0,
            availability:{
              service1:true,
              service2:true,
              service3:true,
              service4:false,
              service5:false,
              service6:false,
              service7:false,

            }
        },
        {
            id:2,
            title:"Business Plan",
            description : "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
            price:29,
            availability:{
              service1:true,
              service2:true,
              service3:true,
              service4:true,
              service5:true,
              service6:true,
              service7:false,

            }
        },
        {
            id:3,
            title:"Developer Plan",
            description : "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
            price:49,
            availability:{
              service1:true,
              service2:true,
              service3:true,
              service4:true,
              service5:true,
              service6:true,
              service7:true,

            }
        }
    ]
  return (
    <div className="pricelayout">
      <h1 className="text-center mt-4">Pricing</h1>
      <p className="text-center mt-4">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="container">
        <div className="row">
          
          {
            carddata.map((val,index)=>{
              return(
                <Pricecards
                key={index}
                title={val.title}
                description = {val.description}
                price={val.price}
                available={val.availability}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Price;
