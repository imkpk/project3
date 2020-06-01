import React from "react";
import Hero from "../Componentss/Hero";
import Banner from "../Componentss/Banner";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Errors() {
  return (
    <Hero>
      <Banner title='404' subtitle='Page Not Found'>
        <Link to='/' className='btn-primary'>
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Errors;
