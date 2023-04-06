import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/components/Pagination";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [favoriteBlogs, setFavoriteBlogs] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(12);
  console.log(blogs);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://girls4girls.herokuapp.com/api/video-blog")
      .then((res) => {
        // const lastBlog = res.data.data[res.data.data.length - 1];
        // const repeatedBlogs = [...Array(30)].map(() => res.data.data[0]);
        // console.log(res.data.data);
        // setBlogs([...repeatedBlogs, ...res.data.data.slice(1), lastBlog]);
        setBlogs(res.data.data);
      });
    axios
      .get("https://girls4girls.herokuapp.com/api/like", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setFavoriteBlogs(res.data));
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="myWrapper">
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <div className="grid grid-cols-[repeat(auto-fill,_31%)] justify-between gap-8 my-6">
          {/* {currentBlogs?.map((blog, index) => (
          <Blog key={index} blog={blog} isFavorite={favoriteBlogs && favoriteBlogs.map(fav => fav.id === blog.id)}/>
        ))} */}
          {currentBlogs?.map((blog, index) => {
            return <Blog key={index} blog={blog} />;
          })}
        </div>
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Blogs;
