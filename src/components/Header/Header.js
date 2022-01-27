import React, { useContext } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';
import { optionsArray } from '../../data/data';
import FormHeader from '../FormHeader/FormHeader';
import './Header.css';

function Header() {
  const {
    setFilterByName,
    filterByName: { name },
    filterByNumericValues,
    setFilterByNumericValues,
    optionsColunm,
    setOptionsColunm,
    setCountIndex,
    countIndex,
  } = useContext(StarWarsSearchContext);

  const handleChangeName = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const handleUnFiltered = ({ target }) => {
    const resultPosition = optionsArray.indexOf(target.name);
    const filter = filterByNumericValues.filter((col) => col.column !== target.name);
    setFilterByNumericValues(filter);
    optionsColunm.splice(resultPosition, 0, target.name);
    setOptionsColunm(optionsColunm);
    setCountIndex(countIndex - 1);
  };

  return (
    <header>
      <div className="container-input-search">
        <h1>Projeto Star Wars - Trybe</h1>
        <Col>
          <Form.Control
            data-testid="name-filter"
            naem="name"
            type="text"
            value={ name }
            onChange={ handleChangeName }
          />
        </Col>
      </div>
      <FormHeader />
      {filterByNumericValues.length > 0 && filterByNumericValues.map((item) => (
        <div key={ item.column } data-testid="filter">
          <span>{item.column}</span>
          <span>{item.comparison}</span>
          <span>{item.value}</span>
          <Button
            name={ item.column }
            type="button"
            onClick={ handleUnFiltered }
          >
            X
          </Button>
        </div>
      ))}
    </header>
  );
}

export default Header;
