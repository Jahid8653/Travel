// import React, { Component } from 'react'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
// import Packages from '../Components/Packages/Packages'
// import Services from '../Components/Services/ContactUs'
import TopDestination from '../Components/Top Destination/Top Destination'
import Header from '../Components/Layout/Header/Header'
import Footer from '../Components/Layout/Footer/Footer'
import PNF from '../Components/PageNotFound/PNF'
import Category from '../Components/Packages/Category/Category'
import SubCategory from '../Components/Packages/Sub Category/Sub_Category'
import Details from '../Components/Packages/Details/Details'
// import Users from '../Components/Users'
import ContactUs from '../Components/Contact/ContactUs'
import BookingPage from '../Components/Booking Page/BookingPage'
import ProtectedRoute from './ProtectedRoute'
import Login from '../Components/Login/Login'
import Reg from '../Components/Registration/Reg'
import Check from '../Components/CheckOut/Check'
import Res from '../Components/Response/Res'
import ModalAuth from '../Components/Modal/Modal'
import Logout from '../Components/Logout/Logout'



export default function RootRouting() {
    return (
        <Router>
        <Header/>
         <Routes>
          <Route path="" element={<Home/>}/>
          <Route element={<ProtectedRoute />}>
          <Route path="booking-page" element={<BookingPage/>}/>
          </Route>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          {/* <Route path="packages" element={<Packages/>}/> */}
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="topdestination" element={<TopDestination/>}/>
          <Route path="*" element={<PNF/>}/>
          <Route path="packages" element={<Category/>}/>
          <Route path="sub_pack/:name" element={<SubCategory/>}/>
          <Route path="details/:name/:pl" element={<Details/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Reg/>}/>
          <Route path="checkout-page" element={<Check/>}/>
          <Route path="response-page" element={<Res/>}/>
          <Route path="modal" element={<ModalAuth/>}/>
          <Route path="logout" element={<Logout/>}/>
         </Routes>
         <Footer/>
        </Router>
        
    )
  }