import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "/src/components/Payment/boxDetail.css"

const BoxDetail = ({data}) => {
    console.log("box", data)

    const replaceCategory = (category) => {
    switch (category) {
      case 'large':
        return '6 - 8 orang';
      case 'medium':
        return '4 - 6 orang';
      case 'small':
        return '2 - 4 orang';
      default:
        return category;
    }
  };

    
  return (
    <div>
        <Container className='box-detail'>
            <Row>
                <h5 className='tittle-box'>Detail Pesananmu</h5>
                <Col >
                    <label className='subtittle-box' htmlFor="">Nama/Tipe Mobil</label>
                    {/* <p>{data.Car.name}</p> */}
                </Col>
                <Col>
                    <label className='subtittle-box' htmlFor="">Kategori</label>
                    {/* <p>{data.Car.category}</p> */}
                </Col>
                <Col >
                    <label className='subtittle-box' htmlFor="">Tanggal Mulai Sewa</label>
                    {/* <p>{data.start_rent_at}</p> */}
                </Col>
                <Col >
                    <label className='subtittle-box' htmlFor="">Tanggal Akhir Sewa</label>
                    {/* <p>{data.finish_rent_at}</p> */}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BoxDetail