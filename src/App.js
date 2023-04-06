import './App.css';

const plantArray = [
  {
    id: 1,
    name: "Aloe Vera", 
    minTemp: 13, 
    maxTemp: 27,
    minHum: 40,
    maxHum: 40,
    toxic: true
  }, 
  {
    id: 2,
    name: "Parsley", 
    minTemp: 0, 
    maxTemp: 32,
    minHum: 0,
    maxHum: 100,
    toxic: true
  }, 
  {
    id: 3,
    name: "Succulent", 
    minTemp: 7, 
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: true
  }, 
  {
    id: 4,
    name: "Cactus", 
    minTemp: 7, 
    maxTemp: 29,
    minHum: 40,
    maxHum: 100,
    toxic: false
  }, 
]

const current = {
  temp: 28,
  hum:20
}

function App() {
  return (
    <div className="App">
      <header className="App-header container mb-3">
        <h1>HexiPlant</h1>
      </header>
      <main className='container'>
        <div className='container mb-3'>
          <div className='row'>
            <div className='col text-start'>
              <b>Current Temp:</b>
            </div>
            <div className='col text-end'>
              {current.temp}°C
            </div>    
          </div>
          <div className='row'>
            <div className='col text-start'>
              <b>Current Humidity:</b>
            </div>
            <div className='col text-end'>
              {current.hum}%
            </div>    
          </div>
        </div>
        {plantArray.map(element => {
          let tempStatus, humStatus, toxStatus, status;

          // Set Temp Status
          if (element.minTemp > current.temp){
            tempStatus = "Too Cold"
          } else if (element.maxTemp < current.temp){
            tempStatus = "Too Hot"
          } else {
            tempStatus = "Perfect"
          }

          // Set Hum Status
          if (element.minHum > current.hum){
            humStatus = "Too Dry"
          } else if (element.maxHum < current.hum){
            humStatus = "Too Moist"
          } else {
            humStatus = "Perfect"
          }

          // Set Tox Satatus
          if (element.toxic){
            toxStatus = "Yes"
          } else {
            toxStatus = "No"
          }

          // Set General Status
          if ((humStatus !== "Perfect") || (tempStatus !== "Perfect") || !toxStatus){
            status = {emoji: "😞", color: "danger"};
          } else {
            status = {emoji: "😄", color: "good"};
          }

          return(
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class={"accordion-header " + status.color}>
                <button 
                  class="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={"#collapse" + element.id} aria-expanded="false" 
                  aria-controls={"collapse" + element.id}>
                  {element.name} {status.emoji}
                </button>
              </h2>
              <div 
                id={"collapse" + element.id} 
                class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div className='row'>
                    <div className='col text-start'>
                      <b>Temperature Status:</b>
                    </div>
                    <div className='col text-end'>
                      {tempStatus}
                    </div>    
                  </div>
                  <div className='row'>
                    <div className='col text-start'>
                      <b>Humidity Status:</b>
                    </div>
                    <div className='col text-end'>
                      {humStatus}
                    </div>    
                  </div>
                  <div className='row'>
                    <div className='col text-start'>
                      <b>Toxic to Pets:</b>
                    </div>
                    <div className='col text-end'>
                      {toxStatus}
                    </div>    
                  </div>
                </div>
              </div>
            </div>
          </div>)
        })}
        <button type="button" class="btn btn-secondary my-4 btn-block disabled">Add Plant</button>  
      </main>
    </div>
  );
}

export default App;
