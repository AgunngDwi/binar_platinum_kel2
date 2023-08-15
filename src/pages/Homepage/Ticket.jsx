import React, { useEffect, useState } from "react";
import BreadcrumbComp from "../../components/Payment/PayMethod/Breadcrumb";
import NavbarMain from "../../components/Homepage/NavbarMain";
import Footer from "../../components/Homepage/Footer";
import Eticket from "../../components/Payment/Ticket/Eticket";
import { useParams } from "react-router-dom";
import axios from "axios";

const Ticket = () => {
  const [data, setData] = useState({});
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

  const breadCrumb = [
    {
      id: 1,
      name: "Pilih Metode",
      active: true,
    },
    {
      id: 2,
      name: "Bayar",
      active: true,
    },
    {
      id: 3,
      name: "Tiket",
      active: true,
    },
  ];

  return (
    <div>
      <NavbarMain />
      <BreadcrumbComp stepper={breadCrumb} />
      <Eticket dataOrder={data} />
      <Footer />
    </div>
  );
};

export default Ticket;
