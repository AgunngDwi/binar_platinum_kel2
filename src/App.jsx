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
import AdminLogin from "./components/Admin/Login";
import AdminDashboard from "./components/Admin/Dashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AdminAddCars from "./components/Admin/AddCars";
// import './css/master.css'



function App() {

  let element = useRoutes ([
      {path: "/", element: <Homepage/>},
      {path: "/login", element: <Login/>},
      {path: "/register", element: <Register/>},
      {path: "/cars", element: <Findcar/>},
      {path: "/detail/:id", element: <Detailcar/>},

      {path: "/admin", element: <AdminLogin/>},
      {path: "/admin_dashboard", element: <AdminDashboard/>},
      {path: "/admin_add_cars", element:<AdminAddCars/>}
  ])

  return element
  //   <div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="cars/*" element={<Findcar />} />
  //         <Route path="/detail/:id" element={<Detailcar />} />
  //         <Route path="/admin" element={<AdminLogin/>}/>
  //         <Route path="/admin_dashboard" element={<AdminDashboard/>} />
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // )
}

export default App
