/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let width = "";
  let padding = "0px";
  let rightRadius = "0px";
  let height = "0px";

  if (size === "large") {
    padding = "3.5px";
    width = "100%";
    height = "15px";
  }
  if (size === "medium") {
    width = "50%";
    height = "12px";
  }
  if (size === "small") {
    width = "25%";
    height = "10px";
  }

  if (value === 100) rightRadius = "5px";

  return (
    <Wrapper width={width} color={COLORS.transparentGray15} padding={padding}>
      <Bar
        prog={value + "%"}
        color={COLORS.primary}
        rightRadius={rightRadius}
        height={height}
      ></Bar>

      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-radius: 7px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.prog};
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: ${(props) => props.rightRadius};
  border-bottom-right-radius: ${(props) => props.rightRadius};
`;

export default ProgressBar;
