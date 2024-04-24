import '../App.css';
import img from "../Images/header2.jpg";
import React from "react";

const Header = () => {

  return (
    <div>
      <div className='header-main-box'>
        <img src={img} className='img' />
        <div className='header-text'>
          <span style={{ "color": '#3b3bac' }}>NOVENT</span>
          <span style={{ "color": '#18a5ff' }}>IQ</span>
        </div>
      </div>
      <div className='header-para' >
        Global Expertise, local outcomes
      </div>
    </div>
  )
}
export default React.memo(Header);