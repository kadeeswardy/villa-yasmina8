import React from 'react'
import { Helmet } from 'react-helmet';
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <>
        <div className="page" id='allVillas'>
          <h1> VILLA</h1>
          <p>{villas.length} Properties</p>
          <div className="villasContainer">
        {villas.map((element) => {
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
               
               
              </Link>
          );
        })}
      </div>
        </div>
    </>
  )
}

export default Villas
