import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';

import './Table.css';

function TableB() {
  const { filterPlanetName,
    fiteredDataColumn, orderDataColumn } = useContext(StarWarsSearchContext);
  const [getDataForRender, setGetDataForRender] = useState([]);

  useEffect(() => {
    const setRenderData = () => {
      if (fiteredDataColumn.length > 0) {
        return fiteredDataColumn;
      }
      if (orderDataColumn.length > 0) {
        return orderDataColumn;
      }
      return filterPlanetName.sort((columnA, columnB) => (
        +(columnA.name > columnB.name) || +(columnA.name > columnB.name) - 1));
    };

    setGetDataForRender(setRenderData());
  }, [filterPlanetName, fiteredDataColumn, orderDataColumn]);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {filterPlanetName.length > 0
            ? Object.keys(filterPlanetName[0])
              .filter((planet) => planet !== 'residents').map((planet, index) => (
                <th
                  key={ index }
                  className="tableB-thead"
                >
                  {planet.split('_').join(' ')}

                </th>
              )) : (<th>Loading</th>)}
        </tr>
      </thead>
      <tbody>
        { getDataForRender.length > 0
          ? getDataForRender.map((planet) => (
            <tr key={ planet.orbital_period }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) : (<tr><td>Loading....</td></tr>)}
      </tbody>
    </Table>

  );
}

export default TableB;
