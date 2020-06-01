import React from "react";
import Hero from "../Componentss/Hero";
import Banner from "../Componentss/Banner";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Services from "../Componentss/Services";
import FeatruredRoom from "../Componentss/FeatruredRoom";

export function Home() {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='delux rooms starting at $600'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatruredRoom />
    </>
  );
}

export default Home;
