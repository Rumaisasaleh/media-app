import React from 'react'
import { useState } from 'react';
import {Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);  
    const {name,link} = video
    let today =new Date()
    
    let timeStamp= new Intl.DateTimeFormat('en-US',{
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"
    }).format(today)

    let videoHistory = {name,link,timeStamp}
    // make api call
    await addVideoHistoryAPI(videoHistory)

  }

  const removeVideo=async (id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag started " + id);
    e.dataTransfer.setData("videoId ",id)
  }

  return (
    <>
      <Card style={{ width: '16rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video?.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5 >{video?.name}</h5>
          {insideCategory?null: <button  onClick={()=>removeVideo(video?.id)} className='btn'><i class="fa-solid fa-trash"></i></button>}
          </Card.Title>
        
      </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
