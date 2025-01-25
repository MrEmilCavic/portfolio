import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Footer() {
    const [isView, setIsView] = useState(false);
    const viewRef = useRef(null);

    useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                    setIsView(entry.isIntersecting);
                }, {
                    threshold: 0.1
                }
            );
            if (viewRef.current) {
                observer.observe(viewRef.current);

            }
            return () => {
                if (viewRef.current) {
                    observer.unobserve(viewRef.current);
                }
            };
        });

    return(
        <div id='Footer' className={`absolute flex flex-col flex-wrap justify-center 
            items-center text-primary text-5xl md:text-10xl p-6 bottom-10 md:bottom-30 lg:bottom-80`}>
            <p ref={viewRef} className={` transition-all duration-1000 ease-out
                ${ isView ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-full'}`}
                >Thank you for coming by!</p>
            <p ref={viewRef} className={`transition-all duration-1000 delay-1000 
                ease-out ${ isView ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-full'}`}
                >
                Have a good day!
                </p>
        </div>
    );
    
};

export default Footer;