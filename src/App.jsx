import { useState } from 'react'
import './App.css';
import HomePage from './component/HomePage';
import { Routes,Route } from 'react-router-dom';
import Web2 from './Satyamevimport/Web2';
import Web1 from './SatyamevInternational/Web1';
import AboutUs from './Satyamevimport/Abourus2';
import Contactbutton from './Satyamevimport/Contactbutton';
import Admission from './Satyamevimport/Admission';
import Service from './Satyamevimport/Service';
import Course from './Satyamevimport/Course';
import Gallery2 from './Satyamevimport/Gallery2';


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/Web1' element={<Web1/>}/>
<Route path='/Web2' element={<Web2/>}/>
<Route path='/Home' element={<Web2/>}/>
<Route path='/Aboutus' element={<AboutUs/>}/>
<Route path='/Contact' element={<Contactbutton/>}/>
<Route path='/Admission' element={<Admission/>}/>
<Route path='/Service' element={<Service/>}/>
<Route path='/Course' element={<Course/>}/>
<Route path = '/Gallery' element = {<Gallery2/>}/>
</Routes>

   
   
  </>
  )
}

export default App
