import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Logos/logo.png'
import MyButton from '../../../components/MyButton';

const NavBar = () => {

    const navItems = <>
        <li><NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-primary hover:text-primary bg-white' : 'hover:text-primary bg-white')}>About</NavLink></li>
        <li><NavLink to={'/how-it-works'} className={({ isActive }) => (isActive ? 'text-primary hover:text-primary bg-white' : 'hover:text-primary bg-white')}>How It Works</NavLink></li>
        <li><NavLink to={'/prize-winners'} className={({ isActive }) => (isActive ? 'text-primary hover:text-primary bg-white' : 'hover:text-primary bg-white')}>Prize Winners</NavLink></li>
        <li><NavLink to={'/stories'} className={({ isActive }) => (isActive ? 'text-primary hover:text-primary bg-white' : 'hover:text-primary bg-white')}>Stories</NavLink></li>
        <li><span className='bg-white hover:text-primary'><label htmlFor="my-modal-3">Login</label></span></li>
    </>
    return (
        <div>
            <div className="navbar flex flex-row justify-between lg:justify-center bg-base-100 py-[16px] px-10">
                <div className="">
                    <Link to={'/'}><img className='w-[120px] md:w-[170px]' src={logo} alt="company logo" /></Link>
                </div>
                <div className="">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal mx-10 gap-10 px-1 text-xl">
                            {navItems}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact transition ease-out delay-200 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                            {navItems}
                        </ul>
                    </div>
                    {/* <div className='mr-2'>
                        <MyButton><label htmlFor="my-modal-3">Login</label></MyButton>
                    </div> */}
                    <Link target='_blank' to={'/apply-now'}><MyButton>Apply Now</MyButton></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;