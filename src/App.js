import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import EachPlant from "./EachPlant";

//Components

//Libraries

//Bootstrap

//CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/eachUser/:index" element={<EachPlant />} />
      </Routes>
    </BrowserRouter>
  );
}

//        <Route exact path="/:day" index element={<Homepage />} />

export default App;
