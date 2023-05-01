import React from 'react';

const MyButton = ({children}) => {
    return (
        <button className='bg-gradient-to-r from-neutral via-secondary via-95% to-accent btn px-6 border-0 text-white rounded-full md:text-lg hover:bg-gradient-to-l hover:shadow-2xl capitalize'>
            {children}
        </button>
    );
};

export default MyButton;