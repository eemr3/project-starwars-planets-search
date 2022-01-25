import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import StarWarsSearchProvider from './context/StarWarsSearchProvider';

function App() {
  return (
    <StarWarsSearchProvider>
      <Table />
    </StarWarsSearchProvider>
  );
}

export default App;
