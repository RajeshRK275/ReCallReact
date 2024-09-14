
import Hello from "./Components/Hello";
import Fruits from "./Components/Fruits";


function App() {

  // const seatNumber = [1,2,3];


  const person = {
    name : "Rajesh",
    age : 25,
    height : 173,
  }

  return (
    <div className="App">
      <Hello person = {person}/>
      <Fruits/>
    </div>
  );
}

export default App;
