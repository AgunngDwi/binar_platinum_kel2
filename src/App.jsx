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
// import './css/master.css'



function App() {

  let element = useRoutes ([
      {path: "/", element: <Homepage/>},
      {path: "/login", element: <Login/>},
      {path: "/register", element: <Register/>},
      {path: "/cars", element: <Findcar/>},
      {path: "/detail/:id", element: <Detailcar/>},

  ])

  return element
}

export default App
