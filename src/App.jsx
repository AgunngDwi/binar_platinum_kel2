import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage/Homepage";
import Findcar from "./pages/Homepage/Findcar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailcar from "./pages/Homepage/Detailcar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ProtectedLogin from "./components/User/ProtectLogin";
import ProtectedChooseCar from "./components/User/ProtectChooseCar";
import 'rsuite/dist/rsuite.min.css';
import Payment from "./pages/Homepage/Payment";
// import './css/master.css'



function App() {

  let element = useRoutes ([
      {path: "/", element: <Homepage/>},
      {path: "/login", element: <ProtectedLogin><Login/></ProtectedLogin>},
      {path: "/register", element: <ProtectedLogin><Register/></ProtectedLogin>},
      {path: "/cars", element: <Findcar/>},
      {path: "/detail/:id", element: <ProtectedChooseCar><Detailcar/></ProtectedChooseCar>},
      {path: "/payment/:id", element: <ProtectedChooseCar><Payment/></ProtectedChooseCar>},

  ])

  return element
}

export default App
