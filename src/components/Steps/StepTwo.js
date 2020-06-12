import React, { Component } from "react";
import {Link} from 'react-router-dom'

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
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
          <h3>Image URL</h3>
          <input name="img" onChange={(e) => this.handleInput(e)} />
        </div>
        <Link to="/wizard/step3">Next Step</Link>
      </div>
    );
  }
}

export default StepTwo;
