import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Mango", color: "Yellow", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Sweet" },
    { name: "Orange", color: "Orange", taste: "Citrus" },
    { name: "Cucumber", color: "Green", taste: "Mild" },
  ];

  return (
    <div>
        {fruits.map((fruit) => (
            <Fruit key = {fruit.name} name = {fruit.name} color = {fruit.color} taste = {fruit.taste}/>
        ))}
    </div>
  );
}
