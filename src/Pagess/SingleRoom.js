import React, { Component } from "react";
import defaultbcg from "../imagess/room-1.jpeg";
// import Hero from "../Componentss/Hero";
import Banner from "../Componentss/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../Componentss/StyledHero";
export class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultbcg
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);
    if (!room) {
      return (
        <div className='error'>
          <h3>No Such Rooms Could be Found</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "No Pets are Allowed"}</h6>
              <h6>{breakfast && "Free Breakfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => (
              <li key={index}>-{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
