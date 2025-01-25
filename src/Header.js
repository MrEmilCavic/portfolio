import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { ReactComponent as Logo} from './util/emillogo-comic-ink-170125.svg';
const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function Header() {
    const [fadeIn, setFadeIn] = useState(false);
    const [appear, setAppear] = useState(false);
    const [moveTop, setMoveTop] = useState(false);
    const [moveHead, setMoveHead] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [{ freq, factor, scale, opacity }] = useSpring(
        () => ({
          delay: 500,
          immediate: fadeIn,
          to: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
          from: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
          config: { duration: 2000 },
        }),
        []
      )

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        },100);
        setTimeout(() => {
            setAppear(true);
        },2600);
        setTimeout(() => {
            setMoveTop(true);
        },4000)
        setTimeout(() => {
            setMoveHead(true);
        },5000); 
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <section id="Header" className="flex justify-center flex-col md:items:center md:flex-row p-6 mb-16 max-w-full">
            <div className={`flex flex-wrap md:justify-center items-center md:w-[100%] text-primary
                            transition-all duration-1000 ease-in-out transform ${
                                appear ? 'opacity-100 text-8xl md:text-10xl translate-y-1 h-screen' : 'opacity-0 translate-y-full text-8xl md:text-10xl h-screen'
                            } ${ moveTop ? 'max-h-40 translate-y-1' : 'max-h-screen translate-y-1'}
                            ${ scrolled ? 'fixed z-10 mt-128 md:mt-48 lg:mt-64 opacity-5 text-secondary' : 'relative opacity-100 text-primary' }
                            `}>
                <p id='title00' className={`transition-all duration-1000 ease-in transform
                                            ${ moveHead ? 'md:text-8xl mr-0 ' : 'md:text-10xl mr-12'}
                                            `}> emil </p>
                <p id='title01' className={`transition-all duration-1000 ease-in transform
                                            ${ moveHead ? 'md:text-8xl ml-10 -mt-6 md:-ml-24 md:mt-36' :'md:text-10xl ml-0 mt-0 ' }
                                            `}> čavić</p>
            </div>
            <div className="fixed z-0 flex flex-col justify-center items-center text-secondary text-8xl">
                <animated.svg className='w-64 md:w-128' style={{ scale, opacity }} viewBox="0 0 897 1200">
                    <defs>
                    <filter id="water">
                        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
                        <AnimFeDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        in="SourceGraphic"
                        in2="TURB"
                        result="DISP"
                        scale={factor}
                        />
                    </filter>
                    </defs>
                    <g filter="url(#water)">
                    <Logo fill='#ffe9ad' stroke="none" />
                    </g>
                </animated.svg> 
                <p className={`transition-all duration-1000 ease-in transform
                    ${fadeIn ? 'opacity-0 scale-10' : 'opacity 100 scale-100'}`}>Hello!</p>
            </div>
        </section>
    );
};

export default Header;