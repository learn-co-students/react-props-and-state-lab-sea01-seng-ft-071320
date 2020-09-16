import React from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  onChangeType = (event) => {
    this.setState({ filters: { type: event.target.value } });
  };
  onFindPetsClick = () => {
    let url = `/api/pets`;
    if (this.state.filters.type === "all") {
      fetch(url)
        .then((response) => response.json())
        .then((animals) => this.setState({ pets: animals }));
    } else {
      fetch(`${url}?type=${this.state.filters.type}`)
        .then((response) => response.json())
        .then((animals) => this.setState({ pets: animals }));
    }
  };
  onAdoptPet = (id) => {
    let a = this.state.pets.filter((pet) => pet.id === id);
    a[0].isAdopted = true;
    this.setState({ ...this.state.pets, a });
  };
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;