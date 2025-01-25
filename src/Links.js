import React, { useState, useEffect } from 'react';
import github from './util/github.png'
import linkedin from './util/linkedin.png'
import mail from './util/mail.png'

function Links() {
    const email = "mr.emil.cavic@gmail.com";
    const [hover, setHover] = useState(false);
    const [alert, setAlert] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [unvisible, setUnvisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        },500);
    },[]);

    const showSuccess = () => {
        setAlert(true);
        /*
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 100);
        */
        setTimeout(() => {
            setUnvisible(true);
        }, 100);
        setTimeout(() => {
            setUnvisible(false);
        },2300);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    const copyMail = (e) => {
        e.preventDefault();
        showSuccess();
        navigator.clipboard.writeText(email);
    }

    return (
        <div id="links" className={`transition-all w-full duration-500 ease-in-out transform 
            ${ loaded ? 'opacity-100 translate-x-0 fixed z-50 right-0 md:top-0 top-[20%]' 
                    : 'opacity-0 translate-x-full' } `}>
            {alert &&  <div 
                            className={`fixed z-50 top-5 left:1/4 md:left-1/3 lg:left-1/2 transform -translate-x-1/2 bg-bgdark 
                                text-primary text-2xl px-4 py-2 rounded-lg transition-opacity 
                                duration-1000 ease-out ${ unvisible ? "opacity-100" : "opacity-0" } 
                                 `}>
                           I look forward to hearing from you!
                        </div>
            }
            <div className="fixed flex flex-col md:flex-row right-0 top-[20%] transform -translate-y-1/2 
                    md:top-0 md:transform-none md:-translate-y-0 md:m-6 z-50
                    rounded-l-lg md:rounded-lg text-text-secondary bg-accent/60 md:bg-secondary/80 text-xl"
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <a href="https://github.com/MrEmilCavic" target="_blank"><img src={github} alt="github" className="p-2 mx-1 md:hidden w-12 cursor-pointer" /></a>
                        <a href="https://www.linkedin.com/in/emil-cavic/" target="_blank"><img src={linkedin} alt="linkedin" className="p-2 mx-1 md:hidden w-12 cursor-pointer" /></a>
                        <a href={`mailto:${email}`}><img src={mail} alt="mail" className="p-2 mx-1 md:hidden w-12 cursor-pointer" /></a>
                        <p className="p-4 mx-2 hover:text-accent hover:underline cursor-pointer hidden md:block"><a href="https://github.com/MrEmilCavic" target="_blank">github</a></p>
                        <p className="p-4 mx-2 hover:text-accent hover:underline cursor-pointer hidden md:block"><a href="https://www.linkedin.com/in/emil-cavic/" target="_blank">linkedin</a></p>
                        <p className="p-4 mx-2 hover:text-accent hover:underline cursor-pointer hidden md:block"><a href={`mailto:${email}`} onContextMenu={copyMail}>e-mail me</a></p>
            </div>
            <div className={`fixed hidden md:block z-50 w-96 top-24 right-0 mx-6 p-2  rounded-md bg-secondary/80 text-text-secondary
                        transition-all transform ${
                            hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                        } duration-1000 ease-in-out`}
                        >
                        <p className="py-2">The links open in new tabs. </p>
                        <p>Left-click the e-mail link to open a new message with your standard e-mail
                        app. </p>
                        <p className="py-2">Right-click to save to your clipboard.</p>
            </ div>
        </div>
    );

};

export default Links;