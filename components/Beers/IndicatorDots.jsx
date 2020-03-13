import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

function Dot(props) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "8px",
        width: "8px",
        borderRadius: "4px",
        backgroundColor: "white",
        margin: "7px 5px",
        opacity: props.selected ? "1" : "0.3",
        transitionDuration: "300ms"
      }}
    />
  );
}

export default function IndicatorDots(props) {
  if (props.total < 2) {
    return <Container />;
  } else {
    return (
      <Container>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />;
        })}
      </Container>
    );
  }
}

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};


const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 0px;
  text-align: center;
  @media (max-width:${props => props.theme.queries.sm}){
    display:none;
  }
`