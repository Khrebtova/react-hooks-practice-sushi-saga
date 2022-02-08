import React, { useState } from "react";


function Sushi({item, countMoneySpent, moneyLeft, handleDelete}) {
  const [isEaten, setIsEaten] = useState(false)
  
  function handleEatSushi(){    
    if(moneyLeft>=item.price){
      setIsEaten(!isEaten)
      countMoneySpent(item.price)
      fetch(`http://localhost:3001/sushis/${item.id}`, {
        method: "DELETE"  
      })
      .then((res)=> res.json())
      .then(()=> handleDelete(item.id))
    }else{
      alert("too expensive")
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={()=>handleEatSushi()}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={item.img_url}
            alt={item.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  );
}

export default Sushi;
