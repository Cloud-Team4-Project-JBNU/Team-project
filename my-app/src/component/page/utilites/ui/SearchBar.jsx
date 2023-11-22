/*eslint-disable*/
import styled from "styled-components";
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import NavBarIcon from "./NavBarIcon";

function SearchBar() {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="검색"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-secondary">
        <i className="bi bi-search"></i> 
        <NavBarIcon
          src="../../../images/searchIcon.png"
        />
      </Button>
    </Form>
  );
};

export default SearchBar;
