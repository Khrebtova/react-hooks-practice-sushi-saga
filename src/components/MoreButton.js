import React from "react";

function MoreButton({onGetMoreSushi}) {
  return <button onClick={()=>onGetMoreSushi()}>More sushi!</button>;
}

export default MoreButton;
