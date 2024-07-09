import "./App.css";
import { Card } from "./components/Card/Card";
import cardData from "./data/cardData";

function App() {
  return (
    <div className="App card-container animation-loading-App">
      {cardData.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </div>
  );
}

export default App;
