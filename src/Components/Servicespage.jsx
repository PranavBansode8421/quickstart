import React from "react";
import "../css/Servicespage.css";
import Servicessections from "./Servicessections";
const Servicespage = () => {

  const servicepagedata =[
    {
      id: 1,
      icon: "bi bi-activity icon",
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      color: "#0dcaf0",
      background: "rgba(13, 202, 240, 0.1)",
      border: "1px solid #0dcaf0",
    },
    {
      id: 2,
      icon: "bi bi-broadcast icon",
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      color: "#fd7e14",
      background: "rgba(253, 126, 20, 0.1)",
      border:"1px solid #fd7e14", 

    },
    {
      id: 3,
      icon: "bi bi-easel icon",
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
        color: "#20c997",
      background: "rgba(32, 201, 151, 0.1)",
      border: "1px solid #20c997",
    },
    {
      id: 4,
      icon: "bi bi-bounding-box-circles icon",
      title: "Asperiores Commodi",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      color: " #df1529",
      background: "rgba(223, 21, 4, 0.1)",
      border:  "1px solid  #df1529"   
    },
    {
      id: 5,
      icon: "bi bi-calendar4-week icon",
      title: "Velit Doloremque.",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      color: "#6610f2",
      background: "rgba(102, 16, 242, 0.1)",
      border: "1px solid #6610f2", 
    },
    {
      id: 6,
      icon: "bi bi-chat-square-text icon",
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      color: "#f3268c",
      background: "rgba(243, 38, 140, 0.1)",
      border: "1px solid #f3268c",
    },
  ]
  return (
    <div className="servicespage m-0 p-0">
      <div className="container  ">
        <h1 className="text-center mt-4">Services</h1>
        <p className="text-center mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="row">
          {
            servicepagedata.map((value,index) => {
              return (
                <Servicessections
                key= {index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
                background={value.background}
                border={value.border}
                
                />
              );
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Servicespage;
