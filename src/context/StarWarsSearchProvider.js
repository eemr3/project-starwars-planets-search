import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataApi from '../data/data';
import StarWarsSearchContext from './StarWarsSearchContext';

function StarWarsSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const requestApi = async () => {
      const response = await dataApi();
      setData(response.results);
    };
    requestApi();
  }, []);

  const filterPlanetName = filterByName.name !== ''
    ? data.filter((filter) => filter.name.includes(filterByName.name)) : data;

  return (
    <StarWarsSearchContext.Provider
      value={ { setFilterByName, filterByName, filterPlanetName } }
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
