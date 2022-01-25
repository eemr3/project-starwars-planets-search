import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';

import './Table.css';

function TableB() {
  const { filterPlanetName } = useContext(StarWarsSearchContext);

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
                  {planet.split('_').join('')}

                </th>
              )) : (<th>Loading</th>)}
        </tr>
      </thead>
      <tbody>
        { filterPlanetName.length > 0
          ? filterPlanetName.map((planet) => (
            <tr key={ planet.orbital_period }>
              <td>{planet.name}</td>
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
