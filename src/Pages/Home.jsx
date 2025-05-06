import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../Components/Slider';
import AppCard from '../Components/AppCard';

const Home = () => {

    const data = useLoaderData()

    const [trandingApps, setTrandingApps] = useState([])

    // console.log(data);

    const ProductivityApps = data.filter(app => app.category === 'Productivity')
    const GamingApps = data.filter(app => app.category === 'Gaming')
    const EducationApps = data.filter(app => app.category === 'Education')
    const Health_FitnessApps = data.filter(app => app.category === 'Health & Fitness')

    const slides = trandingApps

    const getTopRatedApps = (apps, topN = 4) => {
        return apps
            .sort((a, b) => b.rating - a.rating) // Sort descending
            .slice(0, topN); // Take top N
    }

    useEffect(() => {
        const topRatedApps = getTopRatedApps(data, 4);
        setTrandingApps(topRatedApps)
    }, [data])

    // console.log(ProductivityApps, GamingApps, EducationApps, Health_FitnessApps);

    return (
        <div className='popins w-11/12 mx-auto'>
            <section>
                {/* Hero Section */}
                <Slider slides={slides}></Slider>
            </section>
            {/* TrandingApps */}
            <section className='my-10'>
                <h2 className='text-xl font-bold'>Trending Apps</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
                    {
                        trandingApps.map(app => <div key={app.id} className='w-full'><AppCard app={app}></AppCard></div>)
                    }
                </div>
            </section>

            {/* ProductivityApps */}
            <section className='my-10'>
                <h2 className='text-xl font-bold'>Productivity</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
                    {
                        ProductivityApps.map(app => <div key={app.id} className='w-full'><AppCard app={app}></AppCard></div>)
                    }
                </div>
            </section>
            {/* GamingApps */}
            <section className='my-10'>
                <h2 className='text-xl font-bold'>Gaming</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
                    {
                        GamingApps.map(app => <div key={app.id} className='w-full'><AppCard app={app}></AppCard></div>)
                    }
                </div>
            </section>
            {/* EducationApps */}
            <section className='my-10'>
                <h2 className='text-xl font-bold'>Education</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
                    {
                        EducationApps.map(app => <div key={app.id} className='w-full'><AppCard app={app}></AppCard></div>)
                    }
                </div>
            </section>
            {/* Health & Fitness Apps */}
            <section className='my-10'>
                <h2 className='text-xl font-bold'>Health & Fitness</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
                    {
                        Health_FitnessApps.map(app => <div key={app.id} className='w-full'><AppCard app={app}></AppCard></div>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;