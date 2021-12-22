# 1--Inicializacion de App 
Creo el proyeco con  :  npx create-react-app pokeapp

Creo la carpeta y el proyecto con los siguientes comandos 

npm install --save-dev create-react-component-folder 

Creo los componentes que se asociaran entre si en mi App con : 

npx crcf Head Nav Main Home Form ListNews Card Footer -j 

## 2--En Nav Genero los Link ( de la libreria React-router_dom)=>hay que instalarlo en SRC, <Like to=>  sustituye el href comun y es de la libreria React-router_dom


import { Link } from 'react-router-dom'

     <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">Form</Link></li>
        <li><Link to="/home">List</Link></li>
     </ul>

## 3- Importo Nav en Header y lo aplico en la estructura de header 

import Nav from '../Nav'

class Header extends Component {
  render() {
    return
    <header>
      <Nav />
    </header>;
  }
}
## 4- Voy a app.js e importo los componentes Header(ya contiene Nav)+Main+Footer

import Header from './components/Header';
import Main from './components/Header';
import Footer from './components/Footer';

## 5- Import en apps.js import { BrowserRouter} from 'react-router-dom';


## 6- Aplico la estructura de los componentes cargados en Apps

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
    </div>
  );
}



## 7--Me voy a Main.jsx y hago routeo de las rutas con Path="/"

8.1--Importo lo primero para poder routear : 
import { Route, Routes } from "react-router-dom";

Main.jsx con <Routes> me llevara a las diferenres roytas segun la barra de navegacion aplicada 

      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/form" element={Form}></Route>
        <Route path="/list" element={List}></Route>
      </Routes>

## 8-- Aplico la estructura de los componentes cargados en app.js
(
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
)


Aqui el BrowserRouter tendra Header que a su vez tiene Nav y que a su vez tiene Main con el enrutado 

## Funcionalidad de  userEfects y pintado de cartas 


## Pokev1.js 

Aqui en tenemos la funcion pokev1  () => { }

En esta parte lo primero que hacemos es definir por useEstate : 

const [pokemons, setPokemons] = useState([]);

pokemons = a la variable/objeto con destructuring con el estado inicial y setPokemons actualizara el estado de esta varible/objeto en el momento que decidamos, en este caso con la funcion de async.

const [search, setSearch] = useState('');

search = a la variable/objeto con destructuring con el estado inicial y setSearch actualizara search en el momento de el click de boton buscar y se lo pasara como parametro a la llamada asincrona de : getpokemon

const getpokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)

En el formulario tenemos  <form onSubmit={hanledSubmit}> que sera el escuchador cada vez que hagamos un submit se lanzara : 

const hanledSubmit = (e) =>{
  e.preventDefault()
  setSearch(e.target.name.value)
  e.target.name.value=''
  }
  
En este punto cada vez que exista un cambio <userEffect> volvera a renderizar la pagina y todos sus componenetes/funciones.

<setSearch(e.target.name.value)> actualizara el estado de <search> y la llamada de getpokemon tendra ese valor actualizado dado por  (e.target.name.value) *viene de el form.

## Pokev1.js /Card 

Una vez invocado la ejecucion del formulario con la funcion {hanledSubmit}, tendremos el objeto/variable {pokemons} actualzado por setPokemons con su nuevo estado que por ejemplo sera : 

pokemons = { name: data.name,
              img: data.sprites.front_default} //  Llamada asyncrona a la Api : getpokemon ()

  pokemons = { name: 'ditto',
               img: "http://image.ditto.jpg"} //Estado actual de pokemons una vez se hace la llamada a la Api.

Cada vez que se realiza un cambio/actualizacion la funcion useEffect, devolvera : 

return <div><h4>Bienvenido al Buscador de Pokemons</h4>
    <p> </p>
    <div className="superform">
      <div className="divform" >
        <form onSubmit={hanledSubmit}>
          <label htmlFor='name'><h4>Busca aqui tu Pokemon</h4></label><br /><br />
          <input type="text" name="name" id="name" required /><br /><br />
          <button >Buscar</button><br />
          <div className="cardpok">
          {<Card pokemons={pokemons} />} 
          </div>
        </form>
      </div>
    </div>
  </div>;


}