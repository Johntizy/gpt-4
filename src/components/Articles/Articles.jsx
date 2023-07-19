import React from 'react';
import './Articles.css';

const Articles = ({imgUrl, title, date}) => {
  return (
    <div className='blog_container_article'>
      <div className="blog_container_article_image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="blog_container_article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Articles