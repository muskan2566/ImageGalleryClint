import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Show() {

    const [imgData, setimgData] = useState();
   
    useEffect(() => {
        function getData() {
            fetch("https://imagegallery2566.herokuapp.com/show/")
                .then((data) => {
                    return data.json();
                }).then((result) => {
                    setimgData(result);
                    console.log(result);
                }).catch((err) => {
                    console.log(err);
                });
        }
        console.log("Done");
        getData();
    },[])


    return (
        <>
        <div className='container text-center'>
            <h2 className='heading'>Add Your Images</h2>
            <button  className=" text-light my-2">
                <Link className="btn button" to="/form">add new data</Link>
            </button>

        <div className='d-flex flex-wrap justify-content-center'>
            {
                imgData && imgData.map((e)=>{
                    return (
                    <div key={e._id} className="mx-5 my-4 border border-info px-4 py-3" >
                        
                    <Link to={`/details/${e._id}`}><img src={e.url} height="180" width="180" alt=""/></Link>

                    </div>
                    )
                })
            }
            </div>
            </div>
        </>
    )
}
