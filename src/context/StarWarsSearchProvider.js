import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataApi from '../data/data';
import StarWarsSearchContext from './StarWarsSearchContext';

function StarWarsSearchProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const response = await dataApi();
      setData(response.results);
    };
    requestApi();
  }, []);

  return (
    <StarWarsSearchContext.Provider value={ data }>
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
