import { IBlogs } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({blogs}:{blogs:IBlogs[]}) => {
    return (
        <div>
            <h1 className=' mx-5 text-center text-4xl'>Latest Blogs From <span className="text-accent">Blogiz</span></h1>
  <p className=' text-center text-gray-400 w-2/4 mx-auto'><i>Dive into the fascinaing word of quantum computing, where unlocking unprecedented computational</i></p>

<div className='grid grid-cols-2  my-5 gap-5'>
    {
        blogs.slice(0,2).map(blog=> <LatestBlogCard key={blog.id} blog={blog}/> )
    }
</div>
<div className='grid grid-cols-3  my-5 gap-5'>
    {
        blogs.slice(2,5).map(blog=> <BlogCard key={blog.id} blog={blog}/> )
    }
</div>
        </div>
    );
};

export default LatestBlogs;