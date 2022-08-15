import React, { useReducer , useEffect} from "react";
import "./style.css";



const reducer = (count,action)=>{

  if(action.type === "INCR"){
    count = Number(count) + 1
    // console.log(`i am increment ${count}`);
  }
  if(count>0 && action.type === "DECR"){
    count = Number(count) - 1
    // console.log(`i am increment ${count}`);
  }
  return count;

}
export default function Usereducer() {
  

  const [count,dispatch] = useReducer(reducer,0)



  useEffect(() => {
    document.title = `chats(${count})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div class="button2" onClick={() => dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
}
