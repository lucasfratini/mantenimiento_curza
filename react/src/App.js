import logo from './logo192.png';
import './App.css';

//importamos los componentes
import ShowUser from './views/usuario/ShowUser';



//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <ShowUser />} />
            

            
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
