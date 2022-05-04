import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListItem from "../ItemList/ItemList";

export default function ItemsListContainer({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <div className="productsList">
        <Container>
          <Row style={{ padding: "70px" }}>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
          </Row>
          <Row style={{ padding: "70px" }}>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
          </Row>
          <Row style={{ padding: "70px" }}>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
            <Col>
              <ListItem />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
