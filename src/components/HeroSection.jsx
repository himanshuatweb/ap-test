import { useState } from "react";
import { FaArrowLeftLong, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const HeroSection = ({ details }) => {
    const { title, subtitle, description, thumbnail } = details;

    const [descriptionSmall, setDescriptionSmall] = useState({
        text: description.slice(0, 150),
        active: true,
    })

    const handleDescription = () => {
        if (descriptionSmall.active) {
            setDescriptionSmall({ text: description, active: false })
        } else {
            setDescriptionSmall({ text: description.slice(0, 150), active: true })
        }

    }

    return (
        <>
            <div className="flex items-center px-4 py-2 tab:py-4 tab:pt-4 laptop:px-8">
                <button className="cursor-pointer fill-current text-brand-600 -ml-4 p-4 laptop:hidden">
                    <FaArrowLeftLong />
                </button>
                <div className="text-lg font-semibold text-gray-title tab:text-xl laptop:py-0 laptop:text-2xl" id="main-website-header-text">
                    <span className="font-hi pt-[3px]"> {title} </span>
                </div>
            </div>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className="px-4 laptop:px-8">
                    <div className="flex flex-col tab:flex-row tab:items-start">
                        <div className="w-full shrink-0 tab:w-2/5">
                            <div className="aspect-[16/9] w-full">
                                <div className="relative h-full w-full overflow-hidden rounded">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={`${thumbnail?.domain}/${thumbnail?.basePath}/${thumbnail?.qualities?.[0]}/${thumbnail?.key}`}
                                        alt="Thumbnail"
                                    />
                                    <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
                                    <img
                                        className="absolute object-contain right-1 bottom-1 h-[38px] tab:h-[52px    ] "
                                        src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                                        alt="AP Name Logo"
                                    />
                                </div>
                            </div>
                            <div className="hidden pt-4 tab:block">
                                <div className="flex flex-col items-center tab:items-start">
                                    <div className="pb-3 text-sm font-medium text-gray-title tab:pb-1">
                                        <span className="font-hi pt-[3px]">इस श्रृंखला को साझा करें</span>
                                        <span className="invisible tab:visible">:</span>
                                    </div>
                                    <div className="w-full px-8 tab:px-0 tab:mt-2 tab:-ml-1.5">
                                        <div className="flex w-full justify-center tab:justify-start">
                                            <div>
                                                <div>
                                                    <div >
                                                        <div>
                                                            <div slot="icon-not-hovered" className="px-1.5 cursor-pointer ">
                                                                <FaFacebookF size={30} color="#3E6FA7" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="share-icon">
                                                <a href="http://twitter.com/intent/tweet?url=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3&text=%0A&hashtags=AcharyaPrashant,VideoSeries,wisdom,spirituality" target="_blank">
                                                    <div slot="icon">
                                                        <div>
                                                            <div className="px-1.5 cursor-pointer ">
                                                                <FaTwitter size={30} color="#08BBEE" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="share-icon">
                                                <a href="https://wa.me/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3" data-action="share/whatsapp/share" target="_blank">
                                                    <div slot="icon">
                                                        <div>
                                                            <div slot="icon-not-hovered" className="px-1.5">
                                                                <FaWhatsapp size={30} color="#06BA27" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="share-icon">
                                                <a href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/hi/video-modules/series/course-series-eeb9d3" target="_blank">
                                                    <div slot="icon">
                                                        <div>
                                                            <div slot="icon-not-hovered" className="px-1.5">
                                                                <FaLinkedinIn size={30} color="#0A66C2" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch pt-4 text-sm tab:pl-4 tab:pt-0 laptop:text-lg">
                            <div className="text-lg font-medium text-gray-title laptop:text-xl">
                                <span className="font-hi pt-[3px]">{subtitle}</span>
                            </div>
                            <div className="text-justify text-base text-gray-subtitle tab:pr-4">
                                <div className="hidden tab:block">
                                    <span className="font-hi pt-[3px]"> {description} </span>
                                </div>
                                <div className="tab:hidden">
                                    <span className="font-hi pt-[3px]">{descriptionSmall.text}{descriptionSmall.active ? '...' : ''}</span>
                                    <button
                                        className="cursor-pointer text-brand-600 hover:text-brand-800"
                                        onClick={handleDescription}
                                    >
                                        <span className="font-hi pt-[3px]"> {" "} {descriptionSmall.active ? 'और पढ़ें' : 'कम दिखाएं'} </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default HeroSection