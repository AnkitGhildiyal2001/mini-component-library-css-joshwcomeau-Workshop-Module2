import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <MySelect value={value} onChange={onChange}>
      {children}
    </MySelect>
  );
};

const MySelect = styled.select`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

export default Select;
