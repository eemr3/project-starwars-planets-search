import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataApi, { optionsArray } from '../data/data';
import StarWarsSearchContext from './StarWarsSearchContext';

function StarWarsSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [fiteredDataColumn, setFilteredColumn] = useState([]);
  const [orderDataColumn, setOrderDataColumn] = useState([]);
  const [countIndex, setCountIndex] = useState(0);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const [optionsColunm, setOptionsColunm] = useState(optionsArray);

  const filterPlanetName = filterByName.name !== ''
    ? data.filter((filter) => filter.name.includes(filterByName.name)) : data;

  useEffect(() => {
    const handleFilterLength = () => {
      const { column, comparison, value } = filterByNumericValues.length > 0
        && filterByNumericValues[countIndex - 1];

      switch (comparison) {
      case 'maior que':
        return setFilteredColumn(data
          .filter((filter) => Number(filter[column]) > Number(value)));
      case 'menor que':
        return setFilteredColumn(data
          .filter((filter) => Number(filter[column]) < Number(value)));
      case 'igual a':
        return setFilteredColumn(data
          .filter((filter) => Number(filter[column]) === Number(value)));
      default:
        return setFilteredColumn([]);
      }
    };
    handleFilterLength();
  }, [countIndex, data, filterByNumericValues]);

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
    fiteredDataColumn,
    optionsColunm,
    setOptionsColunm,
    setCountIndex,
    countIndex,
    order,
    setOrder,
    orderDataColumn,
    setOrderDataColumn,
    data,
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

/*
switch (getValueColumn.value) {
  case 'maior que': {
    const resultFiltered = data.filter((planet) => filterByNumericValues
      .filter((filter) => Number(planet[getValueColumn.column])
      > Number(filter.value))
      .length);
    return setFilteredColumn(resultFiltered);
  }
  case 'menor que': {
    const resultPopulationMenor = data.filter((planet) => filterByNumericValues
      .filter((filter) => Number(planet[filter.column] < Number(filter.value)))
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
    return setFilteredColumn([]);
  } */
