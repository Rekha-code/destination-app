import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DestinationInput.module.css";

const DestinationInput = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState("");

  const addDestination = () => {
    if (newDestination.trim() !== "") {
      setDestinations([...destinations, newDestination]);
      setNewDestination("");
    }
  };

  return (
    <>
      <h1>My Favorite Destinations</h1>
      <div>
        <input
          type="text"
          id="destinationInput"
          className={styles.destInput}
          placeholder="Enter destination"
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
        />
        <button className={styles.btnDestination} onClick={addDestination}>
          Add Destination
        </button>
      </div>
      <ul>
        {destinations.map((destination, index) => (
          <li
            className="list-group-item"
            style={{ color: "white" }}
            key={index}
          >
            {destination}
          </li>
        ))}
      </ul>
    </>
  );
};
export default DestinationInput;
