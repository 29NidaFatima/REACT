function handleClick(event){
    console.log("Hello!");
    console.log(event);
    
}
function handleMouseOver(){
    console.log("Bye!");
    
}
function handleDblClick(){
    console.log("you double click");  
}
export default function Button(){
    return(
    <div>
        <button onClick={handleClick}>Click me</button>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet nulla cumque maiores exercitationem maxime rem culpa quisquam delectus eligendi impedit, sed eum ea eveniet officiis nesciunt nemo quaerat placeat.</p>
        <button onDoubleClick={handleDblClick} >on double click me</button>
    </div>
    );
}