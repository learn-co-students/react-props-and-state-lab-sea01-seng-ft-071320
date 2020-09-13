import React from "react";

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a href="header" className="header">
            {this.props.pet.name}
            {this.props.pet.gender === "female" ? "♀" : "♂"}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.adoptButton()}</div>
      </div>
    );
  }

  adoptButton = () => {
    return !this.props.pet.isAdopted ? (
      <button
        onClick={() => this.props.onAdoptPet(this.props.pet.id)}
        className="ui primary button"
      >
        Adopt Pet
      </button>
    ) : (
      <button className="ui disabled button">Already Adopted</button>
    );
  };
}

export default Pet;
