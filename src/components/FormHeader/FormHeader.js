import React, { useContext, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';

function FormHeader() {
  const {
    filterByNumericValues: { value },
    setFilterByNumericValues,
    setGetValueColumn,
  } = useContext(StarWarsSearchContext);
  const [addFilter, setAddFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [optionsColunm, setOptionsColunm] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const handleChangeFilter = ({ target }) => {
    const { name } = target;
    setAddFilter({
      ...addFilter,
      [name]: target.value,
    });
  };

  const handleFilterColumn = (colum) => {
    const teste = optionsColunm.filter((col) => col !== colum);
    setOptionsColunm(teste);
  };

  const handleClickAdd = () => {
    setFilterByNumericValues((prev) => ([
      ...prev, addFilter,
    ]));
    console.log(addFilter.column);
    handleFilterColumn(addFilter.column);
    setGetValueColumn(addFilter.comparison);
  };

  return (
    <Form>
      <Row className="align-items-center mb-3">
        <Col xs lg="1" />
        <Col>
          <Form.Select
            data-testid="column-filter"
            name="column"
            value={ value }
            onChange={ handleChangeFilter }
          >
            {optionsColunm.map((item) => (
              <option
                key={ item }
                value={ item }
              >
                {item}

              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChangeFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </Col>
        <Col>
          <input
            type="number"
            name="value"
            min="0"
            value={ addFilter.value }
            onChange={ handleChangeFilter }
            data-testid="value-filter"
          />
        </Col>
        <Col xs lg="2">
          <Button
            variant="light"
            data-testid="button-filter"
            onClick={ handleClickAdd }
          >
            Filtrar

          </Button>
        </Col>
      </Row>
      <Row className="align-items-center mb-3">
        <Col xs lg="1" />
        <Col>
          <Form.Label htmlFor="order-option">Ordenar</Form.Label>
          <Form.Select
            id="order-option"
            aria-label="Default select example"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label htmlFor="custom-switch"> </Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Ascendente"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="custom-switch"> </Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Descendente"
          />
        </Col>
        <Col xs lg="2">
          <Button variant="light">Ordenar</Button>
        </Col>
        <Col xs lg="2" />
      </Row>
    </Form>
  );
}
export default FormHeader;
