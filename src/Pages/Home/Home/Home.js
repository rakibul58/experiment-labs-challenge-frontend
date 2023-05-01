import React, { useEffect, useRef } from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import CallToAction from '../CallToAction/CallToAction';
import Feature from '../Feature/Feature';
import MyHelmet from '../../../components/MyHelmet';
import MyModal from '../MyModal/MyModal';
import { useLocation } from 'react-router-dom';

const Home = () => {
    // const pathname = useLocation();

    // useEffect(() => {
    //     window.onload = function () {
    //         let modal = document.getElementById("my-modal-3");
    //         if (modal) {
    //             modal.click();
    //         }
    //     }
    // },[pathname]);

    return (
        <div>
            <MyHelmet>Home</MyHelmet>
            <Banner />
            <div className='my-[150px]'>
                <Stats />
            </div>
            <div className='my-[150px]'>
                <CallToAction />
            </div>
            <div className='my-[150px]'>
                <Feature />
            </div>
            {/* <MyModal /> */}
        </div>
    );
};

export default Home;