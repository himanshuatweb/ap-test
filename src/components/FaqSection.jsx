import { useState, useRef, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useFetchData from '../hooks/useFetchData';
import LoadingSpinner from './Spinner';

const FaqSection = () => {

    const { data: faqData, loading } = useFetchData('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi');
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
    const [accordionHeights, setAccordionHeights] = useState([]);
    const accordionRefs = useRef([]);

    useEffect(() => {
        const newAccordionHeights = accordionRefs.current.map(ref => ref.scrollHeight);
        setAccordionHeights(newAccordionHeights);
    }, [faqData]);

    const toggleAccordion = (index) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    if (loading) {
        return (
            <LoadingSpinner />
        );
    }

    return (
        <div className="bg-gradient-to-b from-slate-50 px-4 py-16 tab:px-4 laptop:px-20">
            <div className="tab:flex">
                <div className="pb-10 tab:w-1/3 tab:pb-0">
                    <div className="text-lg font-medium text-gray-title"><span className="font-hi pt-[3px]">अक्सर पूछे जाने वाले प्रश्न</span></div>
                    <div className="pt-1">
                        <span className="font-hi dynamicHTMLContainer pt-[3px]">
                            <p>आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी <a target="_blank" href="/hi/technical-support"><span style={{ color: '#DD6B20' }}>सपोर्ट</span></a> टीम से संपर्क करें।</p>
                        </span>
                    </div>
                </div>
                <div className="w-full tab:pl-24">
                    {faqData.map((faq, index) => {
                        let { answer, question } = faq;

                        answer = answer.replaceAll('<p>', '')
                        answer = answer.replaceAll('</p>', '')

                        return (
                            <div key={index}>
                                <div
                                    className="flex items-center justify-between tab:cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="pr-2 font-medium text-gray-subtitle">
                                        <span className="font-hi pt-[3px]"> {question} </span>
                                    </div>
                                    <div className="h-3 w-3 text-slate-400 hover:text-slate-800">
                                        {openAccordionIndex === index ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}
                                    </div>
                                </div>
                                <div
                                    ref={el => (accordionRefs.current[index] = el)}
                                    className="overflow-hidden transition-max-height duration-300"
                                    style={{ maxHeight: openAccordionIndex === index ? accordionHeights[index] + 'px' : 0 }}
                                >
                                    <div className="pt-1 pr-4 leading-normal text-gray-subtitle tab:pr-8 tab:text-base">
                                        <span className="font-hi pt-[3px]">{answer}</span>
                                    </div>
                                </div>
                                <div className="my-4 h-[0.5px] justify-start bg-gray-separator"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;