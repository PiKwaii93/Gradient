import Form from "./Form";
import Card from "./Card";
import React, {useState} from "react";
import ReactDOM from 'react-dom';


function App() {

  const [cards, setCards] = useState([]);

  return(
    <div className="container my-5">
      <Form setCards={setCards} cards={cards}/>
      {cards.map((card )=> (
              <Card color1={card.color1} color2={card.color2} color3={card.color3} breakpoint1={card.breakpoint1} breakpoint2={card.breakpoint2} breakpoint3={card.breakpoint3} rotation={card.rotation} key={card.id}/>
        ))} 
    </div>
  );
}

export default App;
