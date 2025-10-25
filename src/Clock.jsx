import React from 'react'
import { useEffect , useState } from 'react'

const Clock = ({color}) => {
    const [time , setTime] = useState(0)
    useEffect(()=> {
        setInterval(()=> {
            setTime(new Date().toLocaleDateString()) 
        },1000)
    } , []) 
    return (
        <div> 
            <h1 style={{color:color , backgroundColor:"#000" , width:"150px" , padding:"10px" , borderRadius:"5px"}}>
                {time}
            </h1>
        </div>
    )
}
export default Clock