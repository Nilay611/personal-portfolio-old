import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
} from "react-icons/fa";
import { Button } from "../Extra/Button/Button";

const StyledFooter = styled.section`
  position: relative;
  z-index: 24;
  overflow: hidden;
  background-color: var(--white);
  text-align: center;
  line-height: 1.5;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const FooterContainer = styled.div`
  margin: auto;
  padding: 5rem;
  background-color: var(--black);
  color: var(--white);

  @media screen and (max-width: 650px) {
    padding: 5rem 0;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8rem 4rem 0;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--white);

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FlexContainer1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10rem;

  @media screen and (max-width: 1280px) {
    width: 100%;
    gap: 2rem;
  }
`;

const FlexContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
  font-family: var(--Montserrat);
  margin: 1rem;
  color: var(--white);
`;

const Container = styled.div`
  font-family: var(--ABZ);
  text-align: left;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.25rem;
  color: var(--white);
`;

const SocialLink = styled.a`
  text-decoration: none;
  height: 20px;
  margin: 3rem 0;
  color: var(--white);

  &:hover {
    color: ${(props) => props.hColor};
  }
`;

const Copyright = styled.p`
  color: var(--white);
  font-family: var(--Montserrat);
  font-size: 1rem;
`;

function Footer() {
  const handleRoute = () => {
    window.open(
      "mailto:nilaysaxena98@gmail.com?subject=Contact%20Nilay&body=Write%20your%20message"
    );
  };

  return (
    <StyledFooter>
      <FooterContainer>
        <FlexContainer>
          <Container>
            <h2 style={{ marginBottom: `1.5rem` }}>Reach out to me.</h2>
            {/* <p style={{ margin: `1.5rem 0` }}>or</p> */}
            <Button
              class="contact-btn"
              btnstyle="outline"
              size="small"
              border=""
              onClick={handleRoute}
            >
              CONTACT ME
            </Button>
          </Container>
          <FlexContainer1>
            <Container>
              <div>
                <p style={{ paddingTop: `2rem` }}>Nilay Saxena</p>
                <p>441, Sector N-1, Aliganj,</p>
                <p>Lucknow, Uttar Pradesh,</p>
                <p>India - 226024</p>
                <p style={{ marginTop: `2rem` }}>
                  <FaMobileAlt /> +91 8737911663
                </p>
              </div>
            </Container>
            <SocialIcons>
              <SocialLink
                href="https://www.facebook.com/nilay.saxena.50"
                hColor="var(--primary)"
              >
                <FaFacebookSquare />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/magnus_61198/"
                hColor="var(--primary)"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://github.com/Aether61198"
                hColor="var(--primary)"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/nilaysaxena22/"
                hColor="var(--primary)"
              >
                <FaLinkedinIn />
              </SocialLink>
            </SocialIcons>
          </FlexContainer1>
        </FlexContainer>
        <h1
          className="hero-name"
          style={{ fontSize: `3rem`, margin: `2rem 0` }}
        >
          Nilay Saxena
        </h1>
        <Copyright>Copyright &copy; {new Date().getFullYear()}</Copyright>
        <FlexContainer2>
          <a
            href="https://www.google.com"
            style={{ textDecoration: `none`, color: `white` }}
          >
            Privacy Policy
          </a>
          <p style={{ fontSize: `1rem` }}>|</p>
          <a
            href="https://www.google.com"
            style={{ textDecoration: `none`, color: `white` }}
          >
            Terms of Service
          </a>
        </FlexContainer2>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
