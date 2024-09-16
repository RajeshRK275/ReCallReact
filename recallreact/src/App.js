
import Hello from "./Components/Hello";
import Fruits from "./Components/Fruits";
import Counter from "./Components/Counter";
import Form from "./Components/Form"


function App() {

  // const seatNumber = [1,2,3];


  const person = {
    name : "Rajesh",
    age : 25,
    height : 173,
  }

  return (
    <div className="App">
      {/* <Hello person = {person}/>
      <Fruits/>
      <Counter/> */}
      <Form/>
    </div>
  );
}

export default App;
