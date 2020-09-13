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
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.filteredPets()}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: this.target.value,
      },
    });
  };

  fetchPets = () => {
    let endpoint = "/api/pets";

    if (this.state.filters.type !== "all") {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((pets) => this.setState({ pets: pets }));
  };

  // fetchPets = () => {
  //   const url =
  //     this.state.filters.type === "all"
  //       ? "/api/pets"
  //       : `/api/pets?type=${this.state.filters.type}`;

  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((pets) => this.setState({ pets: pets }));
  // };

  onAdoptPet = (petId) => {
    const pet = this.state.pets.find((pet) => pet.id === petId);
    pet.isAdopted = true;
  };

  filteredPets = () => {
    if (this.state.filters.type === "all") {
      return this.state.pets;
    } else {
      return this.state.pets.filter(
        (pet) => pet.type === this.state.filters.type
      );
    }
  };
}

export default App;
