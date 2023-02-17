import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DetailsButton = ({ text='Узнать подробнее', to='/', className }) => {
  return (
    <NavLink className={className} to={to} style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#E8E5FF', border: '1px solid #CDB4DB', borderRadius: '30px', padding: '10px 20px', width: 'fit-content', color: '#662D91' }}>
      {text}
      <KeyboardArrowRightIcon style={{ alignSelf: 'center' }}/>
    </NavLink>
  )
}

export default DetailsButton;