import RouteComponent from './components/routes/RouteComponent'
import NavBar from './components/navbar/NavBar.jsx'
// import NavBar2 from './components/navbar/NavBar2.jsx'
import './App.css'
// import { useState } from 'react'
// import { Routes,Route } from 'react-router-dom'



function App(){
  // const [user, setUser] = useState(null)
  // const [token, setToken] = useState(null)
  return(
    <div>
  <NavBar/>
  <RouteComponent/>
{/* <NavBar2 user={user} setUser={setUser} setToken={setToken}/>
 <RouteComponent/>
<Routes>
<Route path="/" element={<Home user={user} token={token}/>} />
        <Route path='/signup' element={<Signup setUser={setUser} setToken={setToken} />} /> */}
        {/* <Route path='/login' element={<Login setUser={setUser} setToken={setToken}/>} />
</Routes>
   */}
  </div>
  )
}

export default App