import React from 'react';
import { Tab, Row, Col, Nav, Table, Button, Container } from 'react-bootstrap';

const Manage = (props) => (
  <Container>
    <Button variant='outline-dark'>Back</Button>
    <Button variant='outline-dark'>Add New Product</Button>
    <Table responsive>
      <thead>
        <tr>
          {['Id', 'Category', 'Name', 'Price', 'Stock'].map(
            (attribute, index) => (
              <th key={index}>{attribute}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>00</td>
          <td>green</td>
          <td>sencha</td>
          <td>15.55</td>
          <td>3</td>
        </tr>
        <tr>
          <td>00</td>
          <td>green</td>
          <td>sencha</td>
          <td>15.55</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Manage;
