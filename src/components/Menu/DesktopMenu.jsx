import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const DesktopMenu = ({ handleToggle }) => {
    return (
        <div className="flex h-full items-start">
            <div
                className="mr-2 mt-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-center text-slate-700 opacity-90 transition-all duration-150 hover:text-brand-700 hover:opacity-100 hover:shadow"
                onClick={handleToggle}
            >
                <RxCross2 size={20} />
            </div>
            <div className="h-full overflow-y-auto bg-white pt-8 tab:w-[35vw] laptop:w-[25vw]">
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <div className="flex flex-row justify-between pr-1 pt-4 tab:hidden">
                            <div className="self-center px-4">
                                <img className="mr-2 h-8 w-8 rounded-full" src="/images/ic_aplogo.png" alt="Acharya Prashant" />
                            </div>
                            <div className="inline-flex cursor-pointer items-center justify-center self-start rounded-md bg-white p-4 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                                i
                            </div>
                        </div>
                        <div className="hidden px-6 text-brand-600 hover:text-brand-800 tab:block">
                            <a href="#" className="flex items-center">
                                <FaUserCircle size={30} />
                                <div className="ml-3 text-sm font-semibold">
                                    <span className="font-hi pt-[3px]">लॉगिन करें</span>
                                </div>
                            </a>
                            <div className="mt-4 border-t border-gray-300"></div>
                        </div>
                        <div className="mb-1 mt-1 flex flex-col px-2 text-sm font-medium text-gray-subtitle tab:px-3">
                            <a href="/hi/gita" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">श्रीमद् भगवद् गीता</span>
                            </a>
                            <a href="/hi/vedanta-basics-to-classics" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">Vedanta: Basics to Classics</span>
                            </a>
                            <a id="main-website-right-navbar-menu-his-books" href="/hi/books" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">पुस्तकें</span>
                            </a>
                            <a id="main-website-right-navbar-menu-his-articles" href="/hi/articles" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">लेख</span>
                            </a>
                            <a id="main-website-right-navbar-menu-video-courses" href="/hi/video-modules" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">वीडियो श्रृंखलाएँ</span>
                            </a>
                            <a href="/hi/circle" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">ए.पी. सर्किल</span>
                            </a>
                            <a href="/hi/invite?tIn=0" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">कॉलेज संवाद के लिए आमंत्रित करें</span>
                            </a>
                            <a href="/hi/invite?tIn=1" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">इंटरव्यू के लिए आमंत्रित करें</span>
                            </a>
                            <a href="/hi/media" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">मीडिया व प्रेस प्रकाशनी</span>
                            </a>
                            <a href="/hi/enquiry" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">सम्पर्क करें</span>
                            </a>
                            <a id="main-website-right-navbar-hiring" href="/hi/hiring" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">करियर</span>
                            </a>
                            <a id="main-website-right-navbar-contribute" href="/hi/contribute" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900">
                                <span className="font-hi pt-[3px]">योगदान करें</span>
                            </a>
                        </div>
                        <div className="mx-6 mb-3 mt-5 border-t border-gray-300"></div>
                        <div className="mb-1 px-5 text-xs font-bold text-gray-subtitle tab:px-6">
                            <span className="font-hi pt-[3px]">अधिक जानें</span>
                        </div>
                        <a href="/hi/prashantadvait-foundation" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">प्रशांतअद्वैत फाउंडेशन</span>
                        </a>
                        <a href="/hi/vedant" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">घर घर उपनिषद</span>
                        </a>
                        <a href="/hi/about" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">आचार्य प्रशांत के बारे में</span>
                        </a>
                        <div className="mx-6 mb-3 mt-5 border-t border-gray-300"></div>
                        <div className="mb-1 mt-4 px-5 text-xs font-bold text-gray-subtitle tab:px-6">
                            <span className="font-hi pt-[3px]">विषयों को देखें</span>
                        </div>
                        <a href="/hi/video-modules/tags/1" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">वेदांत - उपनिषद</span>
                        </a>
                        <a href="/hi/video-modules/tags/2" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">वेदांत - श्रीमद्भगवद्गीता</span>
                        </a>
                        <a href="/hi/video-modules/tags/3" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">अन्य ग्रन्थ</span>
                        </a>
                        <a href="/hi/video-modules/tags/4" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">संत और दार्शनिक</span>
                        </a>
                        <a href="/hi/video-modules/tags/5" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">विविध धाराएँ</span>
                        </a>
                        <a href="/hi/video-modules/tags/6" className="mx-3 block rounded-md px-2 py-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tab:px-3">
                            <span className="font-hi pt-[3px]">जीवन सम्बंधित प्रश्न</span>
                        </a>
                        <div className="px-2 text-sm font-medium text-gray-subtitle tab:px-3">
                            <a href="/hi/technical-support" className="block rounded-md px-3 py-2 hover:bg-gray-background hover:text-slate-900 tab:mb-4">
                                <span className="font-hi pt-[3px]">तकनीकी सहायता</span>
                            </a>
                        </div>
                    </div>
                    <div className="sticky bottom-0 items-end">
                        <a href="#" className="sticky bottom-0 block w-full bg-gray-background py-3 text-center font-medium text-brand-600 hover:text-brand-800 tab:hidden">
                            <span className="font-hi pt-[3px]">लॉगिन करें</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopMenu