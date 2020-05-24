import React, { Component } from 'react';
import classes from './App.module.css';
import Blog from './Container/Blog';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{


  render(){

    return(
      <BrowserRouter>
      <div className = {classes.App}>
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
