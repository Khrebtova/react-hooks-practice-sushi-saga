import React , {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({allSushi, countMoneySpent, moneyLeft, handleDelete}) {
  const [num, setNum] = useState(0)
  const [sushiToDisplay, setSushiToDisplay] = useState(allSushi) 
  
  useEffect(()=>{
    setSushiToDisplay(allSushi.slice(num, num+4))
  }, [allSushi, num])
  

  const renderSushi = sushiToDisplay.map((item) => {
    return(
    <Sushi key = {item.id} item={item} countMoneySpent={countMoneySpent} moneyLeft={moneyLeft} handleDelete={handleDelete}/>
    )})

  function onGetMoreSushi(){
    if ((num + 4) <= allSushi.length){
      setNum(num+4)
    }else{
      setNum(0)
    }
  }  

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onGetMoreSushi={onGetMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
