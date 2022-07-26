import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {

  const [name, setname] = useState("");
  const [url, seturl] = useState("");
  const [details, setdetails] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  function handelchange() {
    fetch("https://imagegallery2566.herokuapp.com/edit", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, url: url, details: details, _id: id })
    })
      .then((data) => {
        return data.json();
      }).then((result) => {
        if (result) {
          navigate('/');
        }
      }).catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    function getdata() {
      fetch(`https://imagegallery2566.herokuapp.com/data/${id}`)
        .then((data) => {
          return data.json();
        })
        .then((result) => {
          setname(result[0].name);
          seturl(result[0].url);
          setdetails(result[0].details);
          console.log(result);
        }).catch((err) => {
          console.log(err);
        })
    }
    getdata();
  }, [id])


  return (
    <>
    <div className='container d-flex justify-content-center w-100'>
      <div className='d-flex flex-column w-50'>
        <div>
          <h1>Edit Form</h1>
        </div>
        <div className=" ">

          <div className="mb-2">
            <label className="form-label">Name: </label>
            <input type="text" className="form-control" name="name" value={name} onChange={(e) => { setname(e.target.value) }} required />

          </div>
          <div className="mb-2">
            <label className="form-label">Url: </label>
            <input type="text" className="form-control" name="url" value={url} onChange={(e) => { seturl(e.target.value) }} required />
          </div>

          <div className="mb-2">
            <label className="form-label">Details: </label>
            <input type="text" className="form-control" name="details" value={details} onChange={(e) => { setdetails(e.target.value) }} required />
          </div>

          <button type="submit" className="btn btn-primary" onClick={() => { handelchange() }}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
