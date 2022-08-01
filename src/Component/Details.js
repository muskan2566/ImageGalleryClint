import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Details() {

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [url, seturl] = useState("");
  const [_id , setId] = useState("");
  const { id } = useParams();
  const navigate =  useNavigate();
  function handelDelete(e){
    fetch(`https://imagegallery2566.herokuapp.com/delete/${e}`,{method:'DELETE'})
    .then((data)=>{
        return data.json();
    }).then((result)=>{
        console.log(result);
    })
   navigate('/'); 
}
  useEffect(() => {
    function getdata() {
      fetch(`https://imagegallery2566.herokuapp.com/data/${id}`)
        .then((data) => {
          return data.json();
        })
        .then((result) => {
          setname(result[0].name);
          setdetails(result[0].details);
          seturl(result[0].url);
          setId(result[0]._id);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getdata();
  }, [id])
  return (
    <>
      <div className='d-flex m-5'>
        <div>
          <img src={url} alt="" height="250" width="250" />
        </div>
        <div>
          Name = {name} <br />
          Details = {details}
          <div className='button2'>
              <button className=" body mx-3 my-5 d-inline p-2 bg-light text-dark " onClick={()=>{handelDelete(_id)}}>Delete</button>
              <button className="d-inline p-2 bg-light text-dark"><Link className="button" to={`/edit/${_id}`}>Edit</Link></button>
              </div>
        </div>
      </div>


    </>
  )
}
