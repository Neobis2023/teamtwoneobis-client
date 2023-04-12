import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

const InputDate = ({ label, selected, onChange, ...props }) => {
    const date = new Date(selected);
    return (
        <label className='mb-2 w-[48%]'>
          <p className='text-[#662D91] font-bold text-[0.75rem] mb-1'>{label}</p>
          <DatePicker
            selected={date}
            onChange={onChange}
            placeholderText={'ДД.ММ.ГГГГ'}
            className='bg-[#FAF7FF] p-2 rounded-[8px] outline-none'
            dateFormat="dd.MM.yyyy"
            locale={ru}
            {...props}
          />
        </label>
      );
}

export default InputDate