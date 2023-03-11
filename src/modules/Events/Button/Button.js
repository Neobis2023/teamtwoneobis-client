import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.css';

const Button = ({ where, text, className, ...props }) => {
  return (
    <NavLink to={where}>
        <button className={`${styles.btn} ${className}`} {...props}>{text}</button>
    </NavLink>
  )
}

export default Button