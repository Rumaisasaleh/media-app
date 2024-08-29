import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {
  const navigateByUrl= useNavigate()
  return (
    <>
      <Row className='mt-5 align-items justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}> 
      <h1 style={{color:"black",fontSize:"30px",marginTop:"90px"}}>Welcome to MEDIA PLAYER</h1>
      <p style={{marginTop:"30px"}}>Media Player is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. Media Player is available for desktop operating systems and mobile platforms, such as Android, iOS and iPadOS.Media Player is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. Media Player is available for desktop operating systems and mobile platforms, such as Android, iOS and iPadOS. </p>
      <Button onClick={()=>navigateByUrl('/home')} variant="dark" style={{marginTop:'30px'}} size="sm">
        Get Started
     </Button>
      </Col>
      <Col lg={5}>
      <img src="src/assets/pngtree-vintage-record-player-illustration-art-generative-ai-png-image_11945762-removebg-preview.png" width="500px" height="500px" style={{marginLeft:"80px",marginTop:"10px"}}  alt="" /></Col>
      <Col></Col>
      </Row> 

      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h4 className='text-info' style={{marginTop:'40px'}}>Features</h4>
      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" />
      <Card.Body>
        <Card.Title className='text-info'>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.giphy.com/media/CRuvuFAilmGis/giphy.gif" height="308px" />
      <Card.Body>
        <Card.Title className='text-info'>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" height="308px" />
      <Card.Body>
        <Card.Title className='text-info'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </div>

     <div className="container border rounded p-4 border-dark mt-5 d-flex justify-content-center align-items-center">

      <div className="col-lg-5 mt-3">
      <h4 className='text-info'>SIMPLE, POWERFUL & FAST</h4>
      <h6 className='mb-5 mt-4'><span className='text-info'>PLAY EVERYTHING : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iure odit exercitationem fugit adipisci facere laudantium possimus non? Aut, quam. Perspiciatis voluptatibus labore modi illo excepturi adipisci, alias nulla doloribus.</h6>
      <h6 className='mb-5 mt-4'><span className='text-info'>CATEGORIZE VIDEOS : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iure odit exercitationem fugit adipisci facere laudantium possimus non? Aut, quam. Perspiciatis voluptatibus labore modi illo excepturi adipisci, alias nulla doloribus.</h6>
      <h6 className='mb-5 mt-4'><span className='text-info'>MANAGING VIDEOS : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iure odit exercitationem fugit adipisci facere laudantium possimus non? Aut, quam. Perspiciatis voluptatibus labore modi illo excepturi adipisci, alias nulla doloribus.</h6>
      </div>

      <div className="col-lg-5 ms-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gJLVTKhTnog?si=v2mQodI1Hnpp2R_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
     </div>




      </div>
    </>
  )
}

export default Landingpage
