import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailCharacter from './components/DetailCharacter'
import DetailEpisode from './components/DetailEpisode'
import DetailLocation from './components/DetailLocation'
import NotFound from './pages/NotFound'

import './App.css';

const App = () => {
  return(
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/characters' component={Characters} />
          <Route exact path='/episodes' component={Episodes} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/character/:id' component={DetailCharacter}/>
          <Route exact path='/episode/:id' component={DetailEpisode}/>
          <Route exact path='/location/:id' component={DetailLocation}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
