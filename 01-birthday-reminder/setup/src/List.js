import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h3>{person.name}</h3>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
