const CourseItem = ({ course, index }) => {
    const { title, subtitle, amount, originalAmount, language, courseHours } = course;

    const hours = Math.floor(courseHours); // Extract whole number part
    const minutes = Math.round((courseHours - hours) * 60); // Convert fractional part to minutes

    let courseDuration;
    if (hours > 0) {
        courseDuration = `${hours} घंट${hours > 1 ? 'े' : 'ा'} ${minutes} मिनट`;
    } else {
        courseDuration = `${minutes} मिनट`;
    }


    return (
        <a href="#" className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
            <div className="flex flex-col space-y-2">
                <div className="self-start pb-2">
                    <div id="part-pointer" className="course-item-label"><span className="font-hi pt-[3px]">भाग {index} </span>&nbsp;</div>
                </div>
                <div className="flex w-full flex-col text-left">
                    <div>
                        <div className="text-lg font-medium leading-normal text-gray-title"><span className="font-hi pt-[3px]"> {title} </span></div>
                        <div className="text-sm leading-normal text-gray-subtitle laptop:text-base"><span className="font-hi pt-[3px]"> {subtitle} </span></div>
                        {/* <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm"><span className="font-hi pt-[3px]">  2 घंटे 30 मिनट</span></div>  */}
                        <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm"><span className="font-hi pt-[3px]">  {courseDuration} </span></div>
                        <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm"><span className="font-hi pt-[3px]">सहयोग राशि: ₹${amount}</span> <del><span className="pl-1"><span className="font-hi pt-[3px]">₹{originalAmount}</span></span></del></div>
                    </div>
                    <div className="mt-2 flex flex-wrap text-xs">
                        <div className="mr-1">
                            <div className="flex items-center rounded px-1.5 py-0.5 text-xs text-slate-700 bg-blue-background"> <span className="font-hi pt-[3px]"> {language === "hindi" ? 'हिन्दी' : 'English'}</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center space-x-3 text-xs font-medium">
                        <div className="cursor-pointer rounded-md text-center transition duration-150 btn-borderless btn-base leading-9"><span className="font-hi text-brand-600">कार्ट में जोड़ें</span></div>
                        <div className="self-stretch py-2">
                            <div className="h-full w-px bg-gray-separator"></div>
                        </div>
                        <div id="main-website-enroll-in-course-button" className="cursor-pointer rounded-md text-center transition duration-150 btn-borderless btn-base leading-9"><span className="font-hi text-brand-600">एनरोल करें</span></div>
                    </div>
                </div>
            </div>
            <div className="pt-2 group-hover:invisible">
                <div className="h-[0.5px] w-full bg-gray-separator"></div>
            </div>
        </a>
    )
}

export default CourseItem