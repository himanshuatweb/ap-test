import React, { useState, useRef, useEffect } from 'react'
import DesktopMenu from './Menu/DesktopMenu';
import { AiFillCaretDown } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import MobileMenu from './Menu/MobileMenu';
import PopOver from './PopOver';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [openPopover, setOpenPopover] = useState(null);

    const popoverRefs = {
        live: useRef(null),
        invite: useRef(null),
        language: useRef(null),
    };

    const togglePopover = (popover) => {
        setOpenPopover(openPopover === popover ? null : popover);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event) => {
        if (
            popoverRefs.live.current &&
            !popoverRefs.live.current.contains(event.target) &&
            popoverRefs.invite.current &&
            !popoverRefs.invite.current.contains(event.target) &&
            popoverRefs.language.current &&
            !popoverRefs.language.current.contains(event.target)
        ) {
            setOpenPopover(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <>
            {/* Overlay */}
            {menuVisible && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 z-[125] bg-black opacity-25"
                    onClick={toggleMenu}
                ></div>
            )}

            <div className={`block tab:hidden ${menuVisible ? 'block' : 'hidden'} `}>
                <MobileMenu handleToggle={toggleMenu} />
            </div>

            <div
                className={`fixed top-0 right-0 bottom-0 z-[150]  overflow-x-hidden transform transition-transform duration-300 ease-in-out hidden tab:block ${menuVisible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className={`transform ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    <DesktopMenu handleToggle={toggleMenu} />
                </div>
            </div>
            <div className="z-navbar" style={{ position: 'relative' }}>
                <div id="main-nav-bar" className="h-12 bg-brand-700">
                    <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
                        <div className="flex h-full justify-between text-xs">
                            <div className="flex items-stretch pl-4 text-sm laptop:pl-8">
                                <a href="/hi/home" className="shrink-0 self-center">
                                    <img className="mr-2 h-8 w-8 rounded-full" src="https://acharyaprashant.org/images/ic_favicon.png" alt="Acharya Prashant" />
                                </a>
                                <div className="hidden h-full flex-row items-stretch justify-center font-medium tab:flex">
                                    <a id="main-website-nav-item-internal-home" href="/hi/home" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">होम</span>
                                        </div>
                                    </a>
                                    <div id="main-website-nav-item-in-place-live" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 hover:bg-brand-600">
                                        <div
                                            ref={popoverRefs.live}
                                            className="relative flex items-center space-x-2"
                                            onClick={() => togglePopover('live')}
                                        >
                                            <span className="font-hi pt-[3px]">लाइव सत्र</span>
                                            <div className="pt-0.5 transition duration-500">
                                                <AiFillCaretDown size={15} />
                                            </div>

                                            {/* Pop-up Menu */}
                                            {openPopover === 'live' && <PopOver
                                                data={['गीता समागम', 'Vedanta: Basics to Classics']}
                                                boxStyles="w-52"
                                            />}

                                        </div>
                                    </div>
                                    <a id="main-website-nav-item-internal-courses" href="/hi/courses" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 bg-brand-600">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">वीडियो श्रृंखलाएँ</span>
                                        </div>
                                    </a>
                                    <a id="main-website-nav-item-internal-books" href="/hi/books" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">पुस्तकें</span>
                                        </div>
                                    </a>
                                    <a id="main-website-nav-item-internal-articles" href="/hi/articles" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">लेख</span>
                                        </div>
                                    </a>
                                    <div id="main-website-nav-item-in-place-invite" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 hover:bg-brand-600">
                                        <div
                                            ref={popoverRefs.invite}
                                            className="relative flex items-center space-x-2"
                                            onClick={() => togglePopover('invite')}

                                        >
                                            <span className="font-hi pt-[3px]">आमंत्रित करें</span>
                                            <div className="pt-0.5 transition duration-500">
                                                <AiFillCaretDown size={15} />
                                            </div>
                                            {openPopover === 'invite' && (
                                                <PopOver
                                                    data={['कॉलेज संवाद के लिए', 'साक्षात्कार के लिये']}
                                                    boxStyles='!w-40'
                                                />
                                            )}

                                        </div>
                                    </div>
                                    <a id="main-website-nav-item-internal-media" href="/hi/media" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">प्रेस प्रकाशिनी</span>
                                        </div>
                                    </a>
                                    <a id="main-website-nav-item-internal-careers" href="/hi/hiring" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">करियर</span>
                                        </div>
                                    </a>
                                    <a id="main-website-nav-item-internal-contribute" href="/hi/contribute" className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
                                        <div className="relative flex items-center space-x-2">
                                            <span className="font-hi pt-[3px]">योगदान करें</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8">
                                <a className="rounded border-[1.5px] border-white px-2 text-sm tab:hidden" href="/hi/contribute">
                                    <span className="font-hi pt-[3px]">योगदान करें</span>
                                </a>
                                <div id="main-website-navbar-language-selector" className="ml-3 inline-flex cursor-pointer items-center px-2 tab:px-1">
                                    <div className="relative">
                                        <div
                                            ref={popoverRefs.language}
                                            onClick={() => togglePopover('language')}
                                            className="flex items-center space-x-1 py-2 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                            <div className='border-2 rounded border-white px-1'>
                                                <FaLanguage size={25} className='h-[20px]' />
                                            </div>
                                            <div className="pt-0.5 transition duration-500">
                                                <AiFillCaretDown size={15} />

                                            </div>
                                        </div>
                                        {openPopover === 'language' && (
                                            <PopOver
                                                data={['हिन्दी', 'English']}
                                                boxStyles={'!w-24'}
                                            />
                                        )}
                                    </div>
                                </div>
                                <a id="main-website-navbar-contact-icon" className=" ml-4 hidden text-white hover:cursor-pointer laptop:block" href="/hi/enquiry">
                                    <BiPhone size={25} />
                                </a>
                                <div
                                    className="mx-2 inline-flex cursor-pointer items-center px-2 py-2 text-white tab:pr-4 pl-1 tab:pl-1 laptop:pl-[11px]"
                                    onClick={toggleMenu}
                                >
                                    <FaBars size={25} />
                                    <div className="hidden pl-2 laptop:block">
                                        <span className="font-hi pt-[3px]">मेन्यू</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-banner flex w-full items-center justify-between bg-slate-800 px-4 laptop:justify-center laptop:py-3.5 py-3">
                <div className="flex laptop:items-center">
                    <div className="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 laptop:mt-0"></div>
                    <div className="text-sm text-white laptop:text-lg">
                        <span className="font-hi pt-[3px]">
                            आचार्य प्रशांत आपके बेहतर भविष्य की लड़ाई लड़ रहे हैं
                        </span>
                    </div>
                </div>
                <div className="shrink-0 pl-5 text-sm">
                    <a className="flex items-center rounded-md border border-gray-200 px-2 py-1 text-white laptop:py-0.75" href="/hi/contribute/contribute-work?cmId=m00071">
                        <span className="font-hi pt-[3px]">अपना कर्तव्य निभाएँ</span>
                    </a>
                </div>
            </div>

        </>

    )
}

export default NavBar