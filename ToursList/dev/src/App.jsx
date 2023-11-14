import { useState } from "react";
import data from "./data";

const ListComponent = ({ person, removePerson }) => {
  return (
    <li className="person">
      <img src={person.image} alt={person.name} />
      {person.name} is turning {person.age} years old today
      <button className="btn" onClick={() => removePerson(person.id)}>
        X
      </button>
    </li>
  );
};

const App = () => {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };
  const removePerson = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };
  return (
    <>
      <div className="container">
        <h3>No of B'days : {people.length}</h3>
        <section>
          <ul>
            {people.map((item) => (
              <ListComponent
                person={item}
                removePerson={removePerson}
                key={item.id}
              />
            ))}
          </ul>
          <button className="btn" onClick={removeAll}>
            Clear All
          </button>
        </section>
      </div>
    </>
  );
};
export default App;
