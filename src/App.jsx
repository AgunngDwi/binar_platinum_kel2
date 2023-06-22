import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";
import Findcar from "./pages/Findcar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailcar from "./pages/Detailcar";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cars/*" element={<Findcar />} />
          <Route path="/detail/:id" element={<Detailcar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
