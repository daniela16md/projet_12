import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import './Projets.css'

function Projects() {
  return (
    <div>
      <Link to='/' ><div className='arrowleft' ><FaAngleLeft /></div></Link>
      <h1 className='h1projets'>Mes Projets</h1>
    </div>
  )
}

export default Projects