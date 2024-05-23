import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

const InnerNavBar = () => {
    return (
        <>
            <div id="inner-nav-bar" className="sticky top-0 z-50 bg-white shadow">
                <div id="inner-nav-bar" className="mx-auto max-w-screen-2xl select-none">
                    <div className="h-12">
                        <div className="flex h-full w-full items-center justify-between">
                            <div className="flex cursor-pointer items-center justify-center pl-4 laptop:pl-8">
                                <div className="laptop:block">
                                    <img className="h-6 object-contain" src="https://acharyaprashant.org/images/ic_videoseries.png" alt="content home" />
                                </div>
                                <div className="ml-6 hidden w-[36rem] flex-grow tab:block">
                                    <div className="items-center rounded border border-gray-disabled shadow-sm">
                                        <div className="relative">
                                            <div className="relative flex w-full flex-row">
                                                <button className="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
                                                    <div className="text-xs font-medium text-gray-subtitle">
                                                        <span className="font-hi pt-[3px]">सभी</span>
                                                    </div>
                                                    <div className="px-3 text-slate-500">
                                                        <AiFillCaretDown size={12} />

                                                    </div>
                                                </button>
                                                <input
                                                    type="search"
                                                    className="h-9 w-full border-0 text-gray-title caret-brand-600 focus:ring-0"
                                                    placeholder=" वीडियो श्रृंखलाएँ खोजें"
                                                />
                                                <button id="main-website-search-courses-btn" className="items-end rounded-r bg-brand-200 fill-current py-1 px-2 text-slate-700">
                                                    <AiOutlineSearch size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-12">
                                <div className="cursor-pointer text-slate-900 hidden">i</div>
                                <div className="whitespace-nowrap py-4 text-sm">
                                    <div className="cursor-pointer rounded-md text-center transition-colors duration-150 bg-brand-600 text-white px-2 py-1">
                                        <span className="font-hi pt-[3px]">लॉगिन करें</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden px-4 pt-4 tab:block laptop:px-8">
                <div className="flex w-full flex-wrap items-baseline justify-start text-gray-subtitle">
                    <div className="mr-1 text-sm cursor-pointer hover:text-brand-600">
                        <span className="font-hi pt-[3px]">होम</span>
                    </div>
                    <div className="mr-1 px-1 text-gray-subtitle">
                        <FaAngleRight size={10} />
                    </div>
                    <div className="mr-1 text-sm font-medium">
                        <span className="font-hi pt-[3px]">संतवाणी</span>
                    </div>

                </div>
            </div>

        </>

    )
}

export default InnerNavBar