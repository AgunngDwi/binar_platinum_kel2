import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage/Homepage";
import Findcar from "./pages/Homepage/Findcar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailcar from "./pages/Homepage/Detailcar";
import AdminLogin from "./components/Admin/Login";
import AdminDashboard from "./components/Admin/Dashboard";
// import './css/master.css'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cars/*" element={<Findcar />} />
          <Route path="/detail/:id" element={<Detailcar />} />
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/admin_dashboard" element={<AdminDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
