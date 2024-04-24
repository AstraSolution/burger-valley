import React, { useState } from 'react';
import { FaRegClock } from "react-icons/fa";
import News_Category from './News_Category';



const News_Features = ({ allNewsData }) => {
    console.log(allNewsData);


    return (
        <div className='px-2 py-1 text-white'>

            <div >
                <h1 className='text-2xl '>News Features</h1>
                <div className=' border-b-4 border-[#FF9D00] py-1 w-16  '></div>
            </div>

            {allNewsData?.slice(0, 3)?.map((news) => {
                const date = new Date(news.publish_date);
                const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;

                return (
                    <div key={news._id}>
                        {/* News features */}
                        <div className='py-2'>
                            <h1>{news?.title}</h1>
                            <p className='flex items-center gap-1'>
                                <span className='text-[#FF9D00]'><FaRegClock /></span>
                                <span className='text-lg'>{formattedDate}</span>
                            </p>
                        </div>
                    </div>
                );
            })}


            <News_Category></News_Category>

        </div>
    );
};

export default News_Features;
