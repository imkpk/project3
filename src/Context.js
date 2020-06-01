import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
    };
  }

  //get data
  componentDidMount() {
    //this.getdata
    let rooms = this.formatData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  formatData(items) {
    let temItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return temItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((item) => item.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    // const type = event.target.type;
    const name = event.target.name;
    // console.log(
    //   `this is Type: ${type}, this is name: ${name},  This is Value: ${value}`
    // );
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    // console.log("hello");
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //all the rooms
    let tempRooms = [...rooms];

    // transform values
    capacity = parseInt(capacity);

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity); // eslint-disable-line no-self-compare
    }
    //filter by price
    tempRooms = tempRooms.filter((item) => item.price <= price);
    // Room size filter
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // breakfast filter
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // pets filter
    if (pets) {
      tempRooms = tempRooms.filter((pet) => pet.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
