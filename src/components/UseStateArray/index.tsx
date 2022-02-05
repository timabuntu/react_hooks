import { useState } from "react";

const persons = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const UseStateArray = () => {
  const [people, setPeople] = useState(persons);
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="flex flex-col" key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
