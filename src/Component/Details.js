import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {

  const[name , setname] =useState("");
  const[details , setdetails] = useState("");
  const[url , seturl] = useState("");
  const {id} = useParams();
 
  useEffect(()=>{
     function getdata(){
      fetch(`https://imagegallery2566.herokuapp.com/data/${id}`)
      .then((data)=>{
         return data.json();
      })
      .then((resullt)=>{
          setname(result[0].name);
          details(result[0].Details);
          seturl(result[0].url);
      })
      .catch((err)=>{
        console.log(err);
      })
     }
     getdata();
  },[id])
  return (
    <>
      <div className="d-flex">
      <div>
          <image src={url} alt="" height="400" width="400"/>
        </div>
        <div>
          name : {name};
          Details : {details};
        </div>
      </div>


    </>
  )
}
