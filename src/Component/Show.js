import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Show() {

    const [imgData, setimgData] = useState();
    const [num , setNum] = useState(0);

    function handelDelete(e){
            fetch(`http://localhost:3001/delete/${e}`,{method:'DELETE'})
            .then((data)=>{
                return data.json();
            }).then((result)=>{
                console.log(result);
            })
            setNum(num+1);
    }

    useEffect(() => {
        function getData() {
            fetch("http://localhost:3001/show")
                .then((data) => {
                    return data.json();
                }).then((result) => {
                    setimgData(result);
                }).catch((err) => {
                    console.log(err);
                });
        }
        getData();
    }, [num])


    return (
        <>
            <button>
                <Link to="/form">add new data</Link>
            </button>

            {
                imgData && imgData.map((e)=>{
                    return (
                    <div key={e._id} className="d-flex">
                            <img src={e.url} height="200" width="200" alt=""/>
                            <div>
                            <button className="mx-3 my-5" onClick={()=>{handelDelete(e._id)}}>Delete</button>
                            <button><Link to={`/edit/${e._id}`}>Edit</Link></button>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}
