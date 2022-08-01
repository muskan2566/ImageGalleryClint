import React from 'react'

export default function SavetoDB() {

  return (
    <>
    <div className='container d-flex justify-content-center w-100'>
      <div className='w-50'>
        <div>
          <h2>Add New Image</h2>
        </div>
        <div >
          <form action="http://localhost:3001/" method="post">
            <div className="mb-2">
              <label className="form-label">Name: </label>
              <input type="text" className="form-control" name="name" required />

            </div>
            <div className="mb-2">
              <label className="form-label">Url: </label>
              <input type="text" className="form-control" name="url" required />
            </div>

            <div className="mb-2">
              <label className="form-label">Details: </label>
              <input type="text" className="form-control" name="details" required />
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>

          </form>
        </div>
      </div>
      </div>
    </>
  )
}


