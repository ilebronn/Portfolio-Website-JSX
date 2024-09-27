import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Walang Tatak Clothing",
      github:"https://github.com",
      demo:"http://walangtatakclothing.mywebcommunity.org/"
    },
    {
      id:2,
      image:Img2,
      title:"Versatile Philippines",
      github:"https://github.com",
      demo:"http://lebronjamesmaranan-midtermobe.mywebcommunity.org/"
    },
    {
      id:3,
      image:Img3,
      title:"Auctioneda",
      github:"https://github.com",
      demo:"https://dribbble.com"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
