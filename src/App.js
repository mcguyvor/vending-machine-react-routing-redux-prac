import React,{Component} from 'react';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import Soda from './component/Soda';
import Chip from './component/Chip';
import Sadine from './component/Sadine';

import './App.css';
import { NOTFOUND } from 'dns';
class App extends Component {
  renderRouter(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/chip' component={Chip}/>
        <Route exact path='/soda' component={Soda}/>
        <Route exact path='/sadine' component={Sadine}/>

        <Route component={NOTFOUND}/>
      </Switch>
    )
  }
  render(){
  return (
    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
  );
  }
}

export default App;
