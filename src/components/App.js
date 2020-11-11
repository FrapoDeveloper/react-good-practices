import React from 'react'
import '../styles/styles.scss'
import '../styles/style.css'
import '../styles/notfound.css'
import Characters from './Pages/characters.jsx'
import Characterdes from './Pages/characterdes.jsx'
import Header from '../components/Organisms/header.jsx'
import Home from '../components/Pages/home.jsx'
import Formulario from './Pages/formulario.jsx'
import Users from './Pages/users.jsx'
import Pagenotfound from './Pages/pagenotfound'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const App =  () => 
  (
    <Router>
      <Header/>
      <Switch>
             
      <Route path="/" exact component={Home} />
      <Route path="/personajes" exact component={Characters} /> 
      <Route path="/personajes/:id" exact component={Characterdes} /> 
      <Route path="/formulario" exact component={() => <Formulario name="Pagina de contacto" />} />
      <Route path="/users" exact component={Users} /> 

      <Route component={() =>(
        <div className=" container-animation not ed-grid grid-container s-mt-4 m-grid-2 s-grid-1 xl-grid-4 lg-grid-3 center ">
           
           <Pagenotfound />
          
        </div>
      )} />
      </Switch>
    </ Router >
  )
export default App;
