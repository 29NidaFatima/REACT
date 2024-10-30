import { useState } from "react";

export default  function LudoBoard(){

  
  let [Moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});//single object as a state variable
    let[Arr,setArr]=useState(["no moves"]);
 
    let updateBlue=()=>{
    // console.log(`moves.blue=${Moves.blue}`)
    // setMoves((preMoves)=>{
    //   return  {...preMoves,blue: preMoves.blue+1}
    // })
  
    setArr((preArr)=>{
 return [...preArr,"blue moves"]
    });
    console.log(Arr);
    
   }
   let updateYellow=()=>{
    console.log(`moves.yellow=${Moves.yellow}`);
    setMoves((preMoves)=>{
      return  {...preMoves,yellow: preMoves.yellow+1}
    })
   }
   let updateGreen=()=>{
    console.log(`moves.green=${Moves.green}`);
    setMoves((preMoves)=>{
      return  {...preMoves,green: preMoves.green+1}
    })
   }
   let updateRed=()=>{
    console.log(`moves.red=${Moves.red}`);
    setMoves((preMoves)=>{
      return  {...preMoves,red: preMoves.red+1}
    })
   }
    return(
<div>
<p>Game Begins</p>
<p>{Arr}</p>
<div className="board">
<p>Blue moves={Moves.blue}</p>
<button  onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
<p>Yellow moves={Moves.yellow}</p>
<button  onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
<p>Green moves={Moves.green}</p>
<button  onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
<p>red moves={Moves.red}</p>
<button  onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
</div>
</div>
    );
}