import React from 'react'

function User2({displayName , name , getUser}) {
  return (
    <div>
        <button onClick={()=>displayName(name)}>Display Name</button>
        <button onClick={()=>getUser()}>Get user name</button>
    </div>
  )
}

export default User2