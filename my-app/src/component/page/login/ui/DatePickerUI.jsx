/*eslint-disable*/
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 4px;
`;

function DatePickerUI(props) {
  const {selected, onChange} = props;

  return (
    <StyledDatePicker
      selected={selected}
      onChange={onChange}
    />
  );
}

export default DatePickerUI;
