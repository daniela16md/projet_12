import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import './Contact.css'

function Contact() {
  return (
    <div>
      <Link to='/' ><div className='arrowl' ><FaAngleLeft /></div></Link>
    </div>
  )
}
export default Contact