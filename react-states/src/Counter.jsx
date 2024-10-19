import { useState } from "react"

export default function Counter(){
let [count,setcount]=useState(0); // works--initialization
console.log("Component is rendered!");
console.log(`count=${count}`);

let increaseCount=()=>{
setcount(count+1);
console.log(`inside  incount ,count=${count}`);

console.log(count);



}
return(
    <div>
        <h3>count={count}</h3>
        <button onClick={increaseCount} >Increase counter</button>
    </div>
)
}