import React from 'react';
import StarWarsSearchProvider from './context/StarWarsSearchProvider';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <StarWarsSearchProvider>
      <Header />
      <Table />
    </StarWarsSearchProvider>
  );
}

export default App;
