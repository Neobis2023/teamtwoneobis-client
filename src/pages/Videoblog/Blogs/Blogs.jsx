import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/components/Pagination";
import Blog from "../Blog/Blog";
import { useSelector } from "react-redux";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(2);
  const searchValue = useSelector((state) => state.searchValues.searchValue);
  const category = useSelector((state) => state.searchValues.category);
  console.log(blogs);
  console.log(category);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://girls4girls.herokuapp.com/api/video-blog")
      .then((res) => {
        setBlogs(res.data.data);
        console.log(blogs)
      });
    // axios
    //   .get("https://girls4girls.herokuapp.com/api/like", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => setFavoriteBlogs(res.data));
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
          totalBlogs={blogs}
          paginate={paginate}
          currentPage={currentPage}
        />
        {
          <div className="grid grid-cols-[repeat(auto-fill,_31%)] justify-between gap-8 mb-6">
            {(!searchValue && category === 'Все') ? (
              currentBlogs?.map((blog, index) => {
                return <Blog key={index} blog={blog} />;
              })
            ) : (searchValue && category === 'Все') ? (
              blogs
                ?.filter((blog) =>
                  blog.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((blog, index) => <Blog key={index} blog={blog} />)
            ) : (searchValue && category !== 'Все') ? (
              blogs
                ?.filter((blog) =>
                  (blog.category.name.toLowerCase().includes(category?.toLowerCase()) && blog.title.toLowerCase().includes(searchValue.toLowerCase()))
                )
                .map((blog, index) => <Blog key={index} blog={blog} />)
            ) : (!searchValue && category !== 'Все') ? 
              blogs
                ?.filter((blog) =>
                  (blog.category.name.toLowerCase().includes(category?.toLowerCase()))
                ).map((blog, index) => <Blog key={index} blog={blog} />) :(
              <p>Ничего не найдено</p>
            )}
          </div>
        }
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Blogs;
