import BlogDetails from '@/components/ui/BlogDetails';
import { IBlogs } from '@/types';
import React from 'react';
interface IBlogId {
    params: {
        blogId: string;
    }
}

export const generateStaticParsms = async () => {

    const res = await fetch('http://localhost:5000/blogs');
    const blogs = await res.json();

    return blogs.slice(0, 3).map((blog: IBlogs) => ({
        blogId: blog.id
    }));
}

const BlogDetailsPage = async ({ params }: IBlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, { cache: 'no-store' });
    const blog = await res.json();
    return (
        <div>
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;