// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, useCount] = useState();

//   return  (
//     <div className="">
//       <Header />
//     </div>
//   );
// }

// export default App

import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className=''>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world
      </h1> */}
      <Header />
    </div>
  )
}

export default App
