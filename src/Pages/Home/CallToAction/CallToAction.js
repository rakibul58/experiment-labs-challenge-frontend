import React from 'react';
import { Link } from 'react-router-dom';
import MyModal from '../MyModal/MyModal';

const CallToAction = () => {
    return (
        <div className='flex flex-col items-center gap-8'>
            <h1 className='text-center break-words text-7xl font-extrabold'>Want to get involved?</h1>
            <div className='flex flex-col sm:flex-row items-center gap-10'>
                <Link target='_blank' to={'/apply-now'} className='bg-gradient-to-r from-neutral via-secondary via-95% to-accent text-white text-3xl btn capitalize border-0 px-8 rounded-full hover:bg-gradient-to-l hover:shadow-2xl'>Join Us</Link>
                <button className='bg-gradient-to-r from-neutral via-secondary via-95% to-accent text-3xl btn capitalize border-0 rounded-full hover:bg-gradient-to-l hover:shadow-2xl p-[2px]'><label htmlFor="my-modal-3" className="bg-white px-[35px] rounded-full h-full w-full"><span className='text-transparent bg-clip-text bg-gradient-to-r from-neutral via-secondary via-95% to-accent hover:bg-gradient-to-l'>Login</span></label></button>
            </div>


            <MyModal/>
        </div>
    );
};

export default CallToAction;