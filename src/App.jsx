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




import React from 'react'
import {useFormStatus} from 'react-dom'
function App() {
  const handleSubmit = async() => {
    await new Promise(res => setTimeout(res,2000))
    console.log("Submit")
  }
  function Customerform() {
    const {pending} = useFormStatus() 
    return (
      <div>
        <input type="text" placeholder='Enter Name' /> <br /><br />
        <input type="password" placeholder='Enter password' /> <br /><br />
        <button disabled={pending}> {pending?'Submitting...':'Submit'}</button>
      </div>
    )
  }
  return (
    <div>
        <form action="handleSubmit">
          <Customerform/>
        </form>
    </div>
  )
}

export default App