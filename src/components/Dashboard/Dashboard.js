import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/houses")
      .then((res) => {
        this.setState({
          houses: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteHouse(id) {
    axios
      .delete(`/api/houses/${id}`)
      .then(() => {
        this.getHouses();
      })
      .catch((err) => console.log(err));
  }

  render() {
    const houses = this.state.houses.map((e) => {
      return (
        <House
          key={e.id}
          id={e.id}
          name={e.name}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
          deleteHouse={this.deleteHouse}
        />
      );
    });
    return (
      <div>
        Dashboard
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {houses}
      </div>
    );
  }
}

export default Dashboard;
