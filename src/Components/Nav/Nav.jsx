import React, { Component } from "react";

import { Link } from 'react-router-dom'

const  Nav = () => {
    return  <div>
    <ul>
      <li><Link to="/Pokev1">Pokev1</Link></li>
      <li><Link to="/Pokev2">Pokev2</Link></li>
      <li><Link to="/Pokev3">Pokev3</Link></li>
    </ul>
  </div>;
  }


export default Nav;
