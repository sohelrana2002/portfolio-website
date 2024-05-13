import React from "react";
import AboutMe from "../../assets/me-about.jpg";
import { AboutMeCard } from "../../data/Data";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* =========lift sid============== */}
        <div className="about_me">
          <img src={AboutMe} alt="About me image" />
        </div>

        {/* ============right side ========== */}
        <div className="about_content">
          <div className="about_cards">
            {AboutMeCard.map(({ id, icon, skills, title }) => {
              return (
                <article key={id} className="about_card">
                  <span>{icon}</span>
                  <h5>{title}</h5>
                  <small>{skills}</small>
                </article>
              );
            })}
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum totam inventore ullam blanditiis quidem aliquam. Illo, nihil totam, placeat itaque incidunt quos quod id cumque soluta pariatur, amet minus sapiente.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
