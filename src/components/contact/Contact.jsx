import React from "react";
import { ContactData } from "../../data/Data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        {/* ===========contact left============= */}
        <div className="contact_left">
          {ContactData &&
            ContactData.map((props) => {
              const {id, icon, SocialMediaName, accountName, href } = props;

              return (
                <article className="contact_option">
                  <span>{icon}</span>
                  <h4>{SocialMediaName}</h4>
                  <h5>{accountName}</h5>
                  <a href={href}>Send a message</a>
                </article>
              );
            })}
        </div>
            {/* ===========contact right============ */}
        <div className="contact_right">
            <form action="">
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email"  required/>
              <textarea name="message" placeholder="Your Message" required ></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
