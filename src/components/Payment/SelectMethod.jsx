import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "/src/components/Payment/selectMethod.css"

const SelectMethod = ({data}) => {
  console.log("method", data)

  const handleSelect = () => {

  }

  return (
    <div >
        <Container  >
        <Row className='selectMethod-wrapper'>
          <Col className='payment-method'>
                <h3>Pilih Bank Transfer</h3>
                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                <h3 onClick={handleSelect}>BCA Transfer</h3>
                <h3>BNI Transfer</h3>
                <h3>Mandiri Transfer</h3>
          </Col>
          <Col className='payment-detail'>
              {/* <h3>{data.Car.name}</h3> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SelectMethod