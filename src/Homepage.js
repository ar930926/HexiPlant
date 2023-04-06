import "./App.css";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const plantArray = [
  {
    id: 1,
    name: "Aloe Vera",
    minTemp: 13,
    maxTemp: 27,
    minHum: 40,
    maxHum: 40,
    toxic: true,
  },
  {
    id: 2,
    name: "Parsley",
    minTemp: 0,
    maxTemp: 32,
    minHum: 0,
    maxHum: 100,
    toxic: true,
  },
  {
    id: 3,
    name: "Succulent",
    minTemp: 7,
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: true,
  },
  {
    id: 4,
    name: "Cactus",
    minTemp: 7,
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: false,
  },
];

let current = {
  temp: 28,
  hum: 20,
};

function Homepage() {
  let i = 0;
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(28);
  const [hum, setHum] = useState(20);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleHumChange(value) {
    console.log(value.target.value);
    setHum(value.target.value);
  }

  function handleTempChange(value) {
    setTemp(value.target.value);
  }

  return (
    <div className="App">
      <header className="App-header container mb-3">
        <h1>HexiPlant</h1>
      </header>
      <main className="container">
        <div className="container mb-3">
          <div className="row">
            <div className="col text-center">
              <h2>Preset</h2>
            </div>
            <h3>Temperature: {temp}°C</h3>
            <Form.Range value={temp} min={0} max={50} onChange={handleTempChange} />
            <h3>Humidity: {hum}%</h3>
            <React.Fragment>
              <Form.Range value={hum} min={0} max={100} onChange={handleHumChange} />
            </React.Fragment>
          </div>
          <div className="row">
            <div className="col text-start">
              <b>Current Temp:</b>
            </div>
            <div className="col text-end">{temp}°C</div>
          </div>
          <div className="row">
            <div className="col text-start">
              <b>Current Humidity:</b>
            </div>
            <div className="col text-end">{hum}%</div>
          </div>
        </div>
        {plantArray.map((element) => {
          i++;
          let tempStatus, humStatus, toxStatus, status;

          // Set Temp Status
          if (element.minTemp > temp) {
            tempStatus = "Too Cold";
          } else if (element.maxTemp < temp) {
            tempStatus = "Too Hot";
          } else {
            tempStatus = "Perfect";
          }

          // Set Hum Status
          if (element.minHum > hum) {
            humStatus = "Too Dry";
          } else if (element.maxHum < hum) {
            humStatus = "Too Moist";
          } else {
            humStatus = "Perfect";
          }

          // Set Tox Satatus
          if (element.toxic) {
            toxStatus = "Yes";
          } else {
            toxStatus = "No";
          }

          // Set General Status
          if (humStatus !== "Perfect" || tempStatus !== "Perfect" || !toxStatus) {
            status = { emoji: "😞", color: "danger" };
          } else {
            status = { emoji: "😄", color: "good" };
          }

          return (
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class={"accordion-header " + status.color}>
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + element.id}
                    aria-expanded="false"
                    aria-controls={"collapse" + element.id}
                  >
                    {element.name} {status.emoji}
                  </button>
                </h2>
                <div
                  id={"collapse" + element.id}
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <div className="col text-start">
                        <b>Temperature Status:</b>
                      </div>
                      <div className="col text-end">{tempStatus}</div>
                    </div>
                    <div className="row">
                      <div className="col text-start">
                        <b>Humidity Status:</b>
                      </div>
                      <div className="col text-end">{humStatus}</div>
                    </div>
                    <div className="row">
                      <div className="col text-start">
                        <b>Toxic to Pets:</b>
                      </div>
                      <div className="col text-end">{toxStatus}</div>
                    </div>
                    <div className="row">
                      {tempStatus == "Too Hot" ||
                      tempStatus == "Too Dry" ||
                      humStatus == "Too Dry" ||
                      humStatus == "Too Moist" ? (
                        <div className="col text-start">
                          <button
                            className="red"
                            onClick={() => {
                              window.location.href = `/eachPlant/${i}`;
                            }}
                          >
                            Show Details
                          </button>
                        </div>
                      ) : (
                        <div className="col text-start" href={`/eachPlant/${i}`}>
                          <button
                            className="green"
                            onClick={() => {
                              window.location.href = `/eachUser/${i}`;
                            }}
                          >
                            Show Details
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button type="button" class="btn btn-secondary my-4 btn-block" onClick={handleShow}>
          Add Plant
        </button>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Plant Name</Form.Label>
              <Form.Control type="text" placeholder="Enter plant name" name="name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Minimum Temperature</Form.Label>
              <Form.Control type="number" placeholder="Enter minimum temperature" name="minTemp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Maximum Temperature</Form.Label>
              <Form.Control type="number" placeholder="Enter maximum temperature" name="maxTemp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Minimum Humidity</Form.Label>
              <Form.Control type="number" placeholder="Enter minimum humidity" name="minHum" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Maximum Humidity</Form.Label>
              <Form.Control type="number" placeholder="Enter maximum humidity" name="maxHum" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Too High Temperature</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter instructions for when temperature is too high"
                name="tooHighTemp"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Label>Too Low Temperature</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter instructions for when temperature is too low"
                name="tooLowTemp"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Label>Low Humidity</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter instructions for when humidity is too low"
                name="lowHumidity"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
              <Form.Label>High Humidity</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter instructions for when humidity is too high"
                name="highHumidity"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Homepage;
