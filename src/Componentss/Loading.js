import React from "react";
import loadingGif from "../imagess/gif/loading-arrow.gif";

function Loading() {
  return (
    <div className='loading'>
      <h4> rooms data loading....</h4>
      <img src={loadingGif} alt='Loading Arrow' />
    </div>
  );
}

export default Loading;
