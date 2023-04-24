import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className='lg:px-40'>
            <section className="text-gray-800">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="flex flex-col-reverse lg:gap-8 lg:flex-row lg:justify-center lg:items-start">
                        <div className='lg:w-1/2 lg:mt-0 mt-8'>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">2023 Experiment Lab Prize Challenge</h3>
                            <p className="mt-3 text-lg text-gray-600">We challenge you to create a for-profit social venture in the fashion/clothing industry. Your idea must create a measurable positive impact on people and the planet and support the United Nations in meeting its SDGs by the 2030 deadline.</p>
                            <Link className='flex items-center gap-4 transition ease-in-out delay-200 hover:gap-12 duration-100000 hover:transition-all hover:underline mt-12'>Download the Challenge <FaArrowRight /></Link>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0 lg:w-1/2">
                            <img src="https://plus.unsplash.com/premium_photo-1661685876674-ab0db90d67ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className="mx-auto shadow-lg bg-gray-500 lg:min-h-[270px] max-h-[270px] w-full bg-cover bg-center" />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:gap-8 lg:flex-row-reverse lg:justify-center lg:items-start">
                        <div className='lg:w-1/2 lg:mt-0 mt-8'>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Global Finals</h3>
                            <p className="mt-3 text-lg text-gray-600">The 2022 Global Finals was held at the
                                Clinton Global Initiative Annual Meeting in New York City, with President Bill Clinton presenting the award and delivering a keynote speech.</p>
                            <Link className='flex items-center gap-4 transition ease-in-out delay-200 hover:gap-12 duration-100000 hover:transition-all hover:underline mt-12'>Watch Global Finals! <FaArrowRight /></Link>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0 lg:w-1/2">
                            <img src="https://www.rismedia.com/wp-content/uploads/2019/12/winning_team_1077521392.jpg" alt="" className="mx-auto shadow-lg bg-gray-500 lg:min-h-[270px] max-h-[270px] w-full bg-cover bg-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;