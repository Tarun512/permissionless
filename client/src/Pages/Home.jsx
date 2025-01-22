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
        t2
        .to({},{duration: 1})
        .from('.div1',{
            opacity: 0,
            scale: 1,
            x: "-50vw",        
            duration: 1,    
            ease: "power2.out",
            
        }, "-=0.9")
        .from('.div2',{
            opacity: 0,
            scale: 1,
            x: "-50vw",        
            duration: 1,    
            ease: "power2.out",
            
        }, "-=0.9")
        .from('.div3',{
            opacity: 0,
            scale: 1,
            x: "-50vw",        
            duration: 1,   
            ease: "power2.out",
            
        }, "-=0.9")
        .from('.div4',{
            opacity: 0,
            scale: 1,
            x: "-50vw",        
            duration: 1,    
            ease: "power2.out",
            
        }, "-=0.9")
        // div2
        t2
        .to({},{duration: 1})
        .to('.div1_paint',{
            scale: 1,
            x: "100%",        
            duration: 1,    
            ease: "power2.out",
            
        }, "-=0.9")
        .to('.div2_paint',{
            scale: 1,
            x: "100%",        
            duration: 1,    
            ease: "power2.out",
            
        }, "-=0.9")
        .to('.div3_paint',{
            scale: 1,
            x: "100%",        
            duration: 1,    
            ease: "power2.out",
            delay: 0.2,
        }, "-=0.9")
        .to('.div4_paint',{
            scale: 1,
            x: "100%",        
            duration: 1,    
            ease: "power2.out",
            delay: 0.2,
        }, "-=0.9")
        
    })
    // third part second half
    // useGSAP(()=>{
    //     const t2 = gsap.timeline();
    //     t2.from('.div1',{
    //         opacity: 0,
    //         scale: 1,
    //         x: "-50vw",        
    //         duration: 1.5,    
    //         ease: "power2.out",
            
    //     },"+=0.1")
    //     .from('.div2',{
    //         opacity: 0,
    //         scale: 1,
    //         x: "-50vw",        
    //         duration: 1.5,    
    //         ease: "power2.out",
            
    //     },"+=0.1")
    //     .from('.div3',{
    //         opacity: 0,
    //         scale: 1,
    //         x: "-50vw",        
    //         duration: 1.5,    
    //         ease: "power2.out",
            
    //     },"+=0.1")
    //     .from('.div4',{
    //         opacity: 0,
    //         scale: 1,
    //         x: "-50vw",        
    //         duration: 1.5,    
    //         ease: "power2.out",
            
    //     },"+=0.1")
    //     // div2
    //     t2
        
    //     .to('.div1_paint',{
    //         scale: 1,
    //         x: "100%",        
    //         duration: 1,    
    //         ease: "power2.out",
            
    //     })
    //     .to('.div2_paint',{
    //         scale: 1,
    //         x: "100%",        
    //         duration: 1,    
    //         ease: "power2.out",
            
    //     })
    //     .to('.div3_paint',{
    //         scale: 1,
    //         x: "100%",        
    //         duration: 1,    
    //         ease: "power2.out",
    //         delay: 0.2,
    //     })
    //     .to('.div4_paint',{
    //         scale: 1,
    //         x: "100%",        
    //         duration: 1,    
    //         ease: "power2.out",
    //         delay: 0.2,
    //     })
    // })
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
    <div className=' bg-black overflow-hidden'>
        {/* Header */}
        <div className={`${scroll ? "visible" : "hidden"} fixed top-0 left-0 py-2 bg-opacity-1 w-full z-[60]`}>
            <div className='px-2 mx-20'>
                <div className='h-16 flex flex-row items-center justify-between'>
                <a href='google.com'>
                    <img src="/logo-svg.svg" alt="logo-svg" className='hidden sm:block'/>
                </a>
                <div>
                    <img src="/permissionless_logo.svg" alt="permissionless logo" />
                </div>
                <div></div>
                </div>
            </div>
            </div>


        {/* Hero section */}
        
        <section
            className=" h-[100vh] w-[100vw] overflow-hidden first"
        >   
        <div className='h-[75vh] w-screen box-border '>
            <div className='h-full w-full overflow-hidden absolute'>
                <img src="/hero-banner.jpg" alt="hero-banner" className="bg-bottom absolute z-0 object-cover object-center overflow-hidden h-[75vh] w-full"/>
            </div>
            <div className='flex flex-col  h-[90%] w-screen md:w-[50%] mx-auto pt-[50%] md:pt-[25%] justify-center relative z-10'>
                
                <div className=' box-border pt-[40%] w-fit md:w-[80%] mx-auto md:pt-[8%]'>
                    <div className='making'>
                        <img src="/making.webp" alt="making" className='h-20 px-[25%] md:mx-auto'/>
                    </div>
                    <div className='px-4'>
                        <img src="/opportunities.webp" alt="opportunities" className='making h-20 block'/>
                    </div>
                    <img src="/permissionless_logo.svg" alt="permissionless_logo" className='opportunities box-border ml-8 mr-4 w-[80%] md:h-25 md:w-full md:px-3 md:mb-1 my-[-4%]'/> 
                </div>
                <div className='w-[50%] mx-auto pt-2 relative z-30 flex justify-center bg-bottom mt-[10%]'>
                        <img src="/image(1).webp" alt="splash" className='absolute z-0 logo'/>
                        <img src="/image(2).webp" alt="drop" className='z-10 drop'/>
                </div>
            </div>
            </div>
            <div className='h-[25vh] w-[100vw] relative bg-black md:hidden'></div>
        </section>
        {/* Dnt mint */}
        <section className='bg-black relative h-[70vh] w-[100vw] z-0 second'>
            <div className='bg-custom_green absolute h-[80%] w-full bottom-0 z-10'>
                <div className='md:h-[35vh] md:w-[60%] mt-0 pt-0 md:z-39'>
                    <img src="/bg-line-3.svg" alt="bg-lines-2 " className='absolute z-20 md:z-35 h-[100%] w-[100%] object-cover object-[30%_center] md:object-fill pb-[30%] md:pb-[10%] md:w-[50%] md:ml-[30%] md:mr-[20%]'/>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center absolute z-30 md:h-1/5 w-[80%] mx-[10%] bottom-0 md:mb-[10%] text'>
                    <h2 className='mt-[70%] md:my-[30%] ml-[5%]'>
                        <span className='text-black font-bold text-3xl'>Advancing Humanity,</span><br />
                        <span className='text-black font-bold text-3xl flex justify-center'>Almost a State.</span>
                    </h2>
                    <div className='mt-[2vh] bg-custom_green'>
                        <button className='bg-custom_green px-12 py-2 text-black border-black border-2 relative z-50'>
                            OUR MISSION
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='h-[80%] w-[100%] relative z-40 flex flex-row justify-center items-start  '>
                <img src="/dont-mint.webp" alt="dont-mint"  className='h-[90%]'/>
            </div>
            
        </section>

        {/* WHO ARE WE */}
        <section className='relative w-full bg-black mb-8 flex flex-col justify-between overflow-hidden third'>
            <div className='flex flex-col md:flex-row justify-between my-24 mb-0'>
                <div className='w-full md:w-[60%] flex-grow team_image relative z-50'>
                    <img src="/team01.webp" alt="team image" className="w-full h-auto object-cover" />
                </div>
                <div className='flex flex-col md:w-[40%] w-full justify-between mb-4 gap-4'>
                    <div className='w-full relative h-auto mb-4 div1 z-40'>
                        <h2 className='relative text-white text-left w-full font-bold italic text-nowrap text-[15vw] md:text-[3rem] lg:text-[4rem]'>
                            WHO ARE WE
                        </h2>
                    </div>
                    <div className='w-full relative h-auto mb-4 div2'>
                        <div className='w-full h-[18vw] md:h-[8vw] z-20 text-nowrap bg-custom_green absolute div2_paint'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-nowrap text-[15vw] md:text-[3rem] lg:text-[4rem]'>
                            WHO ARE WE
                        </h2>
                    </div>
                    <div className='w-full relative h-auto mb-4 div3'>
                        <div className='w-full h-[18vw] md:h-[8vw] z-20 text-nowrap bg-custom_green absolute div3_paint'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-nowrap text-[15vw] md:text-[3rem] lg:text-[4rem]'>
                            WHO ARE WE
                        </h2>
                    </div>
                    <div className='w-full relative h-auto mb-4 div4'>
                        <div className='w-full h-[18vw] md:h-[8vw] z-20 text-nowrap bg-custom_green absolute div4_paint'></div>
                        <h2 className='text-white text-left w-full font-bold italic text-nowrap text-[15vw] md:text-[3rem] lg:text-[4rem]'>
                            WHO ARE WE
                        </h2>
                    </div>
                </div>
            </div>
        </section>


        {/* paragraphs */}
        <section className='relative h-auto mt-8 w-[100vw] overflow-hidden flex-col flex-grow md:flex-row'>
            <div className='h-auto flex flex-col md:flex-row justify-between  relative items-start md:my-[2vw] first_para'>
                <div>
                    <h2 className='text-gray-700 md:text-[1.5vw] text-nowrap my-2'>We are everywhere</h2>
                </div>
                <div>
                    <h2 className='text-gray-700 md:text-[1.5vw] text-nowrap my-2'>
                        <span className=''>We want to build a new world, with you in the middle.</span><br />
                        <span>Self, Sovereign, Custodian.</span>
                    </h2>
                </div>
                <div>
                    <h2 className='text-gray-700 md:text-[1.5vw] text-nowrap my-2'>Also, we speak satire, house & techno.</h2>
                </div>

            </div>
            <div className='h-auto flex flex-col w-full md:flex-row md:w-[80%] relative md:mx-[10%] my-[1.5vw] md:justify-evenly second_para'>
                <p className='text-gray-400 text-left md:w-1/2'>
                    Permissionless is committed to build public infrastructure for the new web. We advocate technology as a medium for solving the most complex problems of mankind. Annoyed that instead of using this to enable various efficient trustless systems with open access, profit making become the main focus. We would like to change that, now.
                </p>
                <p className='text-gray-300 text-2xl py-2 md:text-[3vw] md:w-1/2 md:ml-6'>
                    “The Internet is freedom from the limitations of land.”
                </p>
            </div>
            <h2 className="text-white">heleo world</h2>
        </section>
        {/* our work */}
        <section className='relative h-auto bg-black mt-4 pt-4 md:h-[160vh] w-[100%]'>
            <div className='relative z-0 h-[40vh] md:h-[20vh] w-[100vw] doing'>
                <picture>
                    <source srcset="/what-are-we-doing.svg" media="(min-width: 768px)"/>
                    <img src="/what-are-we-doing-mobile.svg" alt="what-are-we-doing" className='w-full object-fit'/>
                </picture>
            </div>
            {/* Spaceship */}
            <div className={`md:${spaceHover? "bg-[url('/house-colored.jpg')]" : "bg-[url('/house.jpg')]"} bg-[url('/house-colored.jpg')]  h-[60vh] bg-center bg-cover md:h-[80vh] w-[90vw] lg:w-[80vw] mx-[4vw] lg:mx-auto  mt-[-3vh] md:mt-[-10vh] relative z-20 space`} onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave()}>
                <div className='flex flex-col justify-between h-full mx-5 my-5'>
                    <div>
                        <h2 className={`md:${spaceHover? "text-purple-500":"text-gray-400"} text-purple-500 text-[8vh] `}>Spaceship</h2>
                        <h2 className={`md:${spaceHover? "text-purple-500":"hidden"} text-purple-500 block text-[2vh] md:text-[4vh]`}>Free to access playground open for all the contributors of the web</h2>
                    </div>
                    <div className='my-10 ml-5'>
                        <h2 className={`md:${spaceHover? "text-purple-500": "hidden"} text-purple-500 text-[2vh]`}>Decentralized Autonomous Organizationa (DAOs) with AI Governance <br /> 
                        <span className={`md:${spaceHover? "text-purple-500":"hidden"} text-purple-500 text-[2vh]`}>➜Know More</span> </h2>
                    </div>
                </div>
            </div>
            {/* our work product */}
            <div className='flex flex-col  md:flex-row justify-between h-auto w-[100vw] md:w-[90vw] lg:w-[80vw] my-[5vh] mx-[4vw] md:mx-[5vw] lg:mx-[10vw] sites '>
                <div className="h-[60vh] md:h-[60vh] w-[92vw] md:w-[40vw] box-border bg-custom_green border-2 border-custom_green flex items-center relative md:mr-[1vh] lg:mr-[3vh] mt-[2vh] overflow-hidden" onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave}>
                    <div className="h-[26vh] w-full my-auto bg-no-repeat bg-center bg-[url('/product-bg.svg')] absolute z-10"></div>
                    <div className="flex flex-row h-[55vh] w-[80vw] md:w-[25vw] justify-end md:justify-center items-center ml-[20vw] md:mx-auto relative z-10 ">
                        <img src="/image(3).webp" alt="" className={`md:${spaceHover? "h-[40vh] md:h-[40vh] w-[40vh]":"h-[35vh] w-[35vh] md:h-[20vh] md:w-[20vh]"} md:mx-auto md:my-auto`}/>
                    </div>
                    <div className={`h-[50vh] md:h-[60vh] w-full md:w-[30vw] absolute z-20 flex flex-col justify-between ml-[6vw] md:mx-5 `}>
                        <div>
                            <h2 className={`text-white my-[1vh]  ${spaceHover? "text-[8vh]":"text-[5vh]"}`}>DoAnything.ai</h2>
                        </div>
                        <div className={`text-white my-[1vh] md:text-[3vh] text-[3vh] md:${spaceHover? "text-[2vh]" : "hidden"}`}>
                            <h2 className='mb-[3vh]'>
                                open virtual machine for <br /> Decentralized apps
                            </h2>
                            <div className='text-purple-500'>
                            <h2 >Know more➜</h2>
                            <h2 className={`md:${spaceHover ? "text-[2vh]":"hidden"} text-sm`}>AI for real-time multilingiual communication</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] md:h-[60vh] w-[92vw] md:w-[40vw] bg-custom_green border-2 border-custom_green flex items-center relative md:ml-[1vh] lg:ml-[3vh] mt-[2vh] overflow-hidden" onMouseEnter={()=>handleSpaceHoverEnter()} onMouseLeave={()=>handleSpaceHoverLeave}>
                    <div className="h-[26vh] w-full my-auto bg-no-repeat bg-center bg-[url('/product-bg.svg')] absolute z-10"></div>
                    <div className="flex flex-row h-[55vh] w-[80vw] md:w-[25vw] justify-end md:justify-center items-center ml-[20vw] md:mx-auto relative z-10 ">
                        <img src="/image(3).webp" alt="" className={`md:${spaceHover? "h-[55vh] md:h-[40vh] w-[40vh]":"h-[35vh] w-[30vh] md:h-[20vh] md:w-[20vh]"} md:mx-auto md:my-auto`}/>
                    </div>
                    <div className={`h-[50vh] md:h-[60vh] w-full md:w-[30vw] absolute z-20 flex flex-col justify-between ml-[6vw] md:mx-5 `}>
                        <div>
                            <h2 className={`text-white my-[1vh]  ${spaceHover? "text-[8vh]":"text-[5vh]"}`}>DoAnything.ai</h2>
                        </div>
                        <div className={`text-white my-[1vh] md:text-[3vh] text-[3vh] md:${spaceHover? "text-[2vh]" : "hidden"}`}>
                            <h2 className='mb-[3vh]'>
                                open virtual machine for <br /> Decentralized apps
                            </h2>
                            <div className='text-purple-500'>
                            <h2 >Know more➜</h2>
                            <h2 className={`md:${spaceHover ? "text-[2vh]":"hidden"} text-sm`}>AI for real-time multilingiual communication</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* Sociai network section */}
        <section className='relative  md:h-[80vh] w-[100vw] bg-black mt-10'>
            <div className='flex md:flex-row flex-col h-auto md:h-[80vh]  md:w-[80%] mx-auto jacket'>
                <div className='h-[60vh] md:h-[60vh] mb-[4vw] md:w-[50%] md:mr-[2vw] relative z-0 md:overflow-hidden'>
                    <div className="h-[60vh] w-[100vw] md:w-[100%] mx-auto absolute z-0 flex items-center overflow-hidden">
                        <img src="bg-lines-2.png" alt=""  className="my-auto "/>
                    </div>
                    <div className='h-[50vh] md:h-[60vh] w-[80vw] md:w-[100%] absolute z-10 flex md:flex-row justify-center md:mx-auto mx-[10vw]'>
                        <img src="/image(4).webp" alt="jacket" />
                    </div>
                    <div className='h-[10vh] md:h-[20vh] w-[100vw] md:w-[100%] my-[20vh] absolute z-20 text-white text-6xl md:text-5xl flex justify-center items-center '>
                        <div className="relative flex items-center">
                            <div className='w-[35vw] md:w-[100%] h-[20vh] md:h-full md:py-[10vh] my-auto absolute'>
                            <img
                                src="/paint-brush-2.png"
                                alt="highlight"
                                className="absolute w-[35vw] md:w-full h-[20vh] md:h-full top-0 left-0 z-30 object-contain"
                            />
                            </div>
                            <div className="font-bold italic whitespace-nowrap relative z-10">
                            DONT
                            </div>
                        </div>
                            <div className='font-bold italic whitespace-nowrap ml-4'>JOIN US</div>
                    </div>
                    
                    
                    
                </div>
                <div className='h-auto md:w-[50%] flex flex-col mx-auto mb-[5vh]'>
                    {/* DISCORD */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/discord.png" alt="discord logo" className='h-12 w-12 md:grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-discordBlue discordBlue md:text-gray-400 text-4xl md:text-[8vh] ml-4 italic bg-clip-text md:group-hover:text-transparent md:group-hover:text-discordBlue transition duration-300'>DISCORD</h2>
                        </div>
                        {/* INSTAGRAM */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/instagram.png" alt="discord logo" className='h-12 w-12 md:grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-transparent text-4xl md:text-[8vh] ml-4 italic md:group-hover:text-transparent bg-gradient-to-r from-purple-900 via-pink-700 to-red-900  bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-purple-600 md:group-hover:via-pink-500 md:group-hover:to-red-700 md:text-gray-400 transition duration-300 leading-none'>INSTAGRAM</h2>
                        </div>
                        {/* YOUTUBE */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/youtube-new.png" alt="discord logo" className='h-12 w-12 md:grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-red-600 md:text-gray-400 text-4xl md:text-[8vh] ml-4 italic bg-clip-text md:group-hover:text-transparent md:group-hover:text-red-700 transition duration-300'>YOUTUBE</h2>
                        </div>
                        {/* TWITTER */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/twitter.png" alt="discord logo" className='h-12 w-12 md:grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-blue-400 md:text-gray-400 text-4xl md:text-[8vh] ml-4 italic bg-clip-text md:group-hover:text-transparent md:group-hover:text-blue-500 transition duration-300'>TWITTER</h2>
                        </div>
                        {/* LINKEDIN */}
                        <div className='flex flex-row items-center h-[10vh] w-full group social'>
                            <img src="/linkedin.png" alt="discord logo" className='h-12 w-12 md:grayscale group-hover:grayscale-0 transition duration-300'/>
                            <h2 className='text-blue-400 md:text-gray-400 text-4xl md:text-[8vh] ml-4 italic bg-clip-text md:group-hover:text-transparent md:group-hover:text-blue-500 transition duration-300'>LINKEDIN</h2>
                        </div>

                </div>
            </div>
            

        </section>
    
        {/* DONT CONTACT US */}
        <section className="h-[50vh] w-[100vw] bg-black relative">
            <div className="h-[50vh] w-[100vw] flex justify-center relative z-0">
                <div className='h-[25vh] md:h-[30vh] w-[80vw] md:w-[30vw] mt-[10vh] relative z-10 mobile'>
                    <img src="/bg-lines-2.svg" alt="bg-lines-2" />      
                </div>
                
                <div className="max-h-[90vh] md:h-[90vh] w-[50vw] md:w-[20vw] flex justify-center items-center mx-auto absolute z-20 mobile">
                    <img src="/mobile.png" alt=""  className='h-full w-full'/>
                </div>
                <div className='w-full h-[20vh] mt-[15vh] absolute z-30 contact_text'>
                    <img src="dont-contact-us-text.svg" alt="" />
                </div>
            </div>
            
        </section>
        {/* footer */}
        <section className="bg-gray-700 bg-opacity-8 h- w-[100vw] pt-[10vh] md:pt-[20vh] pb-[20vh] md:pb-[15vh]">
            <div className='h- w-full flex flex-col md:flex-row justify-around items-center relative z-20 pb-5'>
                <div className='text-white text-[2vh] hidden md:block'>
                    <a href="doanything.ai" className='hover:text-blue-500'>Doanything.ai </a>
                    <a href="dsync.ai" className='hover:text-blue-500'> Dsync.ai</a>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <img src="/logo-full.png" alt="logo" className='h-[10vh] w-[50vw] md:w-[15vw]'/>
                </div>
                <div className='flex flex-row justify-around items-center mt-2'>
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
                <div className='flex flex-row justify-between w-[50vw] text-white text-lg mt-2 md:hidden'>
                    <a href="doanything.ai" className='text-white hover:text-blue-500'>Doanything.ai</a>
                    <a href="dsync.ai" className='text-white hover:text-blue-500'>Dsync.ai</a>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Home