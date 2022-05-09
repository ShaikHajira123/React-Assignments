import { useState } from 'react'
import logo from './logo.svg'

import {Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {ProductDetail} from './components/ProductDetail'
import {Kitchen} from './components/Kitchen'
import {Mobile} from './components/Mobiles'
import {Laptop} from './components/Laptop'
import {KitchenDetail} from './components/kitchenDetail'
import {LaptopDetail} from './components/LaptopDetail'
import {MobileDetail} from './components/mobileDetail'

function App() {


  return (
    <div className="App">
      <Navbar />
         <Routes>
         <Route path="" element={<Home />}></Route> 
        <Route path='/home/:id' element={<ProductDetail />}></Route>
         <Route path='/kitchenDetail/:id' element={<KitchenDetail />}></Route>
        <Route path='/LaptopDetail/:id' element={<LaptopDetail />}></Route>
        <Route path='/MobileDetail/:id' element={<MobileDetail />}></Route> 
        <Route path="/kitchen" element={<Kitchen />}></Route>
        <Route path="/laptop" element={<Laptop/>}></Route>
        <Route path="/mobiles" element={<Mobile />}></Route> 

      </Routes>
     <Footer></Footer>
        
   
    </div>
  )
}

export default App
