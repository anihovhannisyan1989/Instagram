import React from "react";
import Card from "react-bootstrap/Card";
import "./SinglePost.css";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";


const SinglePost = () => {
  return (
    <Card className="mt-4">
      <Card.Header className="d-flex justify-content-between align-items-center fw-bolder">
        <Card.Title className="d-flex align-items-center gap-2 m-0">
            <Card.Img variant="left" src="https://via.placeholder.com/42" className="rounded-circle pointer op-07"/>
            <Card.Link href="#" className="fs-6 text-decoration-none text-dark op-07">User Name</Card.Link>
        </Card.Title>
          <Card.Text className="pointer mr-5 op-07">. . .</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Img src="https://via.placeholder.com/470"/>
      </Card.Body>
      <Card.Footer>
        <Card.Title className="d-flex justify-content-start align-items-center pointer">
          <RiHeart3Line className="mr-10 op-07" size={30}/>
          <FaRegComment size={26} className="op-07"/>
        </Card.Title>
        <Card.Text>title</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default SinglePost;
