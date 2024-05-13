import React from "react";
import { FrontEnd, BackEnd } from "../../data/Data";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skillis I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* ================front end ============F */}
        <div className="front_end">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            {FrontEnd &&
              FrontEnd.map(({ id, icon, title, experience }) => {
                return (
                  <article key={id} className="experience_details">
                    <span>{icon}</span>
                    <div>
                      <h4>{title}</h4>
                      <small className="text-light">{experience}</small>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
        {/* ===================backend================ */}
        <div className="back_end">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            {BackEnd &&
              BackEnd.map(({ id, icon, title, experience }) => {
                return (
                  <article key={id} className="experience_details">
                    <span>{icon}</span>
                    <div>
                      <h4>{title}</h4>
                      <small className="text-light">{experience}</small>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
