import React from 'react';

import './styles-default.css'

import Header from './components/headers';
// import Main from './pages/main';
// import Add from './pages/add';
import Details from './pages/details';
import Routes from './routes';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes/>
      
    </div>
  );
}

export default App;
