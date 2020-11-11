import React from 'react';

import './styles-default.css'

import Header from './components/headers';
import Main from './pages/main';
import Add from './pages/add';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      
    </div>
  );
}

export default App;
