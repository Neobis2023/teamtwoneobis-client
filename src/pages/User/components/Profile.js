import React, { useEffect, useState } from "react";
import Achievement from "./Achievement";
import axios from "../api/axios";
import Blog from "../../Videoblog/Blog/Blog";
import {useGetProfileQuery} from '../../../helpers/reduxToolkit/apis/user-api';
import {LoadingSpinner} from '../../../components/loading-spinner/LoadingSpinner';
import { useTranslation } from "react-i18next";



const Profile = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfileQuery();
  
  console.log(data);
  
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
      } catch(e) {
        console.log(e);
      }
    }
    getFavorites();
  }, [])

  return (
    <section className="w-[75%]">
      <p className="text-[#403A64] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)] mb-4">
        {t('Profile.main.title')}
      </p>
      <div className="flex flex-col">
        <div className="mb-[5%]">
          <p className="text-[#403A64] text-[clamp(0.75rem,_1.39vw,_1.25rem)]" style={{ marginBottom: '20px'}}>
            Мои достижения
          </p>
          
          <div className="flex justify-between mb-2">
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]" style={{ marginBottom: '10px' }}>
              За просмотеренные видеоуроки
            </p>
          </div>
          <div className="flex gap-3 overflow-x-hidden" style={{ marginBottom: '40px'}}>
            { isLoading
              ? <LoadingSpinner />
              : data.jetons.filter((jeton) => jeton.type === 'VIDEO').map((achievement, index) => (
              <div className="basis-auto" key={index}><Achievement achievement={achievement} /></div>
            ))}
          </div>
  
          <div className="flex justify-between mb-2">
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]" style={{ margin: '15px 0 10px' }}>
              За пройденные тесты
            </p>
          </div>
          <div className="flex gap-3 overflow-x-hidden" style={{ marginBottom: '40px'}}>
            { isLoading
              ? <LoadingSpinner />
              : data.jetons.filter((jeton) => jeton.type === 'TEST').map((achievement, index) => (
                <div className="basis-auto" key={index}><Achievement achievement={achievement} /></div>
              ))}
          </div>
  
          <div className="flex justify-between mb-2">
            <p className="text-[#5900B2] font-semibold text-[clamp(0.675rem,_0.972vw,_1.175rem)]" style={{ margin: '15px 0 10px' }}>
              Карточки
            </p>
          </div>
          <div className="flex gap-3 overflow-x-hidden" style={{ marginBottom: '40px'}}>
            { isLoading
              ? <LoadingSpinner />
              : data?.jetons.filter((jeton) => jeton.type === 'CARD').map((achievement, index) => (
                <div className="basis-auto" key={index}><Achievement achievement={achievement} /></div>
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
