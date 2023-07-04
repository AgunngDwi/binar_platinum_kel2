import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { FAQ } from '/src/helpers/Constan.js'

const Faq = () => {
  return (
    <div className='faq-container'>
    <Container >
        <div className='faq-tittle'>
            <h1>Frequently Asked Question</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>
        <div className='faq-content'>
            <Accordion defaultActiveKey="0">
                {FAQ.map((item, index)=>(
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion>
        </div>
    </Container>
    </div>
  )
}

export default Faq