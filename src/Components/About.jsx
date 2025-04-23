import React from "react";
import Service from "./Service";
import "../css/About.css";
import Brand from "./Brand";

const About = () => {
  const aboutData = [
    {
      id: 1,
      icon: "bi bi-briefcase iconn",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 2,
      icon: "bi bi-card-checklist iconn",
      title: "Dolor Sitema ",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa",
    },
    {
      id: 3,
      icon: "bi bi-bar-chart iconn",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    },
  ];
  const brandlogo = [
    {
      id: 1,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-1.png",
    },
    {
      id: 2,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-2.png",
    },
    {
      id: 3,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-3.png",
    },
    {
      id: 4,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-4.png",
    },
    {
      id: 5,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-5.png",
    },
    {
      id: 6,
      logo: "https://bootstrapmade.com/content/demo/QuickStart/assets/img/clients/client-6.png",
    },
  ];
  return (
    <div className="aboutlayout p-5">
      <div className="container ">
        <div className="row">
          {aboutData.map((value, index, arr) => {
            return (
              <>
                <Service
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </>
            );
          })}
        </div>
        <div className="row part">
          <div className="col-md-6">
            <h4 className="abouth3">WHO ARE WE</h4>
            <h1 className="abouth1 mb-4">
              Unleashing Potential with Creative Strategy
            </h1>
            <p className="aboutp mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="checkboxinfo mt-2">
              <i class="bi bi-check-circle"></i>{" "}
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
            <div className="checkboxinfo mt-2">
              <i class="bi bi-check-circle"></i>{" "}
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </div>
            <div className="checkboxinfo mt-2">
              <i class="bi bi-check-circle"></i>{" "}
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor.
              </span>
            </div>
            <button className="btn button1">Read More</button>
          </div>
          <div className="col-md-6 imggroup">
            <div className="row ">
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="https://bootstrapmade.com/content/demo/QuickStart/assets/img/about-company-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 ">
                <div className="row w-100">
                  <img
                    src="https://bootstrapmade.com/content/demo/QuickStart/assets/img/about-company-2.jpg"
                    alt=""
                  />
                </div>
                <div className="row w-100 pt-5 ">
                  <img
                    src="https://bootstrapmade.com/content/demo/QuickStart/assets/img/about-company-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 ">
          {brandlogo.map((value, index, arr) => {
            return (
              <>
                <Brand logo={value.logo} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
