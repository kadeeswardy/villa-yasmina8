import React from "react";
import { Helmet } from 'react-helmet';
import { villas } from "../villas";
import { RxDot } from "react-icons/rx";

import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h1>Villa Yasmina with heated pool/lagoon, El Gouna</h1>
      <p>
      The name Villa "Yasmina" in Arabic means "symbol of love, purity and beauty". You should enjoy your holiday from day one and feel at home.
      Experience oriental-romantic nights in your private villa/pool, sip a drink at the bar, or relax in the lounge. Built in Nubian style, Villa Yasmina will enchant you with its domes, arches and colours. Enjoy incredible views of the lagoon and golf course.
      </p>
      <div className="villasContainer">
        {villas.slice(0,3).map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bed
                  </div>
                  <div className="spec">
                   
               
                  </div>
                  <div className="spec">
                  </div>
                  <div className="spec">
      
              
                  
                  </div>
                </div>
              
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;
