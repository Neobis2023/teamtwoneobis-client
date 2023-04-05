import React, { useEffect, useState } from "react";
import achivement from "../assets/images/achievement.svg";
import Achievement from "./Achievement";
import axios from "../api/axios";
import Blog from "../../Videoblog/Blog/Blog";



const Profile = () => {
  const achievements = [
    {
      id: 1,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 2,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 3,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 4,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 5,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 6,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 7,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 7,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
    {
      id: 7,
      imgUrl: achivement,
      name: "Отличница",
      amount: 2,
    },
  ];
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setToken(token);
  // }, [])
  useEffect(() => {
    const getFavorites = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/like`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFavoriteBlogs(response.data)
        console.log(response)
        console.log(token)
      } catch(e) {
        console.log(token)
        console.log(e);
      }
    }
    getFavorites();
  }, [])

  console.log(favoriteBlogs)
  return (
    <section className="w-[75%]">
      <p className="text-[#403A64] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)] mb-4">
        Мой профиль
      </p>
      <div className="flex flex-col">
        <div className="mb-[5%]">
          <div className="flex justify-between mb-2">
            <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]">
              Мои достижения
            </p>
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]">
              Список всех достижений
            </p>
          </div>
          <div className="flex justify-between gap-3 overflow-x-hidden">
            {achievements.slice(0, 7).map((achieve, index) => (
              <Achievement {...achieve} key={index} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]">
              Избранные видеолекции
            </p>
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]">
              Посмотреть все
            </p>
          </div>
          <div className="flex gap-2 justify-between">
            {favoriteBlogs && favoriteBlogs.map(videoblog => {
              return (<Blog blog={videoblog.blog}/>)
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]">
              Просмотренные видеолекции
            </p>
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]">
              Посмотреть все
            </p>
          </div>
          <div className="flex gap-2 justify-between">
            {favoriteBlogs && favoriteBlogs.map(videoblog => {
              return (<Blog blog={videoblog.blog}/>)
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
