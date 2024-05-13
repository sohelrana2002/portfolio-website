import React from "react";
import { PortfolioData } from "../../data/Data";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio_container">
        {PortfolioData &&
          PortfolioData.map((props) => {
            const { id, img, title, github, live } = props;
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_img">
                  <img src={img} alt="portfolio image" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_btn">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={live} className="btn btn-primary">
                    Live demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
