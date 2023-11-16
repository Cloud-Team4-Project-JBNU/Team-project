/*eslint-disable*/
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { ko } from 'date-fns/locale';

const StyledDatePicker = styled(DatePicker)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 4px;
`;

const CustomHeader = ({ date, changeYear, changeMonth }) => {
  // 연도와 월을 위한 범위 설정
  const years = Array.from(new Array(100), (val, index) => new Date().getFullYear() - index);
  const months = Array.from({length: 12}, (item, index) => ko.localize.month(index, { width: 'abbreviated' }));
  
  return (
    <div style={{ margin: 10 }}>
      <select
        value={date.getFullYear()}
        onChange={({ target: { value }}) => changeYear(value)}
      >
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={months[date.getMonth()]}
        onChange={({ target: { value }}) => changeMonth(months.indexOf(value))}
      >
        {months.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

function DatePickerUI(props) {
  const { selected, onChange, dateFormat, locale } = props;
  return (
    <StyledDatePicker
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
      locale={locale}
      renderCustomHeader={props => (
        <CustomHeader {...props} />
      )}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select" // 이 부분을 추가하여 드롭다운으로 년도와 월을 선택할 수 있게 합니다.
    />
  );
}

export default DatePickerUI;
