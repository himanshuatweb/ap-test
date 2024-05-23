import React from 'react'
import { FaFacebookF, FaInstagram, FaTimes, FaTwitter, FaWikipediaW, FaYoutube } from 'react-icons/fa'
import { FaChevronRight } from "react-icons/fa";
import { FaThreads } from 'react-icons/fa6';

const MobileMenu = ({ handleToggle }) => {
    return (
        <div className='fixed min-h-screen overflow-auto top-0 left-0 right-0 bottom-0 z-[999] bg-brand-700 text-white '>
            {/* main div */}
            <div className='p-4'>
                {/* login and cross */}
                <div className='flex justify-between justify-items-center '>
                    <div className=' border border-white px-2 py-1 rounded-lg '>

                        <span className="font-hi"> लॉगिन करें</span>
                    </div>
                    <div
                        className='self-center cursor-pointer'
                        onClick={handleToggle}
                    >
                        <FaTimes size={20} />
                    </div>
                </div>

                {/* Horizontal Texts */}
                <div className='flex flex-col mt-10 mb-4 gap-6 '>
                    <div className='flex justify-between justify-items-center'>
                        <div>
                            <span className="font-hi text-2xl ">लाइव सत्र</span>
                        </div>
                        <div className='self-center'>
                            <FaChevronRight size={15} />
                        </div>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">पुस्तकें</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">लेख</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">वीडियो श्रृंखलाएँ</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">ए.पी. सर्किल</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">कॉलेज संवाद के लिए आमंत्रित करें</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">इंटरव्यू के लिए आमंत्रित करें</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">सम्पर्क करें</span>
                    </div>
                    <div>
                        <span className="font-hi text-2xl ">करियर</span>
                    </div>

                    <div>
                        <div className=' cursor-pointer w-[130px] py-2 flex justify-center justify-items-center bg-brand-100 hover:bg-brand-200 rounded-md text-brand-700'>

                            <span className="font-hi text-2xl ">योगदान करें</span>
                        </div>
                    </div>

                    <div className='h-[1px] w-full bg-white '></div>

                    <div>
                        <span className="font-hi text-xl ">आचार्य प्रशांत के बारे में</span>
                    </div>

                    <div>
                        <span className="font-hi text-xl ">प्रशांतअद्वैत फाउंडेशन</span>
                    </div>

                    <div>
                        <span className="font-hi text-xl ">प्रेस प्रकाशिनी</span>
                    </div>

                    <div className="flex tab:flex-col" >
                        <div className="mr-4 h-10 w-28 ">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks">
                                <img src="https://acharyaprashant.org/images/ic_googleplay.png"
                                    alt="Get it on Google Play"
                                    className="rounded-md border-[1.4px] border-slate-300 h-full object-cover"
                                />
                            </a>
                        </div>
                        <div className="h-10 w-28 "><a target="_blank" href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"><img src="https://acharyaprashant.org/images/ic_appstore.png" alt="Download on the App Store" className="rounded-md border-[1.4px] border-slate-300 h-full object-cover " /></a></div>
                    </div>

                    <div>
                        <div className="mb-2.5 text-white"><span className="font-hi text-xl ">अँग्रेजी के लिये</span></div>
                        <div className="flex space-x-4 text-white">
                            <div className="text-white">
                                <a href="https://www.youtube.com/c/AcharyaPrashant" target="_blank">
                                    <FaYoutube size={25} />
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="https://twitter.com/Prashant_Advait" target="_blank">
                                    <FaTwitter size={25} />
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="https://www.facebook.com/AdvaitAcharyaPrashant" target="_blank">
                                    <FaFacebookF size={25} />
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="https://www.instagram.com/acharya_prashant_paf/" target="_blank">
                                    <FaInstagram size={25} />
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="https://en.wikipedia.org/wiki/Acharya_Prashant" target="_blank">
                                    <FaWikipediaW size={25} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-2.5 text-white"><span className="font-hi pt-[3px]">हिंदी के लिये</span></div>
                        <div className="flex space-x-4 text-white">
                            <div>
                                <a href="https://www.youtube.com/c/ShriPrashant" target="_blank">
                                    <FaYoutube size={25} />
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com/Advait_Prashant" target="_blank">
                                    <FaTwitter size={25} />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.threads.net/@acharya_prashant_ap" target="_blank">
                                    <FaThreads size={25} />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/Acharya.Prashant.Advait" target="_blank">
                                    <FaFacebookF size={25} />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/acharya_prashant_ap/" target="_blank">
                                    <FaInstagram size={25} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default MobileMenu