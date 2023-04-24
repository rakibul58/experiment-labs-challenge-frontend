import React, { useEffect } from 'react';
import MyHelmet from '../../../components/MyHelmet';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ApplyNow = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='px-10 md:px-40 py-20'>
            <MyHelmet>Apply</MyHelmet>
            <h1 className='font-bold text-4xl'>There are 2 ways to join the movement!</h1>
            <p className='text-lg mt-2 text-gray-700 font-light'>
                You can join as a School or Individual, select the path you are interested in to learn more about
            </p>
            <section className="text-gray-800">
                <div className="mt-12 flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div className="lg:w-1/2 flex flex-col-reverse gap-8 justify-center items-start">
                        <div className='lg:mt-0 mt-8 flex justify-between items-center w-full'>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Join as School</h3>
                            <Link to={'/apply-now/school'} className='flex items-center gap-2 transition ease-in-out delay-200 hover:gap-5 duration-100000 hover:transition-all hover:underline'>Apply Now! <FaArrowRight /></Link>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://plus.unsplash.com/premium_photo-1661685876674-ab0db90d67ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className="mx-auto shadow-lg bg-gray-500 max-h-[310px] w-full bg-cover bg-center" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col-reverse gap-8 justify-center items-start">
                        <div className=' lg:mt-0 mt-8 flex justify-between items-center w-full'>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Join as Individual</h3>
                            <Link to={'/apply-now/individual'} className='flex items-center gap-2 transition ease-in-out delay-200 hover:gap-5 duration-100000 hover:transition-all hover:underline'>Apply Now! <FaArrowRight /></Link>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://www.rismedia.com/wp-content/uploads/2019/12/winning_team_1077521392.jpg" alt="" className="mx-auto shadow-lg bg-gray-500 max-h-[310px] w-full bg-cover bg-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ApplyNow;