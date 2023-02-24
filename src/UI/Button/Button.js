import React from 'react'
import styles from './Button.module.css';

const Button = ({ text, className, ...props }) => {
  return (
    <button type='submit' className={`${styles.myButton} ${className}`} {...props}>{text}</button>
  )
}

export default Button