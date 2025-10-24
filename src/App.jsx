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
import React from 'react'
import College from './College'
function App() {
  let collegeNames = ['IET' , 'JKK' , 'SRS' , 'SDF'] 
  return (
    <div>
      <h1>Props in React JS</h1>
      <College names = {collegeNames}/>
    </div>
  )
}

export default App