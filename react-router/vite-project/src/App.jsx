import './App.css'
import {Home} from './components/Home'
import {About} from './components/About'
import {Routes , Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Users} from './components/Users'
import { UserDetails } from './components/UserDetails'
import {Login} from './components/Login'
import {PrivateComponent} from './components/PrivateComponent'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/users' element = {<Users />}></Route>
        <Route path='/users/:id' element={
        <PrivateComponent>
          <UserDetails />
        </PrivateComponent>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      
       
    </div>
  )
}

export default App
