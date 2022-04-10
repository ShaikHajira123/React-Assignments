import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:15,
  });
  const books = inv.books 
  const notebooks = inv.notebooks 
  const pens = inv.pens 
  const inkpens = inv.inkpens

    const  handlechange =(value,title) =>{
       if(title==="books"){
            if(books<=0 && value===-1){
                return
            }else{
                setInv(e=>{
                    return {...e,books:e.books+value}
                })
            }
        }else if(title==="notebooks"){
            if(notebooks<=0 && value===-1){
                return
            }else{
            setInv(e=>{
                return {...e,notebooks:e.notebooks+value}
            })
        }
      
    }else if(title==="pens"){
        if(pens<=0 && value===-1){
            return
        }else{
        setInv(e=>{
            return {...e,pens:e.pens+value}
        })
    }
}else if(title==="inkpens"){
    if(inkpens<=0 && value===-1){
        return
    }else{
    setInv(e=>{
        return {...e,inkpens:e.inkpens+value}
    })
}
}
    
}
let total=books+notebooks+pens+inkpens
 
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton"onClick = {()=>{handlechange(1,"books")}}>+</button>
        <button className="circlularButton" onClick = {()=>{handlechange(-1,"books")}}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"onClick = {()=>{handlechange(1,"notebooks")}}>+</button>
        <button className="circlularButton"onClick = {()=>{handlechange(-1,"notebooks")}}>-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"onClick = {()=>{handlechange(1,"pens")}}>+</button>
        <button className="circlularButton"onClick = {()=>{handlechange(-1,"pens")}}>-</button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"onClick = {()=>{handlechange(1,"inkpens")}}>+</button>
        <button className="circlularButton"onClick = {()=>{handlechange(-1,"inkpens")}}>-</button>
        <span>{inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};