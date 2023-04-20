import React, { useEffect, useState } from "react";
import achivement from "../assets/images/achievement.svg";
import Achievement from "./Achievement";
import axios from "../api/axios";
import Blog from "../../Videoblog/Blog/Blog";
import { useTranslation } from "react-i18next";



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
  useEffect(() => {
    const getFavorites = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/like`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFavoriteBlogs(response.data);
        response?.data.map((blog) => localStorage.setItem(`blog-${blog.blog.id}-isFavorite`, true))
        console.log(response)
        console.log(token)
      } catch(e) {
        console.log(token)
        console.log(e);
      }
    }
    getFavorites();
  }, [])
  const { t } = useTranslation();

  console.log(favoriteBlogs)
  return (
    <section className="w-[75%]">
      <p className="text-[#403A64] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)] mb-4">
        {t('Profile.main.title')}
      </p>
      <div className="flex flex-col">
        <div className="mb-[5%]">
          <div className="flex justify-between mb-2">
            <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]">
            {t('Profile.main.subtitle')}
            </p>
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]">
            {t('Profile.main.allAchievs')}
            </p>
          </div>
          <div className="flex gap-3 overflow-x-hidden">
            {achievements.slice(0, 7).map((achieve, index) => (
              <div className="basis-auto" key={index}><Achievement {...achieve} /></div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]">
            {t('Profile.main.favoriteBlogs')}
            </p>
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]">
            {t('Profile.main.allVideos')}
            </p>
          </div>
          <div className="flex gap-4">
            {favoriteBlogs.length ? favoriteBlogs.slice(0, 3).map((videoblog, index) => (<div key={index} className="basis-1/3"><Blog blog={videoblog.blog} /></div>)) : <div className="mx-auto mt-4">Не найдено...</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
