import React from 'react'

export default function SavetoDB() {

  return (
    <>
    <div className="w-25 mx-5">
   <form action="https://imagegallery2566.herokuapp.com/" method="post">
  <div className="mb-2">
    <label className="form-label">Name: </label>
    <input type="text" className="form-control" name="name"  required/>

  </div>
  <div className="mb-2">
    <label className="form-label">Url: </label>
    <input type="text" className="form-control" name="url" required/>
  </div>
  
  <div className="mb-2">
    <label className="form-label">Details: </label>
    <input type="text" className="form-control" name="details" required/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>

</form>
</div>
    </>
  )
}


