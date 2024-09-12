import React from "react";

function Hello({person}) {
  return (
    <div>
      {" "}
      {person.name} {person.age} {person.height}
      {" "}
    </div>
  );
}

export default Hello;
