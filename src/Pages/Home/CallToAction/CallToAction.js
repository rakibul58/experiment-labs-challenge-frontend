import React from 'react';
import MyButton from '../../../components/MyButton';

const CallToAction = () => {
    return (
        <div className='flex flex-col items-center gap-8'>
            <h1 className='text-center break-words text-7xl font-extrabold'>Want to get involved?</h1>
            <button className='bg-gradient-to-r from-neutral via-secondary via-95% to-accent text-white text-3xl btn capitalize border-0 px-8 rounded-full hover:bg-gradient-to-l hover:shadow-2xl'>Join Us</button>
        </div>
    );
};

export default CallToAction;