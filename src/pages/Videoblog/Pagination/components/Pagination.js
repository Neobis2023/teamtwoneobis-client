import React from "react";
import { NavLink, useParams } from "react-router-dom";
import right from "../assets/images/right.svg";
import left from "../assets/images/left.svg";

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
  const pageNumbers = [];
  let { id } = useParams();
  id = Number(id);
  
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="">
      <div className="flex gap-2 pagination-numbers flex-wrap">
        {currentPage === 1 ? null : (
          <NavLink
            to={`/videoblog/${id - 1}`}
            className={`videblogLink text-[clamp(0.62rem,_0.97vw,_1rem)] bg-[#fff] border border-[#DFE3E8] px-3 py-1 rounded hover:cursor-pointer flex justify-center`}
            onClick={() => paginate(id - 1)}
          >
            <img src={left} alt="left" />
          </NavLink>
        )}
        {pageNumbers.map((number, index) => {
          return (
            <NavLink
              to={`/videoblog/${number}`}
              className={`videoblogPage text-[#292D32] text-[clamp(0.62rem,_0.97vw,_1rem)] bg-[#fff] border border-[#DFE3E8] px-3 py-1 rounded hover:cursor-pointer`}
              onClick={() => paginate(number)}
              key={index}
            >
              {number}
            </NavLink>
          );
        })}

        {currentPage === pageNumbers.length ? null : (
          <NavLink
            to={`/videoblog/${id+1}`}
            className={`videblogLink text-[clamp(0.62rem,_0.97vw,_1rem)] bg-[#fff] border border-[#DFE3E8] px-3 py-1 rounded hover:cursor-pointer flex justify-center`}
            onClick={() => paginate(id+1)}
          >
            <img src={right} alt="right" />
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
