import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form } from 'react-bootstrap';


function Footer() {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 p-3'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="ms-0" />
                <img src="https://static.vecteezy.com/system/resources/previews/020/389/277/original/media-player-icon-png.png"  width="20px" height="20px" alt="" />
                MEDIA PLAYER
              </h6>
              <p>
              Media Player is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Landing Page
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Home Page
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Watch History
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a href='#!'style={{ textDecoration: "none" }} className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <section >

           <div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
           <div>
            <Form.Control size="sm" type="text" placeholder="Enter Your Email" />
            </div>
            <div>
            <Button variant="dark" size="sm">
              Subscribe
            </Button>
            </div>
           </div>

            <div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
            </div>
          </section>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          mediaplayer.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
