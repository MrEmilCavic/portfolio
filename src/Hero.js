import React, { useState, useEffect } from 'react';

function Hero() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        },500);
    },[]);

    return (
        <div id="Hero" className={`flex h-[100%] text-text-primary justify-center lg:justify-start 
            p-6 lg:ml-20 mx-2 w-full lg:w-[100%] transition-all duration-500 ease-out transform
            ${ loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
            <div className="max-w-[675px] bg-primary/55 rounded-lg shadow-lg p-6 mb-6 ">
                <p className="text-4xl mb-2">About</p>
                <p className="text-2xl mb-2">
                    Full-Stack Developer by Passion
                </p>
                <p className="md:text-lg">    
                With a background in business administration and project management, 
                I transitioned to web development over the past 5 years. I specialize 
                in creating high-performance web apps that transform complex 
                user needs into intuitive, delightful experiences.
                </p>
                <p className="md:text-lg mt-2">
                Always curious, I enjoy staying updated on the latest web development trends. Outside 
                of work you can find me spending time with loved ones, exploring the beach, reading 
                detective stories, or watching rugby.
                </p>
            </div> 
        </div>
    )
};

export default Hero;