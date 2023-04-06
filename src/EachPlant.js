import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import aloevera from "./assets/aloevera.jpg";
import parsley from "./assets/parsley.jpg";
import succulent from "./assets/succulent.jpg";
import cactus from "./assets/cactus.jpg";

const plantArray = [
  {
    id: 1,
    name: "Aloe Vera",
    minTemp: 13,
    maxTemp: 27,
    minHum: 40,
    maxHum: 40,
    toxic: true,
    tooHighTemp: "Move the plant to a cooler location or provide shade.",
    tooLowTemp: "Move the plant to a warmer location or provide insulation.",
    lowHumidity: "Mist the leaves with water regularly or use a humidifier.",
    highHumidity: "Ensure proper ventilation and avoid overwatering.",
    image: aloevera,
  },
  {
    id: 2,
    name: "Parsley",
    minTemp: 0,
    maxTemp: 32,
    minHum: 0,
    maxHum: 100,
    toxic: true,
    tooHighTemp: "Move the plant to a cooler location or provide shade.",
    tooLowTemp: "Move the plant to a warmer location or provide insulation.",
    lowHumidity: "Mist the leaves with water regularly or use a humidifier.",
    highHumidity: "Ensure proper drainage and avoid overwatering.",
    image: parsley,
  },
  {
    id: 3,
    name: "Succulent",
    minTemp: 7,
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: true,
    tooHighTemp: "Move the plant to a cooler location or provide shade.",
    tooLowTemp: "Move the plant to a warmer location or provide insulation.",
    lowHumidity: "Water sparingly and provide good drainage.",
    highHumidity: "Avoid overwatering and ensure proper ventilation.",
    image: succulent,
  },
  {
    id: 4,
    name: "Cactus",
    minTemp: 7,
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: false,
    tooHighTemp: "Move the plant to a cooler location or provide shade.",
    tooLowTemp: "Move the plant to a warmer location or provide insulation.",
    lowHumidity: "Water sparingly and provide good drainage.",
    highHumidity: "Avoid overwatering and ensure proper ventilation.",
    image: cactus,
  },
];

const current = {
  temp: 28,
  hum: 20,
};

function EachPlant() {
  const { index } = useParams(); // get the index from the URL

  const plant = plantArray[index - 1]; // get the plant based on the index
  const [currentPlant, setCurrentPlant] = useState(plant);

  useEffect(() => {
    setCurrentPlant(plant);
    console.log(plant);
  }, []);

  // display the plant information
  return (
    <div>
      <header className="App-header container mb-3 flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"
         className="mx-2" onClick={() => {
                              window.location.href = `/`;
                            }}>
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        <h1 className="mx-2">{currentPlant.name}</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <img
              src={currentPlant.image}
              className="plant-img mb-3"
              alt="Plant image"
            />
          </Col>
        </Row>
        <Row>
          {current.temp > currentPlant.maxTemp ? (
            <React.Fragment>
              <p className="warning">High Temperature!</p>
              <p>{currentPlant.tooHighTemp}</p>
            </React.Fragment>
          ) : current.temp < currentPlant.minTemp ? (
            <React.Fragment>
              <p className="warning">Low Temperature!</p>
              <p>{currentPlant.tooLowTemp}</p>
            </React.Fragment>
          ) : (
            <p className="good">Temperature is good</p>
          )}

          {current.hum > currentPlant.maxHum ? (
            <React.Fragment>
              <p className="warning">High Humidity!</p>
              <p>{currentPlant.highHumidity}</p>
            </React.Fragment>
          ) : current.hum < currentPlant.minHum ? (
            <React.Fragment>
              <p className="warning">Low Humidity!</p>
              <p>{currentPlant.lowHumidity}</p>
            </React.Fragment>
          ) : (
            <p className="good">Humidity is good</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default EachPlant;
