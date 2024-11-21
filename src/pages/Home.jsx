import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Homepage from '../Components/Homepage/Homepage'
import Homepage2 from '../Components/Homepage2/Homepage2'
import Aboutus from '../Components/About/Aboutus'
import Specialdish from '../Components/Specialdish/Specialdish'
import Delicious_menu from '../Components/Delicious_menu/Delicious_menu'
import Reviewpage from '../Components/Reviewpage/Reviewpage'
import Contact from '../Components/Contact/Contact'
import Ourteam from '../Components/Ourteam/Ourteam'
import Footerpage from '../Components/Footerpage/Footerpage'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Homepage2/>
      <Aboutus/>
      <Specialdish/>
      <Delicious_menu/>
      <Reviewpage/>
      {/* <Contact/> */}
      <Ourteam/>
      <Footerpage/>
    </div>
  )
}

export default Home