import React from "react";
class Pet extends React.Component {
  render() {
    let animal = this.props.pet;
    return (
      <div id={animal.id} className="card">
        <div className="content">
          <a className="header">
            {animal.gender === "female" ? "♀" : "♂"}
            {animal.name}
          </a>
          <div className="meta">
            <span className="date">{animal.type}</span>
          </div>
          <div className="description">
            <p>Age: {animal.age}</p>
            <p>Weight: {animal.weight}</p>
          </div>
        </div>
        <div id={animal.id} className="extra content">
          {animal.isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
              <button
                onClick={() => {
                  this.props.onAdoptPet(animal.id);
                }}
                className="ui primary button"
              >
                Adopt pet
              </button>
            )}
        </div>
      </div>
    );
  }
}
export default Pet;