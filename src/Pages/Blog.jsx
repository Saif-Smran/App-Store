import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const Blog = () => {

    const data = useLoaderData()

    console.log(data);
    

    return (
        <div className='max-w-screen-xl mx-auto my-10 mb-20'>
            <Helmet>
                <title>Blogs</title>
                <meta name="description" content="Blogs about web development, programming, and technology." />
                <link rel="canonical" href="/blogs" />
            </Helmet>
            <h1 className="text-5xl font-extrabold text-center">Blogs</h1>
            <div className='space-y-10 mt-10'>
                {
                    data.map((blog, i) => <Card key={i} blog={blog}></Card>)
                }
            </div>
        </div>
    );
};

const Card = ({ blog }) => {
    const { question, answer,id } = blog;

    return <div className='rounded-lg shadow-lg p-5 bg-base-300'>
        <h1 className='text-2xl font-semibold'>{`${id}. ${question}`}</h1>
        <hr className='my-2 border-t-1 border-dashed' />
        <p className='text-lg mt-4'>{answer}</p>
    </div>
}

export default Blog;

