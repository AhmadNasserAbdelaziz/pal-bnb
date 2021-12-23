import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css"
import data from"./components/data"

const cards = data.map(item => {
  return (
      <Card 
        key ={item.id}
        item={item}

      />
  )
})        

function App() {
  return (
  
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
     </section>


    </div>
  );
}

export default App;
