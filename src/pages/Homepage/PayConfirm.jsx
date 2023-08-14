import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Homepage/NavbarMain";
import BreadcrumbComp from "../../components/Payment/Breadcrumb";
import Footer from "../../components/Homepage/Footer";
import CountdownComp from "../../components/Payment/PayComp/CountdownComp";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const PayConfirm = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const selectedBank = location.state.selectedBank;
  const { id } = useParams();

  const getDetailOrder = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailOrder();
  }, []);

  return (
    <div>
      <NavbarMain />
      <BreadcrumbComp />
      <CountdownComp data={data} bankData={selectedBank} />
      <Footer />
    </div>
  );
};

export default PayConfirm;