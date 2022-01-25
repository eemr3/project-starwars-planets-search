import React from 'react';
import { Col, Form } from 'react-bootstrap';
import FormHeader from '../FormHeader/FormHeader';
import Select from '../Select/Select';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container-input-search">
        <h1>Projeto Star Wars - Trybe</h1>
        <Col>
          <Form.Select aria-label="Default select example">
            <option value="1">Planetas Aquis</option>
            <option value="2">Planetas Aqui</option>
            <option value="3">Planetas Aqui</option>
          </Form.Select>
        </Col>
      </div>
      <FormHeader />
    </header>
  );
}

export default Header;
