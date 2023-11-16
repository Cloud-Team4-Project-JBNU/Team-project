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

const StyledSelect = styled.select`
  padding: 5px;
  margin : 5px;
  &: hover{
    cursor: pointer;
    background-color: #f2f2f2;
  }
`

const CustomHeader = ({ date, changeYear, changeMonth, setViewingMonth}) => {
  // 연도와 월을 위한 범위 설정
  const years = Array.from(new Array(100), (val, index) => new Date().getFullYear() - index);
  const months = Array.from({length: 12}, (item, index) => ko.localize.month(index, { width: 'abbreviated' }));
  
  const handleMonthChange = (e) => {
    const newMonth = Number(e.target.value);
    changeMonth(newMonth);
    setViewingMonth(newMonth);
  }

  return (
    <div style={{ margin: 10 }}>
      <div>날짜를 선택해주세요</div>
      <StyledSelect
        value={date.getFullYear()}
        onChange={({ target: { value }}) => changeYear(Number(value))}
      >
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>

      <StyledSelect
        value={date.getMonth()}
        onChange={({ target: { value }}) => changeMonth(Number(value))}
      >
        {months.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

function DatePickerUI(props) {
  const { selected, onChange, dateFormat, locale } = props;
  const [viewingMonth, setViewingMonth] = useState(selected.getMonth());
  const filterDate = (date) => {
    //선택한 월과 같은 월의 날짜만 true를 반환 
    return date.getMonth() === viewingMonth;
  }

  return (
    <StyledDatePicker
      selected={selected}
      onChange={(date)=>{
        onChange(date);
        setViewingMonth(date.getMonth());
      }}
      dateFormat={dateFormat}
      locale={locale}
      filterDate={filterDate}
      renderCustomHeader={props => (
        <CustomHeader {...props} setViewingMonth={setViewingMonth} />
      )}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select" 
    />
  );
}

export default DatePickerUI;

