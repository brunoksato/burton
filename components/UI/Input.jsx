/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return (
    <InputStyle
      height={props.height}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      autoComplete={props.autocomplete}
    ></InputStyle>
  );
}

const InputStyle = styled.input`
  width: 100%;
  height: ${props => (props.height !== undefined ? `${props.height}px` : "34px")};
  opacity: 1;
  box-shadow: none;
  margin: 0px 0px 5px;
  border: 1px solid #eee;
  padding: 10px;
  transition: all 0.2s ease-in-out 0s;
  background-color: #eff1f4;
  border-radius: 2px;
  :focus {
    background: rgb(255, 255, 255);
    box-shadow: rgb(107, 16, 214) 0px 0px 0px 1px inset;
    outline: none;
  }
`;
