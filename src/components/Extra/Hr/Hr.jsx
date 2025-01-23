import React from "react";
import styled from "styled-components";

const StyledHr = styled.hr`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  border: none;
`;

export const Hr = (props) => {
  return (
    <StyledHr
      width={props.hrWidth}
      height={props.hrHeight}
      margin={props.hrMargin}
      color={props.hrColor}
    />
  );
};
