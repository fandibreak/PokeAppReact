import React, { Component } from "react";

const Cardv2 = (props) =>{

    return <div>
          <h4>⭐⭐{props.pokemons.name}⭐⭐</h4>
          <img className="imgv1" src={props.pokemons.img}/><br /><br />
          {/* // src={pokemons.sprites.front_default}  */}
  </div>;
  }


export default Cardv2;