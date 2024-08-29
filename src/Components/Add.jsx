import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadVideoAPI } from '../../services/allAPI';


function Add({setUploadVideoResponse}) {

const [uploadVideo,setUploadVideo]= useState({id:"",name:"",url:"",link:""})
  console.log(uploadVideo);
  
  const getYoutubeLink =(e)=>{
    const {value}= e.target
    if(value.includes("v=")){
      let VID =value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd= async ()=>{

    const{id,name,url,link} = uploadVideo

    if(!id || !name || !url || !link){
      alert("please fill the missing feilds")
    }else{
      //video upload to json server
      const result =await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<=300){
        alert("Video Uploaded")
        handleClose()

        //empty feild
        setUploadVideo({
          id:"",name:"",url:"",link:""
        })
        
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <h2>Upload Videos</h2>&nbsp;
        <button onClick={handleShow}  style={{backgroundColor:'white', color:'black',border:'none',marginTop:'-7px'}}><i class="fa-solid fa-upload"></i></button>
      </div>

      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>UPLOAD VIDEOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="video Id"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingName" label="video Name" className='mb-3'>
                <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingName" label="Image URL" className='mb-3'>
                <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingName" label="Video URL" className='mb-3'>
                  <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink}/>
              </FloatingLabel>
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
