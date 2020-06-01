import React from "react";
import Room from "./Room";
function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>Unfortunaly no Rooms Matched for Your Search Parameters </h3>
      </div>
    );
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item, id) => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}

export default RoomList;
