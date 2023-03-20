import React, { useState } from "react";
import Pagination from "../Pagination/components/Pagination";
import video from "../videos/morning.mp4";
import heart from "./assets/images/heart.svg";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 2,
      video: video,
      category: "Здоровье",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 3,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 4,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 5,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 6,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 7,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 8,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 8,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 9,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 10,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 11,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 12,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 13,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 14,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 16,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 17,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 18,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 19,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 20,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 21,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 22,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 23,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 24,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 25,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 26,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 27,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 28,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 29,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
    {
      id: 30,
      video: video,
      category: "Образование",
      title: "Саморазвитие",
      speaker: "Айканыш Сыдыкова",
      views: 0,
      date: "02.03.2023",
      favorite: false,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(12);

  // Get last blog
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="myWrapper">
        <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} paginate={paginate} currentPage={currentPage}/>
        <div className="grid grid-cols-[repeat(auto-fill,_31%)] justify-between gap-8 my-6">
          {currentBlogs.map((blog) => (
            <div className="basis-[31%] flex h-auto flex-col gap-2 mb-[5%]" key={blog.id}>
              <div className="flex flex-col gap-2">
                <video width="" height="" controls className="rounded-[12px]">
                  <source src={blog.video} />
                </video>
                <div className="flex justify-between items-center">
                  <p className="text-[#403A64]">
                    Категория:{" "}
                    <span
                      className={`border-[0.5px] border-solid rounded-[4px] border-[#CDB4DB] px-1 py-px ${
                        blog.category === "Образование"
                          ? "bg-[#E8E5FF] text-[#662D91]"
                          : "bg-[rgba(102,_45,_145,_0.6)] text-[#FFF]"
                      }`}
                    >
                      {blog.category}
                    </span>
                  </p>
                  <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
                    {blog.views} просмотров
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-[#662D91] font-bold text-[clamp(1rem,_1.39vw,_1.5rem)]">
                    {blog.title}
                  </p>
                  <img src={heart} alt="heart" className="w-[6%]" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
                    Лектор: {blog.speaker}
                  </p>
                  <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
                    {blog.date}
                  </p>
                </div>
                {/* <input type="file" accept="video/mp4,video/x-m4v,video/*" /> */}
              </div>
            </div>
          ))}
        </div>
        <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} paginate={paginate} currentPage={currentPage}/>
      </div>
    </section>
  );
};

export default Blogs;
