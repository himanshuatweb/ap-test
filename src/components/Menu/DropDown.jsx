import React, { useState, useRef, useEffect } from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

const DropDown = ({ data }) => {

    console.log("data ", data)

    const [menuData, setMenuData] = useState(data);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
                setHoveredItem(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        setMenuData(data)
    }, [data])

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const renderMenu = (items) => (
        <>
            {items.map(item => (
                <div className='flex min-w-[150px] cursor-pointer items-start justify-between py-1.5 px-4 hover:bg-slate-100 hover:text-brand-600 laptop:min-w-[270px]'>
                    <div
                        key={item.tagId}
                        onMouseEnter={() => handleMouseEnter(item)}
                        className="whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base"
                    >
                        <span className="font-en">{item.name.english}</span>
                    </div>
                    {item.children.length > 0 && (
                        <div >
                            <FaChevronRight size={15} />
                        </div>
                    )}
                </div>
            ))}
        </>
    );

    const renderSubMenu = (item) => (
        <>
            <div className="w-[0.5px] bg-gray-separator"></div>
            <div className="flex flex-col overflow-x-hidden overflow-y-scroll py-4">
                {item.children.map(subItem => (
                    <div className="flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4  hover:bg-slate-100 hover:text-brand-600 laptop:min-w-[270px]">
                        <div className="whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base">
                            <span className="font-en">{subItem.name.english}</span>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );


    return (
        <div className='dropdown-container relative' ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 mt-2 text-xs font-normal">
                <div className="text-xs font-medium text-gray-subtitle">
                    <span className="font-hi  pt-[3px]">सभी</span>
                </div>
                <div className="px-3 text-slate-500">
                    <AiFillCaretDown size={12} />

                </div>
            </button>
            {dropdownOpen && (
                <div className="absolute top-full z-10 mt-2 text-base text-gray-subtitle">
                    <div className='flex h-[60vh] min-w-0 items-stretch rounded-lg bg-white shadow-lg'>
                        <div className="flex flex-col py-4">
                            <div className="flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4 hover:rounded hover:bg-slate-100 hover:text-brand-600 laptop:min-w-[270px]">
                                <div className="whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base">
                                    <span className="font-en">All</span>
                                </div>
                            </div>
                            <div>
                                {renderMenu(menuData)}
                            </div>
                        </div>
                        {hoveredItem && hoveredItem.children.length > 0 && (
                            <div className='flex overflow-y-auto'>
                                {renderSubMenu(hoveredItem)}
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default DropDown