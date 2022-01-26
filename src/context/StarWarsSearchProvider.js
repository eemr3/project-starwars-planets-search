import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataApi from '../data/data';
import StarWarsSearchContext from './StarWarsSearchContext';

function StarWarsSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [fiteredDataColumn, setFilteredColumn] = useState([]);
  const [getValueColumn, setGetValueColumn] = useState('');

  const filterPlanetName = filterByName.name !== ''
    ? data.filter((filter) => filter.name.includes(filterByName.name)) : data;

  useEffect(() => {
    const handleFilterLength = () => {
      switch (getValueColumn) {
      case 'maior que': {
        const resultFiltered = data.filter((planet) => filterByNumericValues
          .filter((filter) => Number(planet[filter.column]) > Number(filter.value))
          .length);
        return setFilteredColumn(resultFiltered);
      }
      case 'menor que': {
        const resultPopulationMenor = data.filter((planet) => filterByNumericValues
          .filter((filter) => Number(planet[filter.column]) < Number(filter.value))
          .length);
        return setFilteredColumn(resultPopulationMenor);
      }
      case 'igual a': {
        const resultPopulationIgual = data.filter((planet) => filterByNumericValues
          .filter((filter) => Number(planet[filter.column]) === Number(filter.value))
          .length);
        return setFilteredColumn(resultPopulationIgual);
      }
      default:
        return data;
      }
    };
    handleFilterLength();
  }, [data, filterByNumericValues, getValueColumn]);

  useEffect(() => {
    const requestApi = async () => {
      const response = await dataApi();
      setData(response.results);
    };
    requestApi();
  }, []);

  const passDataProvide = {
    setFilterByName,
    filterByName,
    filterPlanetName,
    filterByNumericValues,
    setFilterByNumericValues,
    setGetValueColumn,
    fiteredDataColumn,
  };

  return (
    <StarWarsSearchContext.Provider
      value={ passDataProvide }
    >
      {children}
    </StarWarsSearchContext.Provider>
  );
}

StarWarsSearchProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default StarWarsSearchProvider;
