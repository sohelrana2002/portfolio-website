import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { TestimonialsData } from "../../data/Data";
import "./testimonial.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        grabCursor = {true}
        loop = {true}
      >
        {TestimonialsData &&
          TestimonialsData.map((props) => {
            const { id, src, alt, name, review } = props;

            return (
              <SwiperSlide key={id} className="testimonals">
                <div className="client_avatar">
                  <img src={src} alt={alt} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
