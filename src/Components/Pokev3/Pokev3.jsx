import React, { useEffect, useState } from "react";
import './Pokev3.css'
import axios from "axios"
import Cardv3 from "./Cardv3";
import { useDebounce } from 'use-debounce';

  

const  Pokev3 = () => {


  
  const [pokemons, setPokemons] = useState([]); //Objeto Pokemon

  const [search, setSearch] = useState(''); //input

  const [debouncedText] = useDebounce(search, 2000);

  useEffect(() => {

    const getpokemon = async (a) => {

      try {
        
        const getpokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`)
        const data = getpokemon.data
 
        setPokemons([...pokemons,{
          name: data.name,
          img: data.sprites.front_default
        }]) 
   

      } catch (e)
      {
        setPokemons([])
      //alert('Pokemon not found in BBDD')
      }
    }
    getpokemon();

  }, [debouncedText])


 
  console.log(pokemons)

  return <div><h4>Bienvenido al Buscador de Pokemons</h4>
    <p> </p>
    <div className="superform">
      <div className="divform" >
        <form>
          <label htmlFor='name'><h4>Busca aqui tu Pokemon</h4></label><br /><br />
          <input type="text" name="name" id="name" 
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          required /><br /><br />
         
          { pokemons.map((pokemon,i) => <Cardv3 pokemons={pokemon} key={i} />)} 
          {/* { <Cardv2 pokemons={pokemons} />}  */}
        </form>
      </div>
    </div>
  </div>;


}

export default Pokev3;


/* Para el De Bounce/Buscador cuando haga "out" en la escritura
1--Instalamos npm i use-debounce --save
2--

*/ 
