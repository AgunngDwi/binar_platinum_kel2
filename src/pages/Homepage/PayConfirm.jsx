import React from "react";
import NavbarMain from "../../components/Homepage/NavbarMain";
import BreadcrumbComp from "../../components/Payment/Breadcrumb";
import Footer from "../../components/Homepage/Footer";
import CountdownComp from "../../components/Payment/PayComp/CountdownComp";

const PayConfirm = () => {
  return (
    <div>
      <NavbarMain />
      <BreadcrumbComp />
      <CountdownComp />
      <Footer />
    </div>
  );
};

export default PayConfirm;
