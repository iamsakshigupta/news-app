import './App.css';
import NavBar from './components/NavBar';
import NewsCard from './components/NewsCard';
import Welcome from './components/Welcome';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Welcome></Welcome>
        <NewsCard/> 
      </div>
    )
  }
}

