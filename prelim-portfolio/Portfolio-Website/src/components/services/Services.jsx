import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Hatid/Sundo</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                No Chapter 
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mabilis
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Walang kuskos balungos
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Libre yakap pag baba
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mabango & Gwapo ang Driver
              </p>
            </li>
          </ul>
        </article>
        {}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Fast 
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                No ads
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                No need to talk more
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Budget Friendly
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Free Explaining
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Best of the Best
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                With daily update
              </p>
            </li>
          </ul>
        </article>
        {}
        <article className="service">
          <div className="service__head">
            <h3>Lover Boy Starter Pack</h3>   
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Date
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Netflix & Chill
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Kiss
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Hug
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                3 Hours RHG Hotel (USAP LANG)
              </p>
            </li>
          </ul>
        </article>
        {}
      </div>
    </section>
  );
};

export default Services;
