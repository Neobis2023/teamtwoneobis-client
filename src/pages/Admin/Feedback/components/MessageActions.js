import React from 'react'
import star from '../assets/images/star.svg'
import trash from '../assets/images/trash.svg'

const MessageActions = () => {
  return (
    <div className='flex gap-6 py-4 my-4 border-t border-b'>
        <img src={star} alt='star' className='hover:cursor-pointer'/>
        <img src={trash} alt='trash' className='hover:cursor-pointer'/>
    </div>
  )
}

export default MessageActions