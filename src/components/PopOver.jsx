import React from 'react'

const PopOver = (props) => {
    const { data, boxStyles, listStyles } = props;
    return (
        <div className={`absolute z-[221] left-0 top-full mt-4 bg-white  shadow-lg rounded-md w-52 ${boxStyles}`}>
            {data?.map((item, index) => (
                <div key={index} className={`block m-1 rounded-md px-4 py-2 hover:bg-brand-100 ${listStyles}`}>
                    <span className="font-hi pt-[3px] text-gray-500 ">
                        {item}
                    </span>

                </div>

            ))}

        </div>
    )
}

export default PopOver