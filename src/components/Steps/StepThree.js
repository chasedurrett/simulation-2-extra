import React, { Component } from "react";
import axios from "axios";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: "",
    };
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createHouse() {
    const { name, address, city, state, zip } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zip })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <h3>Recommended Rent: ${}</h3>
        </div>
        <div>
          <h3>Monthly Mortgage Amount</h3>
          <input name="mortgage" onChange={(e) => this.handleInput(e)} />
        </div>
        <div>
          <h3>Desired Monthly Rent</h3>
          <input name="rent" onChange={(e) => this.handleInput(e)} />
        </div>
        <button onClick={() => this.createHouse()}>Complete</button>
      </div>
    );
  }
}

export default StepThree;
