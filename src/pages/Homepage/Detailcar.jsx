import React, { useEffect, useState } from 'react'
import NavbarMain from '../../components/Homepage/NavbarMain'
import HeroSection from '../../components/Homepage/HeroSection'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Homepage/Footer'
import "/src/css/Homepage/detail.css"

const Detailcar = () => {
  const [data, setData] = useState({})
  let {id} = useParams()

  console.log(id)

  const getDetailData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`

    axios
    .get(api)
    .then((res) => {
      setData(res.data)
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

    useEffect(() => {
      getDetailData()
    }, [])
    
  return (
    <div>
        <NavbarMain/>
        <HeroSection showButton={false}/>
        <div className="card-detail">
                <div className="card">
                    <h2>Tentang Paket</h2>
                    <h3>Include</h3>

                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>

                    <h3>Exclude</h3>

                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>

                    <h3>Refund, Reschedule, Overtime</h3>

                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>

                <div className="card-car">
             {
                Object.entries(data).length ? (
                    
                    <div className="card">
                        <div className="card-img">
                        <img src={data.image}></img>
                        <div className="">
                        <h1>{data.name}</h1>
                        <div className="price">
                        <p>Total </p>
                        <p>{data.price}</p>
                        </div>
                        </div>

                        </div>
                    </div>
                   
                ) : (
                    <h1>render dulu guys</h1>
                )
             }
            </div>
             </div>
        <Footer/>
    </div>
  )
}

export default Detailcar