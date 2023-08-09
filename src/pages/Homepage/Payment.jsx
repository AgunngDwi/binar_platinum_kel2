import React, { useEffect, useState } from 'react'
import NavbarMain from '../../components/Homepage/NavbarMain'
import HeroSection from '../../components/Homepage/HeroSection'
import Footer from '../../components/Homepage/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import BreadcrumbComp from '../../components/Payment/Breadcrumb'
import SelectMethod from '../../components/Payment/SelectMethod'
import BoxDetail from '../../components/Payment/BoxDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Payment = () => {
  const [data, setData] = useState({})
  let {id} = useParams()


  const getDetailOrder = () => {
    axios
    .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, {
      headers : {
        access_token: localStorage.getItem("token")
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getDetailOrder()
  }, [])

  return (
    <div>
      <NavbarMain/>
      <BreadcrumbComp/>
      <BoxDetail data={data}/>
      <SelectMethod data={data}/>
      <Footer/> 
    </div>
  )
}

export default Payment