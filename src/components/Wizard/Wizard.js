import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Route} from 'react-router-dom'
import StepOne from '../Steps/StepOne'
import StepTwo from '../Steps/StepTwo'
import StepThree from '../Steps/StepThree'

class Wizard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="form-header">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <Route path="/wizard/step1" component={StepOne}/>
          <Route path="/wizard/step2" component={StepTwo}/>
          <Route path="/wizard/step3" component={StepThree}/>
        </div>
      </div>
    );
  }
}

export default Wizard;
