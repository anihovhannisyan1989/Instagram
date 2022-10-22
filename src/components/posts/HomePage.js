import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SinglePost from "./SinglePost";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          {[...Array(8)].map((post, i) => {
            return (
              <Col key={i} md={{ span: 6, offset: 3 }} className="f-nowrap">
                {/* <Link
                  to={`/posts/${i}`}
                  className="text-decoration-none text-dark"
                > */}
                <SinglePost />
                {/* </Link> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
