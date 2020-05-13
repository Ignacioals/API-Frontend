import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Unidades from './pages/unidadesCorrespondientes';
import Servicio from './components/Services';
 // importo todo lo necesario para que la app funcione. Si no agrego una pagina o algo, esa pagina no se va a cargar nunca.
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      //<Route exact path="/products" component={Products}/> ELIMINAR
      //<Route exact path="/products/:slug" component={SingleProduct}/> ELIMINAR
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/unidadesCorrespondientes" component={Unidades}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/Services" component={Servicio}/>
      <Route component={Error}/>
    </Switch>

    </>
  );
}

export default App;
