import React, { memo, useEffect, useState } from "react";
import heart from "../Blogs/assets/images/heart.svg";
import filledHeart from "../assets/images/filledHeart.svg";

import axios from "../api/axios";
import VideoPlayer from "../../../helpers/videoplayer/VideoPlayer";

const Blog = memo(({ blog }) => {
  const date = new Date(blog.createdAt);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const [token, setToken] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(`https://girls4girls.herokuapp.com/api/like/${blog.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsFavorite(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [blog.id, token]);

  const handleFavorites = async () => {
    try {
      if (isFavorite) {
        await axios.delete(`/like/${blog.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsFavorite(false);
      } else {
        await axios.post(
          `/like/${blog.id}`,
          {
            blogId: blog.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // const handleFavorites = async () => {
  //   try {
  //     const response = await axios.post(
  //       `/like/${blog.id}`,
  //       {
  //         blogId: blog.id,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     console.log(token);
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   try {
  //     const response = await axios.delete(`/like/${blog.id}`, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     console.log(response)
  //     console.log(token)
  //   } catch(e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className="basis-[31%] rounded-[8px] flex h-auto flex-col gap-2 mb-[5%]">
      <div className="flex flex-col gap-2">
        <div className="">
          <VideoPlayer videoUrl={blog.videoUrl} />
        </div>
        {/* <VideoPlayer videoUrl={'https://www.youtube.com/watch?v=zvTr3P43yUg'}/> */}

        <div className="flex justify-between items-center">
          <p className="text-[#403A64]">
            Категория:{" "}
            <span
              className={`border-[0.5px] border-solid rounded-[4px] border-[#CDB4DB] px-1 py-px bg-[rgba(102,_45,_145,_0.6)] text-white`}
            >
              Образование
            </span>
          </p>
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            {blog.postViewCount} просмотров
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-[#662D91] font-bold text-[clamp(1rem,_1.39vw,_1.5rem)]">
            {blog.title}
          </p>
          <img
            src={isFavorite ? filledHeart : heart}
            alt="heart"
            className="w-[6%] cursor-pointer"
            onClick={handleFavorites}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            Лектор: {blog.lecturerName}
          </p>
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
});
export default Blog;
