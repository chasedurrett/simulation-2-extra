import React from "react";

function House(props) {
  console.log(props);
  const { id, name, address, city, state, zip } = props;
  const { deleteHouse } = props;
  return (
    <div>
      <div>
        <h3>Property Name: {name}</h3>
        <h3>Address: {address}</h3>
        <h3>City: {city}</h3>
        <h3>State: {state}</h3>
        <h3>Zip: {zip}</h3>
      </div>
      <div>
        <span onClick={() => deleteHouse(id)}>
          <img
            alt="delete-house"
            src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"
          />
        </span>
      </div>
    </div>
  );
}

export default House;
