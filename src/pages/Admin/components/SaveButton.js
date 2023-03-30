import React from 'react'

const SaveButton = ({ ...props }) => {
  return (
    <button type='submit' {...props} className={'w-[30%] rounded-[8px] bg-[#9960C3] text-white p-2'}>Сохранить</button>
  )
}

export default SaveButton