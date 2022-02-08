import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)
  const [plates, setPlates] = useState ([])

  useEffect(()=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>setAllSushi(data))
    }, [])
  
    function countMoneySpent(price){
      setMoneyLeft(moneyLeft-price)
      setPlates([...plates, 1]) 
    }

    function onAddMoney(addedMoney){
      setMoneyLeft(moneyLeft+addedMoney)
    }

    function handleDelete(id){
      const updatedList = allSushi.filter((item)=>item.id !== id)
      setAllSushi(updatedList)
      console.log(updatedList.length, "suhi left in the menu")
    }

  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} countMoneySpent={countMoneySpent} moneyLeft={moneyLeft} handleDelete={handleDelete}/>
      <Table plates={plates} money={moneyLeft} onAddMoney={onAddMoney}/>
    </div>
  );
}

export default App;
