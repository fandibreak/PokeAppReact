import './App.css';
import Head from './Components/Head';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Main />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
