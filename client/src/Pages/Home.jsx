import React, { useState } from 'react'
import Logo from '../Components/Logo'
import { BsDiscord } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Home() {
    const[scroll,setScroll] = useState(false);
    const[spaceHover,setSpaceHover] = useState(false);
    const handleScroll = ()=>{
        if(window.scrollY > 200){
            setScroll(true);
        }else{
            setScroll(false);
        }
    }
    const handleSpaceHoverEnter = ()=>{
        setSpaceHover(true)
    }
    const handleSpaceHoverLeave = ()=>{
        setSpaceHover(false)
    }

    window.addEventListener('scroll',handleScroll);
    // first section
    useGSAP(()=>{
        
        gsap.from('.first',{
            
            y:"100vh",
            delay: 1,
            ease: 'poweri.out'
        })
        gsap.from('.making',{
            scale: 0,
            duration: 0.5,
            delay: 2
        })
        gsap.from('.opportunities',{
            scale: 1.2,
            duration: 0.5,
            delay: 1.5
        })
        gsap.from('.logo',{
            scale: 0,
            duration: 0.5,
            delay: 1.5
        })
        const img = document.querySelector("img.logo");
        img.onload = () => {
            const len = img.offsetHeight / 2;
            gsap.from('.drop', {
                opacity: 0,
                y: -len,
                duration: 2,
                delay: 3
            });
        };
    });
    // second section
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start:'top 85%',
                end: 'top 75%',
                toggleActions: "play none none none",
                once: true,
            }
        });
        tl.from('.second',{
            opacity: 0,
            y: "20vh",
            delay: 0.5,
            ease: "poweri.out",
        })
        tl.from('.text',{
            y: "30vh",
            opacity: 0,
            delay: 2,
            ease: "poweri.out"
        })
        // 
    })
    // third section
    useGSAP(()=>{
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start:'top 85%',
                end: 'top 75%',
                toggleActions: "play none none none",
                
            }
        });
        t2.from('.third',{
            opacity: 0,
            y: "15vh",
            delay: 0.5,
            ease: "poweri.out",
        })
        t2.from('.team_image',{
            opacity: 0,
            x: "-60vw",
            delay: 0.5,
        })
        // t2.from('.paint_first',{
        //     opacity: 0,
        //     scale: 1,
        //     x: "-50vw",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: 0.1,
        // })
        // t2.to('.paint_second',{
        //     scale: 1,
        //     x: "100%",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: -0.2,
        // })
        // t2.from('.paint_seconddiv',{
        //     opacity: 0,
        //     scale: 1,
        //     x: "-50vw",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: 0.6,
        // })
        // t2.to('.paint_second',{
        //     scale: 1,
        //     x: "100%",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: -0.2,
        // })
        // t2.from('.paint_third',{
        //     opacity: 0,
        //     scale: 1,
        //     x: "-50vw",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: 0.7,
        // })
        
        // t2.to('.paint_second',{
        //     scale: 1,
        //     x: "100%",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: -0.2,
        // })
        // t2.from('.paint_fourth',{
        //     opacity: 0,
        //     scale: 1,
        //     x: "-50vw",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: 0.8,
        // })
        // t2.to('.paint_second',{
        //     scale: 1,
        //     x: "100%",        
        //     duration: 1.5,    
        //     ease: "power2.out",
        //     delay: -0.2,
        // })
        
        
        
    })
    useGSAP(()=>{
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".first_para",
                start:'top 85%',
                end: 'top 75%',
                toggleActions: "play none none none",
                markers: true,
            },
            
        });
        tl2.from('.first_para',{
            opacity: 0,
            y: "10vh",
        })
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".second_para",
                start:'top 85%',
                end: 'top 75%',
                toggleActions: "play none none none",
                markers: true,
            },
            
        });
        tl3.from('.second_para',{
            opacity: 0,
            y: "10vh",
        })
        
    })
    useGSAP(()=>{
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".doing",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl1.from(".doing",{
            opacity: 0,
            y: "10vh",
        })
        
        const tl1b = gsap.timeline({
            scrollTrigger: {
                trigger: ".space",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl1b.from(".space",{
            opacity: 0,
            y: "10vh",
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sites",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl2.from(".sites",{
            opacity: 0,
            y: "10vh",
        })

    })
    useGSAP(()=>{
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".jacket",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl1.from(".jacket",{
            opacity: 0,
            y: "10vh",
        })
        document.querySelectorAll('.social').forEach((social, index) => {
            gsap.from(social, {
                scrollTrigger: {
                    trigger: social,
                    start: 'top 85%',
                    end: 'top 75%', 
                    toggleActions: "play none none none", 
                    markers: true,
                },
                y: '10vh',
                opacity: 0,
                duration: 1,
                ease: 'power1.out',
                delay: index * 0.2,
            });
        });

    })
    // last section
    useGSAP(()=>{
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mobile",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl1.from(".mobile",{
            opacity: 0,
            y: "10vh",
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact_text",
                start: "top 85%",
                end: "top 75%",
                toggleActions: "play none none none",
                markers: true,
            }
        })
        tl2.from(".contact_text",{
            opacity: 0,
            y: "10vh",
        })
    })
  return (
    <div className=' bg-black'>
        {/* Header */}
        {/* <div className={`${scroll ? "visible" : "hidden"} fixed py-2 bg-opacity-1 w-full`}>
            <div className='px-2 mx-20'>
                <div className='h-16 flex flex-row items-center justify-between '>
                    <a href='google.com' >
                        <img src="/logo-svg.svg" alt="logo-svg" className='hidden sm:block'/>
                    </a>
                    <div>
                        <img src="/permissionless_logo.svg" alt="permissionless logo" />
                    </div>
                    
                    <div></div>
                </div>
            </div>
        </div> */}

        {/* Hero section */}
        
        <section
            className="h-[100vh] w-[100vw] first"
        >   
            <img src="/hero-banner.jpg" alt="hero-banner" className="absolute z-0 object-fit overflow-hidden h-full w-full"/>
            <div className='flex flex-row h-[90%] w-screen  justify-center relative z-10'>
                
                <div className='w-fit pt-[8%]'>
                    <div className='making'>
                        <img src="/making.webp" alt="making" className='h-20 px-[25%] '/>
                    </div>
                    
                    <img src="/opportunities.webp" alt="opportunities" className='making h-20'/>
                    <img src="/permissionless_logo.svg" alt="permissionless_logo" className='opportunities h-25 w-full px-3 my-[-4%]'/>
                    
                    <div className='w-2/4 mx-auto pt-2 relative'>
                        <img src="/image(1).webp" alt="splash" className='absolute z-0 logo'/>
                        <img src="/image(2).webp" alt="drop" className='z-10 drop'/>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        {/* Dnt mint */}
        <section className='bg-black relative h-[80%] w-full z-0 second'>
            <div className='bg-custom_green z-index absolute h-[70%] w-full bottom-0 z-10'>
                <img src="/bg-line-3.svg" alt="bg-lines-2 " className='absolute z-20 h-[100%] w-[50%] ml-[30%] mr-[20%]'/>
                <div className='flex flex-row justify-between items-center relative z-30 h-1/5 w-[80%] mx-[10%] my-[15%] text'>
                    <h2 className='my-[30%] ml-[5%]'>
                        <span className='text-black font-bold text-4xl'>Advancing Humanity,</span><br />
                        <span className='text-black font-bold text-4xl'>Almost a State.</span>
                    </h2>
                    <div>
                        <button className='bg-custom_green px-12 py-2 text-black border-black border-2 relative z-50'>
                            OUR MISSION
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='h-[100%] w-[100%] relative z-40 flex flex-row justify-center items-center '>
                <img src="dont-mint.webp" alt="dont-mint"  className='h-[70%]'/>
            </div>
            
        </section>

        {/* WHO ARE WE */}
        <section className='bg-black relative third'>
            <div className='flex flex-col md:flex-row my-24 justify-center'>
                <div className='h-full md:w-[60%] team_image relative z-50'>
                    <img src="/team01.webp" alt="team image" />
                </div>
                <div className='flex flex-col md:w-[40%] h-full w-full justify-between'>
                    <div className='w-full  relative h-full paint_first  z-40'>
                        <div className='w-full h-[15vw] md:h-[8vw] z-20 bg-custom_green absolute paint_second'></div>
                        <h2 className='relative text-white  text-left w-full font-bold italic text-[15vw] md:text-[6vw]'>WHO ARE WE</h2>
                    </div>
                    <div className='w-full  relative h-full paint_seconddiv'>
                        <div className='w-full h-[15vw] md:h-[8vw] z-20 bg-custom_green absolute paint_second'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-[15vw] md:text-[6vw]'>WHO ARE WE</h2>
                    </div>
                    <div className='w-full  relative h-full paint_third'>
                        <div className='w-full h-[15vw] md:h-[8vw] z-20 bg-custom_green absolute paint_second'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-[15vw] md:text-[6vw]'>WHO ARE WE</h2>
                    </div>
                    <div className='w-full  relative h-full paint_fourth'>
                        <div className='w-full h-[15vw] md:h-[8vw] z-20 bg-custom_green absolute paint_second'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-[15vw] md:text-[6vw]'>WHO ARE WE</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-evenly items-start my-[2vw] first_para'>
                <div>
                    <h2 className='text-gray-700 text-[1.5vw] text-nowrap'>We are everywhere</h2>
                </div>
                <div>
                    <h2 className='text-gray-700 text-[1.5vw] text-nowrap'>
                        <span className=''>We want to build a new world, with you in the middle.</span><br />
                        <span>Self, Sovereign, Custodian.</span>
                    </h2>
                </div>
                <div>
                    <h2 className='text-gray-700 text-[1.5vw] text-nowrap'>Also, we speak satire, house & techno.</h2>
                </div>

            </div>
            <div className='flex flex-row w-[80%] mx-[10%] my-[1.5vw] justify-evenly second_para'>
                <p className='text-gray-400 text-left w-1/2'>
                    Permissionless is committed to build public infrastructure for the new web. We advocate technology as a medium for solving the most complex problems of mankind. Annoyed that instead of using this to enable various efficient trustless systems with open access, profit making become the main focus. We would like to change that, now.
                </p>
                <p className='text-gray-300 text-[3vw] w-1/2 ml-6'>
                    “The Internet is freedom from the limitations of land.”
                </p>
            </div>
            <h2 className="text-white">heleo world</h2>
        </section>
        {/* our work */}
        <section className='relative bg-black h-[160vh] w-[100%]'>
            <div className='relative z-0 h-[20vh] w-[100vw] doing'>
                <img src="/what-are-we-doing.svg" alt="what-are-we-doing" />
            </div>
            {/* Spaceship */}
            <div className={`${spaceHover? "bg-[url('/house-colored.jpg')]" : "bg-[url('/house.jpg')]"} h-[80vh] w-[70vw] mx-[12vw] mt-[-10vh] relative z-20 space`} onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave()}>
                <div className='flex flex-col justify-between h-full mx-5 my-5'>
                    <div>
                        <h2 className={`${spaceHover? "text-purple-500":"text-gray-400"} text-[8vh]`}>Spaceship</h2>
                        <h2 className={`${spaceHover? "text-purple-500":"hidden"} text-[4vh]`}>Free to access playground open for all the contributors of the web</h2>
                    </div>
                    <div className='my-10 ml-5'>
                        <h2 className={`${spaceHover? "text-purple-500": "hidden"} text-[2vh]`}>Decentralized Autonomous Organizationa (DAOs) with AI Governance <br /> 
                        <span className={`${spaceHover? "text-purple-500":"hidden"} text-[2vh]`}>➜Know More</span> </h2>
                    </div>
                </div>
            </div>
            {/* our work product */}
            <div className='flex flex-row justify-between h-[80vh] w-[70vw] my-[5vh] mx-[12vw] sites '>
                <div className="h-[60vh] w-[35vw] border-2 border-custom_green flex items-center relative mr-[3vh]" onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave}>
                    <div className="h-[26vh] w-full my-auto bg-no-repeat bg-center bg-[url('/product-bg.svg')] absolute z-0"></div>
                    <div className="flex flex-row h-[55vh] w-[25vw] justify-center items-center mx-auto relative z-10 ">
                        <img src="/image(3).webp" alt="" className={`${spaceHover? "h-[40vh] w-[40vh]":"h-[20vh] w-[20vh]"} mx-auto my-auto`}/>
                    </div>
                    <div className={`h-[60vh] w-[30vw] absolute z-20 flex flex-col justify-between mx-5 `}>
                        <div>
                            <h2 className={`text-white my-[1vh]  ${spaceHover? "text-[8vh]":"text-[5vh]"}`}>DoAnything.ai</h2>
                        </div>
                        <div className={`text-white my-[1vh] text-[3vh] ${spaceHover? "text-[2vh]" : "hidden"}`}>
                            <h2 className='mb-[3vh]'>
                                open virtual machine for <br /> Decentralized apps
                            </h2>
                            <h2>Know more</h2>
                            <h2 className={`${spaceHover ? "text-[2vh]":"hidden"}`}>AI for real-time multilingiual communication</h2>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[35vw] border-2 border-custom_green flex items-center relative ml-[3vh]" onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave}>
                    <div className="h-[26vh] w-full my-auto bg-no-repeat bg-center bg-[url('/product-bg.svg')] absolute z-0"></div>
                    <div className="flex flex-row h-[55vh] w-[25vw] justify-center items-center mx-auto relative z-10 ">
                        <img src="/image(3).webp" alt="" className={`${spaceHover? "h-[40vh] w-[40vh]":"h-[20vh] w-[20vh]"} mx-auto my-auto`}/>
                    </div>
                    <div className={`h-[60vh] w-[30vw] absolute z-20 flex flex-col justify-between mx-5 `}>
                        <div>
                            <h2 className={`text-white my-[1vh]  ${spaceHover? "text-[8vh]":"text-[5vh]"}`}>DoAnything.ai</h2>
                        </div>
                        <div className={`text-white my-[1vh] text-[3vh] ${spaceHover? "text-[2vh]" : "hidden"}`}>
                            <h2 className='mb-[3vh]'>
                                open virtual machine for <br /> Decentralized apps
                            </h2>
                            <h2>Know more</h2>
                            <h2 className={`${spaceHover ? "text-[2vh]":"hidden"}`}>AI for real-time multilingiual communication</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* Sociai network section */}
        <section className='relative h-[80vh] w-[100vw] bg-black'>
            <div className='flex md:flex-row flex-col h-[80vh] md:h-[160vh] w-[70vw] mx-auto jacket'>
                <div className='h-[60vh] w-[30vw] mr-[5vw] relative z-0'>
                    <div className="h-[60vh] w-[30vw] mx-auto absolute z-0 flex items-center">
                        <img src="bg-lines-2.png" alt=""  className="my-auto"/>
                    </div>
                    <div className='h-[60vh] w-[30vw] absolute z-10 flex justify-center'>
                        <img src="/image(4).webp" alt="jacket" />
                    </div>
                    <div className='h-[20vh] w-[30vw] my-[20vh] absolute z-20 text-white text-[9vh] flex items-center'>
                        <div className="relative flex items-center">
                            
                            <img
                                src="/paint-brush-2.png"
                                alt="highlight"
                                className="absolute w-full h-full top-0 left-0 z-30 object-contain"
                            />
                            <div className="font-bold italic whitespace-nowrap relative z-10">
                            DONT
                            </div>
                        </div>
                            <div className='font-bold italic whitespace-nowrap ml-4'>JOIN US</div>
                    </div>
                    
                    
                    
                </div>
                <div className='h-[60vh] w-[30vw] flex flex-col'>
                    {/* DISCORD */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/discord.png" alt="discord logo" className='h-12 w-12 grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-gray-400 text-[8vh] ml-4 italic bg-clip-text group-hover:text-transparent group-hover:text-blue-500 transition duration-300'>DISCORD</h2>
                        </div>
                        {/* INSTAGRAM */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/instagram.png" alt="discord logo" className='h-12 w-12 grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-gray-400 text-[8vh] ml-4 italic bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-red-800 transition duration-300'>INSTAGRAM</h2>
                        </div>
                        {/* YOUTUBE */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/youtube-new.png" alt="discord logo" className='h-12 w-12 grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-gray-400 text-[8vh] ml-4 italic bg-clip-text group-hover:text-transparent group-hover:text-red-700 transition duration-300'>YOUTUBE</h2>
                        </div>
                        {/* TWITTER */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/twitter.png" alt="discord logo" className='h-12 w-12 grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-gray-400 text-[8vh] ml-4 italic bg-clip-text group-hover:text-transparent group-hover:text-blue-500 transition duration-300'>TWITTER</h2>
                        </div>
                        {/* LINKEDIN */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/linkedin.png" alt="discord logo" className='h-12 w-12 grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-gray-400 text-[8vh] ml-4 italic bg-clip-text group-hover:text-transparent group-hover:text-blue-500 transition duration-300'>LINKEDIN</h2>
                        </div>

                </div>
            </div>
            

        </section>
    
        {/* DONT CONTACT US */}
        <section className="h-[50vh] w-[100vw] bg-black relative">
            <div className="h-[50vh] w-[100vw] flex justify-center relative z-0">
                <div className='h-[30vh] w-[30vw] mt-[10vh] relative z-10 mobile'>
                    <img src="/bg-lines-2.svg" alt="bg-lines-2" />      
                </div>
                
                <div className="h-[90vh] w-[20vw] flex justify-center items-center mx-auto absolute z-20 mobile">
                    <img src="/mobile.png" alt=""  className='h-full w-full'/>
                </div>
                <div className='w-full h-[20vh] mt-[15vh] absolute z-30 contact_text'>
                    <img src="dont-contact-us-text.svg" alt="" />
                </div>
            </div>
            
        </section>
        {/* footer */}
        <section className="bg-gray-700 bg-opacity-8 h-[10vh] w-[100vw] pt-[30vh] pb-[20vh]">
            <div className='h-[10vh] w-full flex flex-row justify-around items-center relative z-20'>
                <div className='text-white text-[2vh]'>
                    <a href="doanything.ai">Doanything.ai </a>
                    <a href="dsync.ai"> Dsync.ai</a>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <img src="/logo-full.png" alt="logo" className='h-[10vh] w-[15vw]'/>
                </div>
                <div className='flex flex-row justify-around items-center'>
                    <a href="google.com">
                        <BsDiscord size={25} className='text-gray-500 hover:text-blue-600 hover:scale-150 transition-colors duration-300 mr-2'/>
                    </a>
                    <a href="">
                        <FaInstagram size={25} className='text-gray-500 hover:text-blue-600 hover:scale-150 transition-colors duration-300 mx-2'/>
                    </a>
                    <a href="">
                        <FaYoutube size={25} className='text-gray-500 hover:text-blue-600 hover:scale-150 transition-colors duration-300 mx-2'/>
                    </a>
                    <a href="">
                        <FaTwitter size={25} className='text-gray-500 hover:text-blue-600 hover:scale-150 transition-colors duration-300 mx-2'/>
                    </a>
                    <a href="">
                        <FaLinkedin size={25} className='text-gray-500 hover:text-blue-600 hover:scale-150 transition-colors duration-300 mx-2'/>
                    </a>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Home