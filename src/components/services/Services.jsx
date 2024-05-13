import React from "react";
import { ServicesData } from "../../data/Data";
import { BiCheck } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services_container">
        {ServicesData &&
          ServicesData.map(({ id, title, icon, features }) => {
            return (
              <article key={id} className="services">
                <div className="services_head">
                  <h3>{title}</h3>
                </div>
                <div className="services_list">
                  <h2>Feature</h2>
                  {features &&
                    features.map(({ feature, available }, index) => {
                      return (
                        <div className="details" key={index}>
                          <span>{!available ? <RxCross1 /> : <BiCheck />}</span>
                          <p className={!available ? "disable" : ""}>
                            {feature}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Services;
