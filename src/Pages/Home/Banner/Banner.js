import React from 'react';
import './style.css';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen banner-bottom" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/friends-look-on-laptop.jpg?width=925&format=pjpg&exif=1&iptc=1")` }}>
                <div className="hero-overlay bg-primary bg-opacity-20 banner-bottom"></div>
                <div className="hero-content text-center mt-64">
                    <div>
                        <h1 className="text-7xl font-bold text-white">How will you <br />
                            change the world?</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;