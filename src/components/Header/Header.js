import React, { useContext } from 'react';
import { Col, Form } from 'react-bootstrap';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';
import FormHeader from '../FormHeader/FormHeader';
import './Header.css';

function Header() {
  const { setFilterByName, filterByName: { name } } = useContext(StarWarsSearchContext);

  const handleChangeName = ({ target }) => {
    setFilterByName({ name: target.value });
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
    </header>
  );
}

export default Header;
