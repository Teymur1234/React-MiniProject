import React from 'react'
import "./blog.css"
import { useLocation } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";


const BlogPage = () => {
  const location=useLocation()
  const {post}=location.state
  return (
    <>
      <section className='section1-blog' style={{backgroundImage:"url(https://kofe.al/assets/images/bg/bg-image-10.jpg)"}}>
        <div className='blog-main'>
          <div>
          <img src={post.yazarimg} alt="" /><h3>{post.yazarname}</h3>
          </div>
          <ul>
            <li><IoEyeOutline/> <p>{post.looks} Baxış</p></li>
            <li><IoMdTime/> {post.date}</li>
            <li><IoMdWatch/> 1 dəq oxuma</li>
          </ul>          
          <h1>{post.name}</h1>
          <p>{post.description}</p>
          <img className='post-img' src={post.img} alt="" />
          <p>{post.etrafli}</p>
        </div>
      </section>
    </>
  )
}

export default BlogPage