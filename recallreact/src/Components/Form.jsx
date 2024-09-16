import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

//   function handleChange(e) {
//     console.log(e.target.value);
//   }

  return (
    <div>
      <input
        // onChange={function demo(e) {
        //   return handleChange(e);
        // }}

        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
    </div>
  );
}
