import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, useCount] = useState();

  return  (
    <div className="">
      <Header />
    </div>
  );
}

export default App
