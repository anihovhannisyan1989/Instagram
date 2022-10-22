///////bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Header.css";

/// icons
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
///////////

const Header = () => {
  return (
    <div className="header">
        <Navbar variant="light">
        <Container className="d-flex justify-content-around align-items-center">
            <Navbar.Brand href="#home">
            <img
                width="103px"
                height="29px"
                src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                alt="Logo"
                className="op-07"
            />
            </Navbar.Brand>
            <Form.Control
                type="search"
                placeholder="Search"
                className="border input-size"
                aria-label="Search"
            />
            <Nav className="d-flex">
                <Link to="/" className="nav-link mr-5">
                    <AiFillHome className="fs-3 dark op-07" />
                </Link>
                <Link to="/create" className="nav-link mr-5">
                    <MdOutlineAddBox className="fs-3 dark op-07" />
                </Link>
                <Link to="/favorites" className="nav-link mr-5">
                    <MdOutlineExplore className="fs-3 dark op-07" />
                </Link>
                <Link to="/notifications" className="nav-link">
                    <RiHeart3Line className="fs-3 dark op-07" />
                </Link>
                <Link to="/mypage" className="nav-link">
                    <HiOutlineUser className="fs-3 dark op-07"/>
                </Link>
                <Link to="/login" className="nav-link">
                    Log out
                </Link>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
};

export default Header;
