import React from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import CallToAction from '../CallToAction/CallToAction';
import Feature from '../Feature/Feature';
import MyHelmet from '../../../components/MyHelmet';

const Home = () => {
    return (
        <div>
            <MyHelmet>Home</MyHelmet>
            <Banner />
            <div className='my-[64px]'>
                <Stats />
            </div>
            <div className='my-[64px]'>
                <CallToAction />
            </div>
            <div className='my-[64px]'>
                <Feature />
            </div>
        </div>
    );
};

export default Home;