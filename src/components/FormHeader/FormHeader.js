import React, { useContext, useState, useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import StarWarsSearchContext from '../../context/StarWarsSearchContext';

function FormHeader() {
  const {
    filterByNumericValues: { value },
    setFilterByNumericValues,
    optionsColunm,
    setOptionsColunm,
    setCountIndex,
    countIndex,
    order,
    setOrder,
    setOrderDataColumn,
    data,
  } = useContext(StarWarsSearchContext);
  const [addFilter, setAddFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChangeFilter = ({ target }) => {
    const { name } = target;
    setAddFilter({
      ...addFilter,
      [name]: target.value,
    });
  };

  const handleCheckRadioAndSelect = ({ target }) => {
    const { name } = target;
    setOrder({
      ...order,
      [name]: target.value,
    });
  };

  const handleFilterColumn = (colum) => {
    const updateColumn = optionsColunm.filter((col) => col !== colum);
    setOptionsColunm(updateColumn);
  };

  const handleClickAdd = () => {
    setFilterByNumericValues((prev) => ([
      ...prev, addFilter,
    ]));
    handleFilterColumn(addFilter.column);
    setCountIndex(countIndex + 1);
  };

  const handleClickSort = () => {
    if (order.sort === 'ASC') {
      setOrderDataColumn(data
        .sort((columnA, columnB) => Number(columnA[order.column])
         - Number(columnB[order.column])));
    }
    if (order.sort === 'DESC') {
      setOrderDataColumn(data
        .sort((columnA, columnB) => Number(columnB[order.column])
         - Number(columnA[order.column])));
    }
  };

  useEffect(() => {
    setAddFilter({
      column: optionsColunm[0],
      comparison: 'maior que',
      value: '0',
    });
  }, [optionsColunm]);

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
          <Form.Select
            data-testid="comparison-filter"
            name="comparison"
            value={ addFilter.comparison }
            onChange={ handleChangeFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </Form.Select>
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
            disabled={ optionsColunm.length === 0 }
            type="button"
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
            data-testid="column-sort"
            name="column"
            onChange={ handleCheckRadioAndSelect }
          >
            {optionsColunm.map((item) => (
              <option key={ item } value={ item }>{item}</option>

            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label htmlFor="asc"> </Form.Label>
          <Form.Check
            id="asc"
            name="sort"
            value="ASC"
            type="radio"
            label="Ascendente"
            data-testid="column-sort-input-asc"
            onChange={ handleCheckRadioAndSelect }
          />
        </Col>
        <Col>
          <Form.Label htmlFor="desc"> </Form.Label>
          <Form.Check
            id="desc"
            name="sort"
            value="DESC"
            type="radio"
            label="Descendente"
            data-testid="column-sort-input-desc"
            onChange={ handleCheckRadioAndSelect }
          />
        </Col>
        <Col xs lg="2">
          <Button
            onClick={ handleClickSort }
            variant="light"
            data-testid="column-sort-button"
          >
            Ordenar

          </Button>
        </Col>
        <Col xs lg="2" />
      </Row>
    </Form>
  );
}
export default FormHeader;
