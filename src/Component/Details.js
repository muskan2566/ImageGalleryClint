import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [url, seturl] = useState("");
  const { id } = useParams();

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
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getdata();
  }, [id])
  return (
    <>
      <div>
        <div>
          <img src={url} alt="" height="400" width="400" />
        </div>
        <div>
          name = {name} <br />
          details = {details}
        </div>
      </div>


    </>
  )
}
