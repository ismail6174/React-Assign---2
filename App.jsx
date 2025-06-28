import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Academics from "./Components/Academics/Academics.jsx"
import Campus from "./Components/Campus/Campus.jsx"
import Popular from './Components/Popular/Popular.jsx'
import Upcoming from './Components/Upcoming/Upcoming.jsx'

const App = () => {
  return (
   <>
   
   <Navbar />
   <br /><br /><br />
   <Academics />
    <br /><br /><br />
   <Campus />
   <br />
   <Popular />
  
   <Upcoming/>
   </>
  )
}

export default App

