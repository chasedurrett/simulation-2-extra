import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { STEP_ONE } from "../../store";

class StepOne extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
      });
    });
    const reduxState = store.getState();
    console.log(reduxState);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  stepOneUpdate() {
    const { name, address, city, state, zip } = this.state;
    store.dispatch({
      type: STEP_ONE,
      payload: this.state
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
          <Link onClick={() => this.stepOneUpdate} to="/wizard/step2">
            Next Step
          </Link>
        </div>
      </div>
    );
  }
}

export default StepOne;
