import "./activity.css";
import Price from "./price";
function Activity({title,index}) {
    let oldPrices=["12,495","11,900","1,599","897"];
   
    let newPrices=["899","387","145","123"];
    let description=[["8,000 DPI","Programmable buttons"],["intivitive surface","designed for ipas"],["designed for ipas","wireless"],["designed for ipas","wireless"]]
    return (
       <div  className="Activity">
       <h4>{title}</h4>
        <p>{description[index][0]}</p>
        <p>{description[index][1]}</p>
        <Price oldPrice={oldPrices[index]} newPrice={newPrices[index]}/>
       </div>
    );
}

export default Activity;
