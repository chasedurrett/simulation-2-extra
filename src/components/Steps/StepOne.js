import React, { Component } from "react";
import {Link} from 'react-router-dom'

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Property Name</h3>
          <input name="name" onChange={(e) => this.handleInput(e)} />
        </div>
        <div>
          <h3>Address</h3>
          <input name="address" onChange={(e) => this.handleInput(e)} />
        </div>
        <div>
          <h3>City</h3>
          <input name="city" onChange={(e) => this.handleInput(e)} />
          <h3>State</h3>
          <input name="state" onChange={(e) => this.handleInput(e)} />
          <h3>Zip</h3>
          <input
            type="number"
            name="zip"
            onChange={(e) => this.handleInput(e)}
          />
          <Link to="/wizard/step2">Next Step</Link>
        </div>
      </div>
    );
  }
}

export default StepOne;
