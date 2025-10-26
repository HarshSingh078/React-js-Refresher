import React from 'react'
import {useEffect} from 'react'
const Counter2 = ({count , data}) => {
    const handleCounter = () => {
        console.log("HandleCounter Called")
    }
    const handleData = () => {
        console.log("HandleData Called")
    }
    useEffect(() => {
        handleCounter()
    } , []) 
    useEffect(()=> {
        handleData()
    } , [data])
  return (
    <div>
        <h1>Counter Value : {count}</h1>
        <h1>Data Value : {data}</h1>
    </div>
  )
}

export default Counter2