import './App.css';
import { useState } from 'react';
import Button from './button';
import Card from './card';
function App() {
 const [add, SetAdd] = useState([
{
  imgval: "https://i.pinimg.com/originals/26/f6/c8/26f6c82178cdaacf100fb20358124318.jpg",
  title: "Car",
    price: "2900",
    Quantity: "1",
    Size: "9 inch",
    Description: "car for playing kids of 4 to 9 years old"
  },
  {
    imgval: "https://i.ytimg.com/vi/cOZYwO2n9Q0/maxresdefault.jpg",
    title: "Bike",
    price: "1200",
    Quantity: "1",
    Size: "7 inch",
    Description: "Bike for playing kids of 8 to 12 years old"
  },
  {
    imgval: "data:image/jpeg;base64,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",
    title: "plane",
    price: "5000",
    Quantity: "1",
    Size: "17 inch",
    Description: "plane for playing Boys of 3 to 6 years old"
  },
  {
    imgval: " https://5.imimg.com/data5/AS/BO/MY-26779310/neo-atv-500x500.jpg",
    title: "ATV Bike",
    price: "9000",
    Quantity: "1",
    Size: "29 inch",
    Description: "ATV Bike for playing Boys of 13 to 18 years old"
  },
  {
    imgval: "https://www.army-technology.com/wp-content/uploads/sites/3/2019/01/3l-image-UH-X-Utility-Helicopter.jpg",
    title: "Helicopter",
    price: "12000",
    Quantity: "1",
    Size: "15 inch",
    Description: "Helicopter for playing kids of 4 to 9 years old"
  }
]);

let addToCart = ()=>{
  add.find( (a)=>(
alert("Title : "+ a.title + "   price : " + a.price +"     Quantity : "+ a.Quantity + "    Size : "+ a.Size + "     Description : "+ a.Description)
  ))
}
  return (
    <div className="App">
      <header className="App-header">
{add.map( (e)=>(
 <Card   
 imgval={e.imgval} title={e.title} price={e.price} Quantity={e.Quantity} Size={e.Size} Description={e.Description} 
 action={addToCart} />

))
}

      </header>
    </div>
  );
}

export default App;
