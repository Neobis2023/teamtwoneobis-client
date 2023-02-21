import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DetailsButton = ({ text, arrow=true ,to='/', className }) => {
  return (
    <NavLink className={`${className} transition hover:!text-white hover:!bg-[#9960C3]`} to={to} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', background: '#E8E5FF', border: '1px solid #CDB4DB', borderRadius: '30px', padding: '10px 20px', maxWidth: '25%', minWidth: 'fit-content', color: '#662D91' }}>
      <p>{text}</p>
      {arrow && <KeyboardArrowRightIcon style={{ alignSelf: 'center' }}/>}
    </NavLink>
  )
}

export default DetailsButton;