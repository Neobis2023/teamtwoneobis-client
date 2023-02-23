import React from 'react'
import styles from './Button.module.css';

const Button = ({ text, ...props }) => {
  return (
    <button type='submit' className={styles.myButton} {...props}>{text}</button>
  )
}

export default Button