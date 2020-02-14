import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Chevron from "../../public/icons/chevron.svg";

export default function Buttons(props) {
  const { index, total, loop, prevHandler, nextHandler } = props;
  return (
    <Wrapper>
      {(loop || index !== 0) && (
        <BtnLeft onClick={prevHandler}>
          <ChevronLeft src={Chevron} />
        </BtnLeft>
      )}
      {(loop || index !== total - 1) && (
        <BtnRight onClick={nextHandler}>
          <ChevronRight src={Chevron} />
        </BtnRight>
      )}
    </Wrapper>
  );
}

Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 30%;
  text-align: center;
  right: 2em;
  @media (max-width: ${props => props.theme.queries.md}) {
    right: 0em;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    bottom: 38%;
  }
`;

const ChevronRight = styled.img`
  width: 120px;
  height: 120px;
  @media (max-width: ${props => props.theme.queries.md}) {
    width: 60px;
    height: 60px;
  }
`;

const ChevronLeft = styled(ChevronRight)`
  transform: rotate(180deg);
`;

const Button = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  bottom: 0;
  color: rgba(255, 255, 255, 0.8);
`;

const BtnLeft = styled(Button)`
  right: 100px;
  @media (max-width: ${props => props.theme.queries.md}) {
    right: 0;
    left: 0;
  }
`;

const BtnRight = styled(Button)`
  right: 0px;
`;
