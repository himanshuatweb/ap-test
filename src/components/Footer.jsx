import React from 'react'
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaWikipediaW, FaThreads, FaRegEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-slate-900 px-4 pb-24 tab:px-0 tab:pb-7 tab:pt-10" id="main-website-footer">
            <div className="text-md flex w-full flex-col space-y-5 px-4 pt-8 tab:flex-row tab:justify-center tab:space-x-4 tab:space-y-0 tab:pt-0 laptop:space-x-16">
                <div>
                    <div className="mb-[13px] font-semibold text-slate-100"><span className="font-hi pt-[3px]">सजीव सत्र</span></div>
                    <div className="flex flex-col"><a href="/hi/gita" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">गीता समागम</span></a> <a href="/hi/vedanta-basics-to-classics" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">Vedanta: Basics to Classics</span></a></div>
                </div>
                <div>
                    <div className="mb-[13px] whitespace-nowrap font-semibold text-slate-100"><span className="font-hi pt-[3px]">बोध साहित्य</span></div>
                    <div className="flex flex-col"><a href="/hi/video-modules" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">वीडियो श्रृंखलाएँ</span></a> <a href="/hi/books" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">पुस्तकें</span></a> <a href="/hi/articles" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">लेख</span></a> <a href="/hi/circle" className="text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">ए.पी. सर्किल</span></a></div>
                </div>
                <div>
                    <div className="mb-[13px] font-semibold text-slate-100"><span className="font-hi pt-[3px]">अधिक जाने</span></div>
                    <div className="flex flex-col"><a href="/hi/about" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">आचार्य प्रशांत के बारे में</span></a> <a href="/hi/invite?tIn=0" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">उनको आमंत्रित करें</span></a> <a href="/hi/invite?tIn=1" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">उनके संग साक्षात्कार</span></a> <a href="/hi/vedant" className="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">घर घर उपनिषद</span></a> <a href="/hi/media" className="text-slate-300 hover:cursor-pointer hover:text-brand-700"><span className="font-hi pt-[3px]">मीडिया व प्रेस प्रकाशनी</span></a></div>
                </div>
                <div>
                    <div className="mb-[13px] font-semibold text-slate-100"><span className="font-hi pt-[3px]">सोशल मीडिया</span></div>
                    <div className="mb-6 flex flex-col">
                        <div className="mb-2.5 text-slate-300"><span className="font-hi pt-[3px]">अँग्रेजी के लिये</span></div>
                        <div className="flex space-x-2">
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.youtube.com/c/AcharyaPrashant" target="_blank">
                                    <FaYoutube size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://twitter.com/Prashant_Advait" target="_blank">
                                    <FaTwitter size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.facebook.com/AdvaitAcharyaPrashant" target="_blank">
                                    <FaFacebookF size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.instagram.com/acharya_prashant_paf/" target="_blank">
                                    <FaInstagram size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://en.wikipedia.org/wiki/Acharya_Prashant" target="_blank">
                                    <FaWikipediaW size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2.5 text-slate-300"><span className="font-hi pt-[3px]">हिंदी के लिये</span></div>
                        <div className="flex space-x-2">
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.youtube.com/c/ShriPrashant" target="_blank">
                                    <FaYoutube size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://twitter.com/Advait_Prashant" target="_blank">
                                    <FaTwitter size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.threads.net/@acharya_prashant_ap" target="_blank">
                                    <FaThreads size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.facebook.com/Acharya.Prashant.Advait" target="_blank">
                                    <FaFacebookF size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                            <div className="text-slate-300 hover:text-brand-700">
                                <a href="https://www.instagram.com/acharya_prashant_ap/" target="_blank">
                                    <FaInstagram size={20} className='hover:text-red-500,' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-[13px] pt-2 font-semibold text-slate-100 tab:hidden"><span className="font-hi pt-[3px]">डाउनलोड आचार्य प्रशांत ऐप</span></div>
                    <div className="mb-[13px] hidden font-semibold text-slate-100 tab:block"><span className="font-hi pt-[3px]">डाउनलोड ऐप</span></div>
                    <div className="mb-5 hidden items-center tab:flex">
                        <img className="mr-2 h-6 w-6" src="https://acharyaprashant.org/images/ic_favicon.png" alt="Acharya Prashant" />
                        <div className="text-slate-100 laptop:whitespace-nowrap"><span className="font-hi pt-[3px]">आचार्य प्रशांत</span></div>
                    </div>
                    <div className="flex tab:flex-col" >
                        <div className="mr-4 h-8 w-28 tab:mb-5 tab:mr-0 tab:w-[114px]"><a target="_blank" href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks"><img src="https://acharyaprashant.org/images/ic_googleplay.png" alt="Get it on Google Play" className="rounded-md border-[1.4px] border-slate-300" /></a></div>
                        <div className="h-8 w-28 tab:w-[114px]"><a target="_blank" href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"><img src="https://acharyaprashant.org/images/ic_appstore.png" alt="Download on the App Store" className="rounded-md border-[1.4px] border-slate-300" /></a></div>
                    </div>
                </div>
                <div className="space-y-3 pt-2 tab:pt-0">
                    <div className="mb-[13px] font-semibold text-slate-100 tab:pb-0"><span className="font-hi pt-[3px]">सम्पर्क करें</span></div>
                    <div className="mb-2.5 flex items-center">
                        <div className="pr-2 text-slate-300">
                            <FaRegEnvelope size={20} />
                        </div>
                        <a href="mailto:support@advait.org.in">
                            <div className="text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">support@advait.org.in</span></div>
                        </a>
                    </div>
                    <div className="mb-[13px] flex items-center">
                        <div className="pr-2 text-slate-300">
                            <FaWhatsapp size={20} />
                        </div>
                        <a href="https://wa.me/+919643750710" target="_blank">
                            <div className="text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">+91 9650585100</span></div>
                        </a>
                    </div>
                    <div className="mb-5 flex items-center">
                        <div className="pr-2 text-slate-300">
                            <FaPhone size={20} />
                        </div>
                        <a href="tel:+919650585100" className="flex">
                            <div className="text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">+91 9650585100</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto mb-6 mt-6 h-[0.5px] w-full bg-slate-400 tab:mt-[62px] tab:w-2/3"></div>
            <div className="flex-col text-xs tab:mx-auto tab:flex tab:flex-row tab:justify-center tab:text-sm">
                <div className="text-slate-300 tab:pr-20"><span className="font-hi pt-[3px]">कॉपीराइट © 2024 प्रशांतअद्वैत फाउंडेशन</span></div>
                <div className="flex space-x-2 pt-2 tab:pt-0">
                    <a href="/hi/terms-and-conditions" className="cursor-pointer text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">नियम एवं शर्तें</span></a>
                    <div className="text-slate-300">|</div>
                    <a href="/hi/privacy-policy" className="cursor-pointer text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">गोपनीयता नीति</span></a>
                    <div className="text-slate-300">|</div>
                    <a href="/hi/undertaking" className="cursor-pointer text-slate-300 hover:text-brand-700"><span className="font-hi pt-[3px]">अंडरटेकिंग</span></a>
                </div>
            </div>
            <div className="pb-14"></div>
        </div>
    )
}

export default Footer