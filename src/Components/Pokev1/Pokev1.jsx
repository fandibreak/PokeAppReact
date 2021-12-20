import React, { useEffect, useState } from "react";
import './Pokev1.css'
import axios from "axios"
import Card from "./Card";


const Pokev1 = () => {

  const [pokemons, setPokemons] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {

    const getpokemon = async (a) => {

      try {

        const getpokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = getpokemon.data

        console.log(pokemons.name)

        setPokemons({
          name: data.name,
          img: data.sprites.front_default
        })

      } catch (e)
      {
        setPokemons([])
      alert('Pokemon not found in BBDD')
      }
    }
    getpokemon();

  }, 
  [search]//activador para la busqueda lanza el Update y ejecuta el useEffect
  )


  const hanledSubmit = (e) =>{
  e.preventDefault()
  setSearch(e.target.name.value)
  e.target.name.value=''
  }

  console.log(setPokemons.name)
  return <div><h4>Bienvenido al Buscador de Pokemons</h4>
    <p> </p>
    <div className="superform">
      <div className="divform" >
        <form onSubmit={hanledSubmit}>
          <label htmlFor='name'><h4>Busca aqui tu Pokemon</h4></label><br /><br />
          <input type="text" name="name" id="name" required /><br /><br />
          <button >Buscar</button>
          { <Card pokemons={pokemons} />} 
        </form>
      </div>
    </div>
  </div>;


}



export default Pokev1;
