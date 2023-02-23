import React from 'react'
import styles from './Input.module.css'

const Input = ({ placeholder, type, className, ...props }) => {
  return (
    <input type={type} placeholder={placeholder} className={`${styles.myInput} ${className}`} {...props}/>
  )
}

export default Input