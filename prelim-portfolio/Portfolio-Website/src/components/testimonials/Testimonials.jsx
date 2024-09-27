import React from "react";
import "./testimonials.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avater: Avtr1,
      name: "Arcel Joseph Santiago",
      review:
        " Lebron James Maranan is a driven 3rd-year IT student with strong skills in [insert relevant languages/tools]. He’s demonstrated a solid grasp of software development, writing clean and efficient code. Lebron is a quick learner, a problem-solver, and a great team player, always eager to improve and adapt to new technologies.",
    },
    {
      avater: Avtr2,
      name: "Rojean Paul Macalintal",
      review:
        " An enthusiastic 3rd-year IT student with a growing expertise in development. Skilled in coding, quick to learn, and brings a positive attitude to every project. Commitment to quality and teamwork makes him stand out as a developer.",
    },
    {
      avater: Avtr3,
      name: "Hamz Humadbro",
      review:
        " A dedicated 3rd-year IT student with strong coding skills and a passion for learning. Known for problem-solving abilities and teamwork, consistently delivering clean and efficient code on projects.",
    },
    {
      avater: Avtr4,
      name: "David Whitworth",
      review:
        " A motivated 3rd-year IT student with solid development skills and a knack for quick learning. Consistently delivers quality work and collaborates effectively with teams, making a positive impact on projects.",
    }
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {data.map(({avater,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avater} alt="client image" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
