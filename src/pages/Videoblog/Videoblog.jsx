import React, { useEffect } from 'react'
import Blogs from './Blogs/Blogs'
import Heading from './Heading/Heading'

const Videoblog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
        <Heading />
        <Blogs />
    </>
  )
}

export default Videoblog