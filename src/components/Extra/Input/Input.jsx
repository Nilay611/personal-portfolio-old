import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const FlexC = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 1rem;
  font-size: 1rem;
  position: relative;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--grey-txt);
  transition: 0.5s;
  pointer-events: none;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--primary);
  background: none;
  outline: none;
  color: var(--white);
  font-size: 1rem;
  font-family: var(--Montserrat);
  font-weight: 300;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 3rem;

  &:focus {
    border-color: var(--primary);
  }

  &:focus ~ ${StyledSpan} {
    transform: translateY(-1rem);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--primary);
  }
`;

export const Input = () => {
  return (
    <form>
      <FlexC>
        <StyledInput type="email" id="email" name="email" autocomplete="off" />
        <StyledSpan>Email</StyledSpan>
        <Button
          class="submit-btn"
          btnstyle="filled"
          size="small"
          border=""
          onClick=""
        >
          Submit
        </Button>
      </FlexC>
    </form>
  );
};
