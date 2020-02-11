/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Button(props) {
  return (
    <ButtonStyle
      type={props.type}
      height={props.height}
      width={props.width}
      disabled={props.disabled}
      background={props.background}
      loading={props.loading}
      onClick={props.onClick}
    >
      <LabelButton>{props.label}</LabelButton>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  background-color: ${props => (props.background !== undefined ? props.background : "#6b10d6")};
  border: 0;
  padding: 14px;
  display: block;
  box-sizing: border-box;
  width: ${props => (props.width !== undefined ? `${props.width}px` : "100%")};
  height: ${props => (props.height !== undefined ? `${props.height}px` : "34px")};
  overflow: hidden;
  border-radius: 0 0 5px 5px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  color: #fff;
  letter-spacing: 1px;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  pointer-events: all;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

const LabelButton = styled.span`
  font-size: 1.5em;
  line-height: 0;
  font-weight: bold;
  color: #fff;
`;
