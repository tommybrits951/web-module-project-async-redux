import React from 'react';
import './App.css';
import Doglist from "./components/Doglist"

import Header from "./components/Header"

import FavList from './components/FavList';
function App() {



  return (
    <div className="App">
      <Header/>
      
        <Doglist/>
      <FavList />
    </div>
  );
}

export default App;