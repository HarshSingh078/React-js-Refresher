// import React from 'react'

// function App() {
//   const userName = "Harsh Singh" ;
//   let x = 10 ;
//   let y = 20 ;
//   return (
//     <>
//     <div>App</div>
//     <h1>{userName}</h1>
//     <h1>{x}</h1>
//     <h1>{y}</h1>
//     </>
//   )
// }

// // export function Name() {
// //   return (
// //     <div>Harsh Singh</div>
// //   )
// // }

// export default App

// Event Handling
// import React from 'react'

// function App() {
//   function callfun() {
//     alert("function called")
//   }
//   const fruit = (name) => {
//     alert(name)
//   }
//   return (
//     <>
//     <div>App</div>
//     <button onClick={callfun}>Click Me</button>
//     <button onClick={()=>fruit("apple")}>Apple</button>
//     <button onClick={()=>fruit("banana")}>Banana</button>
//     </>
//   )
// }

// export default App

// State and Hooks
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [fruit , setFruit] = useState("Apple")
//   const handleFruit = () => {
//     setFruit("Banana")
//   }
//   return (
//     <div>
//       <h1>App</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change fruit name</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [count , setCount] = useState(0)
//   const handleCounter = () => {
//     setCount(count+1)
//   }
//   return (
//     <div>
//           <h1>Counter : {count}</h1>
//           {/* <button onClick={()=>setCount(count+1)}>Update Count</button> */}
//           <button onClick={handleCounter}>Update Count</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [display , setDsiplay] = useState(true) ;
//   return (
//     <div>
//       <button onClick={()=>setDsiplay(!display)}>Toggle</button>
//       {
//         display ? <h1>Harsh Singh</h1> : null
//         // display
//       }
//     </div>
//   )
// }

// export default App

// Multiple Conditional
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [count , setCount] = useState(0) ;
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Counter</button>
//         {
//           count == 0 ? <h1>Condition 0</h1>
//          : count == 1 ? <h1>Condition 1</h1>
//          : count == 2 ? <h1>Condition 2</h1>
//          : null
//         }
//     </div>
//   )
// }

// export default App

// Props
// import React from 'react'
// import College from './College'
// function App() {
//   let collegeNames = ['IET' , 'JKK' , 'SRS' , 'SDF']
//   return (
//     <div>
//       <h1>Props in React JS</h1>
//       <College names = {collegeNames}/>
//     </div>
//   )
// }

// export default App

// Passing of data on button click
// import React from 'react'
// import { useState } from 'react'
// import Student from './Student'
// function App() {
//     const [student , setStudent] = useState("Singh")
//   return (
//     <div>
//         {
//             student && <Student name={student}/>
//         }
//         <button onClick={()=>setStudent("Harsh")}>Change student name</button>
//     </div>
//   )
// }

// export default App

// Default Props
// import React from 'react'
// import { useState } from 'react'
// import Person from './Person'
// function App() {
//   return (
//     <div>
//         <Person name = "Tony Stark"/>
//         <Person/>
//     </div>
//   )
// }

// export default App

// Pass JSX in Props
// import React from 'react'
// import Wrapper from './Wrapper'

// function App() {
//   return (
//     <div>
//         <Wrapper>
//             <h1 style={{color:"red"}}>Hello Everyone!</h1>
//         </Wrapper>
//     </div>
//   )
// }

// export default App

// Change style with Props
// import React from 'react'
// import Wrapper from './Wrapper'
// function App() {
//   return (
//     <div>
//         <Wrapper color="orange">
//         <h1>Hello Everyone!</h1>
//         </Wrapper>
//     </div>
//   )
// }

// export default App

// Get Input Field Value
// import React from "react";
// import { useState } from "react";
// function App() {
//   const [val, setVal] = useState("Harsh Singh");
//   return (
//     <div>
//       <h1>Get Input Field Value</h1>
//       <input
//         type="text"
//         value={val}
//         onChange={(event) => setVal(event.target.value)}
//         placeholder="Enter user name"
//       />
//       <h1>{val}</h1>
//       <button onClick={() => setVal("")}>Clear Value</button>
//     </div>
//   );
// }

// export default App;

// Controlled Component
// import React from "react";
// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   return (
//     <div>
//       <h1>Controlled Component</h1>
//       <form action="" method="get"></form>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter your name"
//       />
//       <input
//         type="text"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//         placeholder="Enter your password"
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//         placeholder="Enter your email"
//       />
//       <button>Submit</button>
//       <button
//         onClick={() => {
//           setName(""), setEmail(""), setPassword("");
//         }}
//       >
//         Clear
//       </button>
//       <h3>{name}</h3>
//       <h3>{password}</h3>
//       <h3>{email}</h3>
//     </div>
//   );
// }

// export default App;



// Handle Checkbox
// import React from 'react'
// import Checkboxes from './Checkboxes'

// function App() {
//   return (
//     <div>
//         <Checkboxes/>
//     </div>
//   )
// }

// export default App




// Handle Radio and DropDown
// import React from 'react'
// import { useState } from 'react'
// function App() {
//     const [gender , setGender] = useState("Male")
//     const [city , setCity] = useState("Delhi")
//   return (
//     <div>
//         <h4>Select Gender</h4>
//         <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' value={'male'} id='male' checked={gender=="male"} />
//         <label htmlFor="male">Male</label>
//         <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' value={'female'} id='female' checked={gender=="female"} />
//         <label htmlFor="female">Female</label>
//         <h2>Selected Gender : {gender}</h2>

//         <h4>Select City</h4>
//         <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Delhi"}>
//             <option value="Noida">Noida</option>
//             <option value="Gurgaon">Gurgaon</option>
//             <option value="Delhi">Delhi</option>
//         </select>
//         <h2>Selected City : {city}</h2>
//     </div>
//   )
// }

// export default App



// Loop in JSX with MAP
// import React from 'react'
// import User from './User'
// function App() {
//   return (
//     <div>
//         <table border="1">
//             <thead>
//                 <tr>
//                     <td>Name</td>
//                     <td>Id</td>
//                     <td>Email</td>
//                     <td>Age</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     userData.map((user)=> {
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.id}</td>
//                             <td>{user.age}</td>
//                         </tr>
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default App 



// Reuse Component
// import React from 'react'
// import User from './User'
// function App() {
//     const userData = [
//         {
//             name : "Robert" , email : "IronMan@1123" , age : "50" , id : 1
//         } , 
//         {
//             name : "Robert" , email : "IronMan@1123" , age : "50" , id : 2
//         } , 
//         {
//             name : "Robert" , email : "IronMan@1123" , age : "50" , id : 3
//         } 
//     ]
//   return (
//     <div>
//         <h1>Reuse component</h1>
//         {
//             userData.map((user)=> (
//                 <div key={user.id}> 
//                     <User userData = {user} />
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default App



// Digital Clock
// import React , {useState} from 'react'
// import Clock from './Clock'

// function App() {
//     const [color , setColor] = useState("green")
//   return (
//     <div>
//         <h1>Digital Clock</h1>
//         <select onChange={(event)=>setColor(event.target.value)}>
//             <option value={"red"}>Red</option>
//             <option value={"blue"}>Blue</option>
//             <option value={"green"}>Green</option>
//             <option value={"orange"}>Orange</option>
//         </select>
//         <Clock color={color}/>
//     </div>
//   )
// }

// export default App



// useEffect Hooks
// import React , {useState , useEffect} from 'react'

// function App() {
//     const [counter , setCounter] = useState(0)
//     const [data , setData] = useState(0)
//     useEffect(()=> {
//         counterFunction() 
//     } , [counter])
//     function counterFunction() {
//         console.log(counter)
//     }
//     function callOnce() {
//         console.log("callonce function called")
//     }
//    return (
//     <div>
//         <h1>useEffect Hooks</h1>
//         <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
//         <button onClick={()=>setData(data+1)}>Data : {data}</button>
//     </div>
//   )
// }

// export default App


// Handle Props side effect with useEffect -
// import React from 'react'
// import { useState } from 'react'
// import Counter2 from './Counter2'
// function App() {
//     const [count , setCount] = useState(0)
//     const [data , setData] = useState(0)
//   return (
//     <div>
//         <div>
//             <Counter2 Counter2 = {count} data={data}/>
//            <button onClick={()=>setCount(count+1)}>Counter : {count}</button>
//            <button onClick={()=>setData(data+1)}>Data : {data}</button>
//         </div>
//     </div>
//   )
// }

// export default App




// useRef Hook
// import React from 'react'
// import { useRef } from 'react'
// function App() {
//   const inputRef = useRef(null) ;
//   const h1Ref = useRef(null) ;

//   const inputHandler = () => {
//     console.log(inputRef) ;
//     inputRef.current.focus() ;
//     inputRef.current.style.color = "red" ;
//     inputRef.current.placeholder = "Enter password" ;
//     inputRef.current.value = "123" ;
//   }
//   const h1Handler = () => {
//     h1Ref.current.style.color = "blue"
//   }
//   const toggleHandler = () => {
//     if(inputRef.current.style.display != 'none') {
//       inputRef.current.style.display = 'none'
//     }
//     else {
//       inputRef.current.style.display = 'inline'
//     }
//   }
//   return (
//     <div>
//       <h1>useRef Hook</h1>
//       <button onClick={toggleHandler}>Toggle</button>
//       <input ref={inputRef} type="text" placeholder='Enter Username' />
//       <button onClick={inputHandler}>Focus on input field</button>
//       <h1 ref={h1Ref}>Code Step by Step</h1>
//       <button onClick={h1Handler}>Handler</button>
//     </div>
//   )
// }

// export default App



// Uncontrolled Component
// import React , {useRef} from 'react'

// function App() {
//   const userRef = useRef() 
//   const passwordRef = useRef()
//   const handleForm = (event) => {
//     const user = document.querySelector("#user").value ;
//     const password = document.querySelector("#password").value ;
//     console.log(user) ;
//   }
//   const handleformRef = (event) => {
//     event.preventDefault() ;
//     const user = userRef.current.value ;
//     const password = passwordRef.current.value ;
//     console.log(user , password)
//   }
//   return (
//     <div>
//       {/* <h1>Uncontrolled Component</h1>
//       <form action="" method='post' onSubmit={handleForm}>
//         <input type="text" id='user' placeholder='Enter user name' /> <br /><br />
//         <input type="password" id='password' placeholder='Enter password' /> <br /><br />
//         <button>Submit</button>
//       </form>  */}

//        <h1>Uncontrolled Component with useRef </h1>
//        <form action="" method='post' onSubmit={handleformRef}>
//         <input type="text" ref={userRef} id='userRef' placeholder='Enter user name' />
//         <br /><br />
//         <input type="password" ref={passwordRef} id='passwordRef' placeholder='Enter password'  />
//         <br /><br />
//         <button>Submit with Ref</button> 
//       </form>
//     </div> 

//   )
// }

// export default App



// Pass function in Component as Props 
// import React from 'react'
// import User2 from './User2'
// function App() {
//   const displayName = (name) => {
//     alert(name)
//   }
//   const getUser = () => {
//     alert("get user function called")
//   }
//   return (
//     <div>
//       <User2 displayName={displayName} name="Harsh" getUser={getUser}/>
//       <User2 displayName={displayName} name="Peter" getUser={getUser}/>
//       <User2 displayName={displayName} name="Bruce" getUser={getUser}/>
//     </div>
//   )
// }

// export default App



// useFormStatus Hook 
// import React from 'react'
// import {useFormStatus} from 'react-dom'
// function App() {
//   const handleSubmit = async() => {
//     await new Promise(res => setTimeout(res,2000))
//     console.log("Submit")
//   }
//   function Customerform() {
//     const {pending} = useFormStatus() 
//     return (
//       <div>
//         <input type="text" placeholder='Enter Name' /> <br /><br />
//         <input type="password" placeholder='Enter password' /> <br /><br />
//         <button disabled={pending}> {pending?'Submitting...':'Submit'}</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//         <form action="handleSubmit">
//           <Customerform/>
//         </form>
//     </div>
//   )
// }

// export default App




// useId Hook
// import React , {useId} from 'react'

// function App() {
//   const name = useId()
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default App




// Derived State
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [users , setUsers] = useState([])
//   const [user , setUser] = useState('')
//   const handleAddUsers = () => {
//     setUsers([...users , user])
//   }
//   const total = users.length 
//   const last = users[users.length-1] 
//   const unique = [...new Set(users)].length
//   return (
//     <div>
//       <h2>Total users : {total}</h2>
//       <h2>Last user : {last}</h2>
//       <h2>Unique Total user : {unique}</h2>
//       <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='Add new user' />
//       <button onClick={handleAddUsers}>Add User</button>
//       {
//         users.map((item,index)=> (
//           <h4 key={index}>{item}</h4>
//         ))
//       }
//     </div>
//   )
// }

// export default App




// Lifting state up 
// import React from 'react'
// import AddUser from './AddUser'
// import DisplayUser from './DisplayUser'
// import { useState } from 'react'
// function App() {
//   const [user , setUser] = useState('')
//   return (
//     <div>
//         <AddUser setUser={setUser}/>
//         <DisplayUser user={user}/>
//     </div>
//   )
// }

// export default App




// Updating Objects
// import React , {useState} from 'react'

// function App() {
//   const [data , setData] = useState( { 
//     name : "Harsh" , address : {city:"Noida" , country : "India"}
//   })
//   const handleName = (val) => {
//     data.name = val 
//     setData({...data})
//   }
//   const handleCity = (city) => {
//     data.address.city = city 
//     setData({...data})
//   }
//   return (
//     <div>
//         <input type="text" onChange={(event)=>handleName(event.target.value)} placeholder='Update Name' />
//         <input type="text" onChange={(event)=>handleCity(event.target.value)} placeholder='Enter City' />
//         <h2>Name : {data.name}</h2>
//         <h2>City : {data.address.city}</h2>
//         <h2>Country : {data.address.country}</h2>
//     </div>
//   )
// }

// export default App




// Custom Hooks
// import React from 'react'
// import useToggle from './useToggle'
// function App() {
//   const [value , toggleValue] = useToggle(true)
//   const [data , setData] = useToggle(true)
//   return (
//     <div>
//       <button onClick={toggleValue}>Toggle Heading</button>
//       <button onClick={()=>toggleValue(false)}>Hide Heading</button>
//       <button onClick={()=>toggleValue(true)}>Show Heading</button>
//       {
//         value ? <h1>Custom Hooks</h1> : null 
//       }
//       <button onClick={setData}>Toggle Heading</button>
//       <button onClick={()=>setData(false)}>Hide Heading</button>
//       <button onClick={()=>setData(true)}>Show Heading</button>
//       {
//         data ? <h1>Second Heading</h1> : null 
//       }
//     </div>
//   )
// }

// export default App




// React Router 
// import React from 'react'
// import {BrowserRouter , Routes , Route , Link} from "react-router"
// function App() {
//   return (
//     <div>
//         <BrowserRouter>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Routes>
//             <Route path='/' element={<h1>Home</h1>}></Route>
//             <Route path='/about' element={<h1>About</h1>}></Route>
//             <Route path='/contact' element={<h1>Contact</h1>}></Route>
//           </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default App




// Header with React Router
// import React from 'react'
// import NavBar from './NavBar'
// function App() {
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   )
// }

// export default App




// 404 Page 
// import React from 'react'
// import {BrowserRouter, Route , Routes} from "react-router-dom" 
// import PageNotFound from './PageNotFound'
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>

//       <Route path='/*' element={<PageNotFound/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




// Fetch data from API with GET - 
// import React from 'react'
// import { useEffect , useState } from 'react'
// function App() {
//   const [usersData , setUsersData] = useState([]) 
//   useEffect(()=> {
//     getUsersData() ;
//   },[])
//   async function getUsersData() {
//       const url = "https://dummyjson.com/users"
//       let response =  await fetch(url) 
//       response = await response.json() ;
//       setUsersData(response.users)
//   }
//   console.log(usersData)
//   return (
//     <div>
//         <ul>
//           <li>First Name</li>
//           <li>Last Name</li>
//           <li>Age</li>
//         </ul>
      
//       {
//         usersData && usersData.map((user)=> (
//           <ul>
//             <li>{user.firstName}</li>
//             <li>{user.lastName}</li>
//             <li>{user.age}</li>
//           </ul>
//         ))
//       }
//     </div>
//   )
// }

// export default App




// 