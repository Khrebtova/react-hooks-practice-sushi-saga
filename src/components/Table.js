import React, {useState} from "react";

function Table({ plates = [], money, onAddMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  
  const [addedMoney, setAddedMoney] = useState(0)
  
  function newMoney(e){
    setAddedMoney(parseInt(e.target.value))
  }
  
  function handleAddMoney(e){
    e.preventDefault()
    onAddMoney(addedMoney)
    
  }
  return (
    <>
      <h1 className="remaining">
        You have: $ {money} remaining!
      </h1>
      <form onSubmit={handleAddMoney}>
        <input type="number" onChange={newMoney} placeholder="whant to add more $$$?"></input>
        <button type="submit">Add Money</button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
