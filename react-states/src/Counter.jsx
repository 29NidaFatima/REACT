import { useState } from "react"
function init() {
    console.log("init executed");
    
    return Math.random();
}
export default function Counter(){
let [count,setcount]=useState(init()); // works--initialization


console.log("Component was re- rendered!");
// console.log(`count=${count}`);

let increaseCount=()=>{
setcount((currCount)=>{
    return currCount+1;
});

// console.log(`inside  incount ,count=${count}`);
// console.log(count);



}
return(
    <div>
        <h3>count={count}</h3>
        <button onClick={increaseCount} >Increase counter</button>
    </div>
)
}