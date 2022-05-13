import Button from "./button";
import addToCart from "./App"
import "./App.css";


function Card(props){
    return (
      
      <div>
          <br />
          <br />
<img width="400px" src={props.imgval} alt="" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.Quantity}</p>
            <p>{props.Size}</p>
            <p>{props.Description}</p>
<br />
<Button action={props.action} >Add</Button>
        </div>
    )
}

export default Card;