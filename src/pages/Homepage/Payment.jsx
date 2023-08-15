import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Homepage/NavbarMain";
import Footer from "../../components/Homepage/Footer";
import BreadcrumbComp from "../../components/Payment/PayMethod/Breadcrumb";
import SelectMethod from "../../components/Payment/PayMethod/SelectMethod";
import BoxDetail from "../../components/Payment/PayMethod/BoxDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

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
      active: false,
    },
    {
      id: 3,
      name: "Tiket",
      active: false,
    },
  ];

  return (
    <div>
      <NavbarMain />
      <BreadcrumbComp stepper={breadCrumb} />
      <BoxDetail data={data} />
      <SelectMethod data={data} />
      <Footer />
    </div>
  );
};

export default Payment;
