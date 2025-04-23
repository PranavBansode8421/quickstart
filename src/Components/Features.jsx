import React from "react";
import "../css/Features.css";
import Featuresinfo from "./Featuresinfo";
import Featureimg from "./Featureimg";
import { useState } from "react";

const Features = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const showimg = (id) => {
    if (id === featuredata[0].id) {
      // alert("id 1 selected");
      setShow1(true); 
      setShow2(false); 
      setShow3(false);
      console.log("show 1:" + show1);
      console.log("show 2:" + show2);
      console.log("show 3:" + show3);
    } else if (id === featuredata[1].id) {
      // alert("id 2 selected");
      setShow1(false); 
      setShow2(true); 
      setShow3(false);
      console.log("show 1:" + show1);
      console.log("show 2:" + show2);
      console.log("show 3:" + show3);
    } else if (id === featuredata[2].id) {
      // alert("id 3 selected");
      setShow1(false); 
      setShow2(false); 
      setShow3(true);
      console.log("show 1:" + show1);
      console.log("show 2:" + show2);
      console.log("show 3:" + show3);
    }
  };

  const imgdata = [
    {
      id: 1,
      img: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/tabs-1.jpg",
    },
    {
      id: 2,
      img: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/tabs-2.jpg",
    },
    {
      id: 3,
      img: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/tabs-3.jpg",
    },
  ];
  const featuredata = [
    {
      id: 1,
      icon: "bi bi-binoculars",
      title: "Modi sit est dela pireda nest",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      id: 2,
      icon: "bi bi-box-seam",
      title: "Unde praesenti mara setra le",
      description:
        "Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas",
    },
    {
      id: 3,
      icon: "bi bi-brightness-high",
      title: "Pariatur explica nitro dela",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut",
    },
  ];

  return (
    <div className="container features">
      <h1 className="features-h1 text-center pt-5">Features</h1>
      <p className="text-center mt-5 features-p">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="row">
        <div className="col-md-5 mx-auto">
          {featuredata.map((value, index) => {
            return (
              <Featuresinfo
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                id={value.id}
                showimg={showimg}
              />
            );
          })}
        </div>
        <div className="col-md-6 mx-auto">
          {/* {     conditional Rendering    } */}
          {show1 ? <Featureimg img={imgdata[0].img} /> : null}
          {show2 ? <Featureimg img={imgdata[1].img} /> : null}
          {show3 ? <Featureimg img={imgdata[2].img} /> : null}
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col-md-5 p-4 mx-auto">
          <img
            className="w-100 featureimg"
            src="https://bootstrapmade.com/content/demo/QuickStart/assets/img/features-1.jpg"
            alt=""
          />
        </div>
        <div className="col-md-5 p-4 mx-auto">
          <div className="p-4 featuredata">
            <h4>Corporis temporibus maiores provident</h4>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="row mt-5  ">
        <div className="col-md-5 p-4 mx-auto">
          <div className="p-4 featuredata">
            <h4>Neque ipsum omnis sapiente quod quia dicta</h4>
            <p>
              Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena
              plasico mares
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="col-md-5 p-4 mx-auto">
          <img
            className="w-100 featureimg"
            src="https://bootstrapmade.com/content/demo/QuickStart/assets/img/features-2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
