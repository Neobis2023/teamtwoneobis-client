import React from 'react'
import User from '../components/User';
import userImg from '../assets/images/user-img.svg'

const ReadMessages = () => {
    const users = [
        {
          id: 1,
          imgUrl: userImg,
          fullName: "Ажар Прочитанные",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 2,
          imgUrl: userImg,
          fullName: "Диана Диана",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 3,
          imgUrl: userImg,
          fullName: "Аселя",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 4,
          imgUrl: userImg,
          fullName: "Юлия",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 5,
          imgUrl: userImg,
          fullName: "Стефани",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 6,
          imgUrl: userImg,
          fullName: "Роуз",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
        {
          id: 7,
          imgUrl: userImg,
          fullName: "Ажар Асылбаева",
          date: "02.03.2023",
          time: "9:38",
          email: "example@gmail.com",
          message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
        },
      ];
  return (
    <div className='overflow-auto max-h-[600px]'>
        {users.map((user) => {
            return <User {...user} key={user.id}/>
        })}
    </div>
  )
}

export default ReadMessages