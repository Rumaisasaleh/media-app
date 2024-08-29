import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function Watchhistory() {

  const [history,setHistory] = useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory =async()=>{
   const result = await getVideoHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  // console.log(history);

  const removeVideoHistory= async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
      <div className="contaioner mt-5 mb-3 d-flex justify-content-between">
        <h2 style={{marginLeft:'20px'}}>Watch History</h2>
        <Link  style={{textDecoration:"none",marginRight:'20px'}} to={"/home"}>Back to home&nbsp;<i class="fa-solid fa-backward"></i></Link>
      </div>

      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {
          history?.length>0?history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.name}</td>
            <td><a href="">{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button onClick={()=>removeVideoHistory(video?.id)} className='btn'><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          )):<p>Nothing To Display</p>
       
        }

        </tbody>
      </table>
    </>
  )
}

export default Watchhistory
