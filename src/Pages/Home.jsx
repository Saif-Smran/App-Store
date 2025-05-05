import React from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../Components/Slider';

const Home = () => {

    const data = useLoaderData()

    // console.log(data);

    const ProductivityApps = data.filter(app => app.category === 'Productivity')
    const GamingApps = data.filter(app => app.category === 'Gaming')
    const EducationApps = data.filter(app => app.category === 'Education')
    const Health_FitnessApps = data.filter(app => app.category === 'Health & Fitness')

    const slides = ProductivityApps

    console.log(ProductivityApps, GamingApps, EducationApps, Health_FitnessApps);

    return (
        <div className='popins w-11/12 mx-auto'>
            <section>
                {/* Hero Section */}
                <Slider slides={slides}></Slider>
            </section>
            
        </div>
    );
};

export default Home;