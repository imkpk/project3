import React from "react";
import Hero from "../Componentss/Hero";
import Banner from "../Componentss/Banner";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import RoomsContainer from "../Componentss/RoomsContainer";

export function Rooms() {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
    </>
  );
}
export default Rooms;
