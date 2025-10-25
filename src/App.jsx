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