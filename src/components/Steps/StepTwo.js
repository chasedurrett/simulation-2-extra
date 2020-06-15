import React, { Component } from "react";
import {Link} from 'react-router-dom'
import store, { STEP_TWO } from "../../store";

class StepTwo extends Component {
  constructor() {
    const reduxState = store.getState()
    super();
    this.state = {
      img: reduxState.img,
    };
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        img: reduxState.img
      })
    })
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const reduxState = store.getState();
    console.log(reduxState);
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
