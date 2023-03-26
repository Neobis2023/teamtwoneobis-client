import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/components/Pagination";
import Blog from "../Blog/Blog";



const Blogs = () => {
const [blogs, setBlogs] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const [blogsPerPage, setBlogsPerPage] = useState(12);

useEffect(() => {
  axios
    .get("https://girls4girls.herokuapp.com/api/video-blog")
    .then((res) => {
      const lastBlog = res.data.data[res.data.data.length - 1];
      const repeatedBlogs = [...Array(30)].map(() => res.data.data[0])
      console.log(res.data.data);
      setBlogs([...repeatedBlogs, ...res.data.data.slice(1), lastBlog]);
    });
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
        {currentBlogs?.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
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
