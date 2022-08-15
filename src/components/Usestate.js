import React, { useEffect, useState } from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;

  const[count,setcount] = useState(0)

  useEffect(()=>{
    document.title = `chats(${count})`
  })

  let increment =()=>{
    let mynum = count
    mynum++
    setcount(mynum)
  }
  let decrement =()=>{
    let mynum = count
    mynum>0?mynum--:mynum = 0
    
    setcount(mynum)
  }

  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div class="button2" onClick={()=>increment()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={()=>decrement()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
