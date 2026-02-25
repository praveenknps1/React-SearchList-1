import { useState } from 'react'

import './App.css'
import SearchFilter from './SearchList'
// import products from './Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchFilter />
      {/* <products/> */}
    </>
  )
}

export default App
