import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FaGlobeAsia, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import { GiThreeFriends } from 'react-icons/gi';
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
    const [startCounter, setStartCounter] = useState(false);

    return (
        <div>
            <p className='text-center text-4xl tracking-widest break-words'>The Hult Prize challenges young people around the <br /> world to solve the planet's most pressing issues <br /> through social entrepreneurship.</p>
            <ScrollTrigger onEnter={() => setStartCounter(true)} onExit={() => setStartCounter(false)}>
                <section class="p-6 text-gray-800 mt-20">
                    {
                        startCounter && <div class="container mx-auto flex flex-col justify-center grid-cols-1 text-center lg:flex-row gap-10">
                            <div class="flex flex-col items-center gap-3 justify-start m-2 lg:m-6">
                                <FaGlobeAsia className='text-6xl text-secondary' />
                                <div className='w-28 border-t-2 border-primary'></div>
                                <p class="text-4xl font-extrabold leading-none lg:text-5xl">+<CountUp start={0} end={130} delay={0} duration={3}/></p>
                                <p class="text-sm sm:text-base">Countries</p>
                            </div>
                            <div class="flex flex-col items-center gap-3 justify-start m-2 lg:m-6">
                                <GiThreeFriends className='text-6xl text-secondary' />
                                <div className='w-28 border-t-2 border-primary'></div>
                                <p class="text-4xl font-extrabold leading-none lg:text-5xl">+<CountUp start={0} end={189} delay={0} duration={3}/>K</p>
                                <p class="text-sm sm:text-base">Annual Participant</p>
                            </div>
                            <div class="flex flex-col items-center gap-3 justify-start m-2 lg:m-6">
                                <FaGraduationCap className='text-6xl text-secondary' />
                                <div className='w-28 border-t-2 border-primary'></div>
                                <p class="text-4xl font-extrabold leading-none lg:text-5xl">+<CountUp start={0} end={5} delay={0} duration={3}/>M</p>
                                <p class="text-sm sm:text-base">Alumni</p>
                            </div>
                            <div class="flex flex-col items-center gap-3 justify-start m-2 lg:m-6">
                                <FaHandshake className='text-6xl text-secondary' />
                                <div className='w-28 border-t-2 border-primary'></div>
                                <p class="text-4xl font-extrabold leading-none lg:text-5xl">+<CountUp start={0} end={8} delay={0} duration={3}/>k</p>
                                <p class="text-sm sm:text-base">Annual Experts</p>
                            </div>
                        </div>
                    }
                </section>
            </ScrollTrigger>
        </div>
    );
};

export default Stats;