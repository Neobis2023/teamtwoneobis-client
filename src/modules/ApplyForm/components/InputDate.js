import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

const InputDate = ({ label, selected, onChange, sublabel, ...props }) => {
    const date = new Date(selected);
    return (
        <label className='border-b py-2 flex flex-col gap-1 my-6'>
          <div>
            <p className='text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]'>{label}</p>
            {sublabel && <p className='text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]'>{sublabel}</p>}
          </div>
          <DatePicker
            selected={date}
            onChange={onChange}
            placeholderText={'ДД.ММ.ГГГГ'}
            className='outline-none'
            dateFormat="dd.MM.yyyy"
            locale={ru}
            {...props}
          />
        </label>
      );
}

export default InputDate