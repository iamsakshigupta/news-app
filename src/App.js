import './App.css';
import NavBar from './components/NavBar';
import NewsCard from './components/NewsCard';
import Welcome from './components/Welcome';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='dark:bg-zinc-900'>
        <NavBar></NavBar>
        <Welcome></Welcome>
        <NewsCard/> 
      </div>
    )
  }
}

