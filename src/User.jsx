const User = ({userData})=> {
    return (
        <div style={{border:"1px solid green" , padding:"10px" , margin:"10px" , width:"400px" , borderRadius:"10px"}}>
            <h3> Name : <span style={{color:"green"}}>{userData.name}</span></h3>
            <h3> Age : <span style={{color:"green"}}>{userData.age}</span></h3>
            <h3> Email : <span style={{color:"green"}}>{userData.email}</span></h3>
        </div>
    )
}

export default User