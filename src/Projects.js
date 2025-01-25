import React, { useState, useEffect, useRef } from 'react';

function Projects() {
    const [highlight, setHighlight] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [isView, setIsView] = useState(false);
    const viewRef = useRef(null);

    const projects = [{
            id: 1,
            title: 'garage-idea',
            description: 'Small example of a full-stack web app hosted on Azure. Sign-up or log in to see the data and create/edit/delete data entries. (Careful: since I use the free version the web-service is often asleep, if you reach out to me a quick restart should do the trick.)',
            tools: ['TailwindCSS', 'React','C#', 'ASP.NET Core', 'Azure','MS SQL'],
            url: 'https://mremilcavic.github.io/garage-idea/'
        },
        {
            id: 2,
            title: 'scienceportfol.io',
            description: 'A SaaS to easily create and share your scienceportfolio. I joined this project to work on the development side.',
            tools: ['TailwindCSS','Nextjs','MongoDB'],
            url: 'https://scienceportfol.io/'
        },
        {
            id: 3,
            title: 'E-commerce platform',
            description: 'More than a webshop, a web-app that offers an engaging and satisfying experience to customers, while it enables the owner to easily manage the business, making use of a smart automation system.',
            tools: ['TailwindCSS','TypeScript','React','Node','Firebase','NoSQL'],
            url: ''
        },
        {
            id: 4,
            title: 'Social network app',
            description: 'Designed to make it easier to connect with old friends and make new ones over shared interests and activities',
            tools: ['TailwindCSS','TypeScript','React','Node','Firebase','NoSQL'],
            url: ''
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsView(entry.isIntersecting);
            }, {
                threshold: 0.07
            }
        );
        if (viewRef.current && !setLoaded) {
            observer.observe(viewRef.current);
        }
        return () => {
            if (viewRef.current) {
                observer.unobserve(viewRef.current);
            }
        };
    }, []);

    return(
        <div id="Projects" ref={viewRef} className={`flex justify-center relative z-40 w-full 
            lg:w-[100%] text-text-primary p-6 mx-2 lg:mr-24 transition-all duration-1000 ease-in-out
            ${ loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
            ${ isView ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-1'}`}>
            <div className="max-w-[675px] bg-primary/65 rounded-lg shadow-lg p-6 mb-6">
                <p className="text-4xl mb-2">Projects</p>
                <p className="text-lg mb-6">
                    It's not much, but its honest work:
                </p>
                {projects.map((proj) => (
                    <div key={proj.id}>
                        {proj.id === 3 &&
                        <p className="text-2xl mb-2">Currently working on:</p>
                        }
                        <div onMouseEnter={() => setHighlight(proj.id)} onMouseLeave={() => setHighlight(null)}
                            className={`flex flex-col justify-center p-4 mb-6 bg-primary/40 rounded-lg
                                transition-opacity duration-700 ${
                                    highlight === proj.id
                                    ? 'opacity-120' 
                                    :  highlight === null
                                    ? 'opacity-85'
                                    : 'opacity-45'
                                }`}>
                            <a href={proj.url} target='_blank'>
                                <p className="text-2xl mb-2">{proj.title}</p>
                                {proj.description}
                                <div className='flex flex-row flex-wrap lg:justify-end mt-2'>
                                {proj.tools.map((tools, idx) => (
                                    
                                        <p key={idx} className='bg-primary/65 rounded-xl p-2 mx-2 mt-2'>{tools}</p>
                                ))
                                }
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
                
                <a href="https://github.com/MrEmilCavic?tab=repositories" target='_blank'><p className="p-4 text-2xl underline hover:text-accent hover:underline cursor-pointer">
                   View all projects including the "the early works" on github 
                </p></a>
            </div>
        </div>
    );
};

export default Projects;