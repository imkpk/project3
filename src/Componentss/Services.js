import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Unlimited Free Cocktails for our Customers. Caution: Drinking is not good for Health"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "If You are looking for an Adventure this is the Place for you. Yeah we Provide Endless Hiking for adventures people"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We provide free Shuttle Van for our Customers to see the beach from starting to the End."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Beer that we provide is stronger then the all other Resorts. You have free Cocktails anyway if you wanna have a beer its the best Choice"
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span> {item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
