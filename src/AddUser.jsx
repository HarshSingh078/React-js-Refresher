import React from 'react'

function AddUser({setUser}) {
  return (
    <div>
        <h1>Add Users</h1>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='Enter your name' />
        <hr />
    </div>
  )
}

export default AddUser