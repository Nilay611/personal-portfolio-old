import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import {
  FaHome,
  FaUserCog,
  FaStar,
  FaBuffer,
  FaEnvelope,
} from "react-icons/fa";

const Container = styled.div`
  position: fixed;
  z-index: 200;

  .active-page {
    background-color: var(--primary);
  }
`;

const MenuButton = styled.button`
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(45, 45, 45, 1) 70%,
    rgba(46, 46, 46, 1) 100%
  );
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 3px;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    width: 1.5rem;
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.813rem")};
    width: ${(props) => (props.clicked ? "1.5rem" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background: rgb(46, 46, 46);
  background: linear-gradient(
    90deg,
    rgba(46, 46, 46, 1) 0%,
    rgba(32, 32, 32, 1) 10%,
    rgba(0, 0, 0, 1) 50%,
    rgba(32, 32, 32, 1) 90%,
    rgba(46, 46, 46, 1) 100%
  );
  width: 4rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 550px) {
    width: 0rem;
  }
`;

const Logo = styled.div`
  width: 3rem;
  margin: 0.5rem;

  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 550px) {
    visibility: hidden;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  background: rgb(46, 46, 46);
  background: linear-gradient(
    90deg,
    rgba(46, 46, 46, 1) 0%,
    rgba(32, 32, 32, 1) 10%,
    rgba(0, 0, 0, 1) 50%,
    rgba(32, 32, 32, 1) 90%,
    rgba(46, 46, 46, 1) 100%
  );
  padding: 2rem 0;
  width: ${(props) => (props.clicked ? "12rem" : "4rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;

  @media screen and (max-width: 550px) {
    width: ${(props) => (props.clicked ? "12rem" : "0.5rem")};
  }
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem 0;
  display: flex;
  padding-left: 1rem;

  &:hover {
    background-color: var(--primary);
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  color: var(--white);
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  font-family: var(--AudioWide);
  text-transform: uppercase;
  transition: all 0.3s ease;
`;

const ContactButton = styled.button`
  display: flex;
  gap: 1rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.75rem;
  border: 2px solid var(--primary);
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  margin: 0.5rem;

  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const history = useHistory();

  const handleRoute = () => {
    // history.push("/Contact");
    window.open('mailto:nilaysaxena98@gmail.com?subject=Contact%20Nilay&body=Write%20your%20message');
  };

  return (
    <Container>
      <MenuButton clicked={click} onClick={() => handleClick()}></MenuButton>
      <SidebarContainer clicked={click}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active-page"
            to="/"
          >
            <FaHome />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active-page"
            to="/Skills"
          >
            <FaUserCog />
            <Text clicked={click}>Skills</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active-page"
            to="/Projects"
          >
            <FaStar />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active-page"
            to="/Blog"
          >
            <FaBuffer />
            <Text clicked={click}>Blog</Text>
          </Item>
        </SlickBar>
        <ContactButton onClick={handleRoute}>
          <FaEnvelope />
        </ContactButton>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
