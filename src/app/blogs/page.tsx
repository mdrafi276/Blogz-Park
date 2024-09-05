"use client"
import BlogCard from '@/components/ui/BlogCard';
import { IBlogs } from '@/types';
import React from 'react';
import { useGetBlogsQuery } from '@/redux/api/baseApi';

const Blogs =  () => {
 const {data:blogs, isLoading, isError, error} = useGetBlogsQuery('')
    return ( 
        <div>

            <h1 className=' mx-5 text-center text-4xl'>All Blogs From <span className="text-accent">Blogiz</span></h1>
            <p className=' text-center text-gray-400 w-2/4 mx-auto'><i>Dive into the fascinaing word of quantum computing, where unlocking unprecedented computational</i></p>
         <div  className='grid my-10 grid-cols-3 gap-4'>
            {blogs?.map((blog:IBlogs)=><BlogCard key={blog.id} blog={blog}/>  )}
         </div>
        </div>
    );
};

export default Blogs;