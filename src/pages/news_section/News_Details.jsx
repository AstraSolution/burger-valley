import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import News_Features from './News_Features';
import { AiFillDislike } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Offer_Card from './Offer_Card';
import { useLoaderData } from 'react-router-dom';
import useGetAllNews from '../../Hooks/userGetAllnews';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import News_Category from './News_Category';



const News_Details = () => {

    const currentPageURL = "burgervalley.com"

    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);

    const newsData = useLoaderData()

    console.log(newsData.description.conclusion);


    const [tabs] = useState([
        { id: "all", label: "All" },
        { id: "burger", label: "Burger" },
        { id: "snack", label: "Snack" },
        { id: "beverage", label: "Beverage" },
    ]);

    let [activeTab, setActiveTab] = useState(tabs[0]?.id);
    const CurrentTab = activeTab === "all" ? allNewsData : allNewsData?.filter((food) => food?.category === activeTab);




    return (
        <>
            <div className="lg:flex px-1 md:px-2 lg:px-1 py-1 lg:py-2 bg-black ">

                {/* left side  */}
                <div className="container mx-auto w-full  flex flex-col items-center  rounded-lg shadow  px-1 md:px-1 lg:px-1">


                    {/* title image  */}
                    <img className="object-cover w-full rounded-t-lg md:h-[400px] h-[250px] " src={newsData?.image} alt="" />

                    <div className='text-white px-1 md:px-2 lg:px-4 py-1 lg:py-2'>

                        <div className=' py-4'>
                            {/* title and description and other info */}
                            <h5 className="mb-2  md:text-2xl lg:text-4xl text-xl font-bold tracking-tight text-white  dark:text-white font-oswald md:py-4   "> {newsData?.title} </h5>

                            {
                                newsData?.description?.paragraphs?.map((paragraph, index) => <p key={index} className='md:py-2 py-1 text-sm text-white md:text-md  lg:text-lg  font-oswald  lg:tracking-wide ' >
                                    {paragraph}
                                </p>)
                            }


                            <h3 className='text-white  uppercase font-bold text-2xl lg:mt-6 md:mt-4 mt-2 font-oswald  lg:tracking-wide '> content writer for website  </h3>
                        </div>


                        {/* description image  */}

                        <div className='grid grid-cols-2 gap-2 md:gap-3 mlg:gap-5 lg:mt-6 md:mt-4 mt-2 mb-4'>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>

                        </div>

                        {/* description  */}
                        <div className='text-white py-2 md:py-3 lg:py-4 mb-10 font-oswald lg:tracking-wide'>
                            <p>Indulge in the timeless taste of our Classic Cheeseburger, where juicy, flame-grilled beef meets the creamy richness of melted cheddar cheese, all nestled between two perfectly toasted sesame seed buns. Every bite is a symphony of flavor, with the savory meat complemented by crisp lettuce, ripe tomatoes, crunchy pickles, and a dollop of our signature tangy burger sauce. Satisfy your cravings with this iconic American favorite, crafted with quality ingredients and served with a side of golden, crispy fries. Dive into a world of deliciousness with our Classic Cheeseburger today!</p>
                        </div>



                        {/* list item */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-5 gap-1 font-oswald lg:tracking-wide '>

                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>

                        </div>


                        {/*conclusion  */}
                        {newsData?.description?.conclusion ? (
                            <p className='my-10 text-sm md:text-md lg:text-lg font-oswald lg:tracking-wide'>{newsData?.description?.conclusion}</p>
                        ) : (
                            <p className='font-oswald lg:tracking-wide'>Conclusion not available</p>
                        )}

                        {/* tag and like and share section  */}
                        <div className='md:flex items-center justify-between'>
                            {/* tag  */}
                            <div className='md:flex items-center  md:gap-[110px] '>
                                <div className='flex items-center gap-2 font-oswald lg:tracking-wide'>
                                    <h1> Tags : </h1>
                                    {newsData?.tags?.map((tag, index) => (
                                        <div key={index}>
                                            <h1 className='text-[#FF9D00] text-sm md:text-md '> {tag},</h1>
                                        </div>
                                    ))}

                                </div>

                                <div>
                                    {/* like and dislike button  */}
                                    <div className='flex gap-10 items-center mt-4 md:mt-0 lg:mt-0 font-oswald lg:tracking-wide'>
                                        <p> {newsData.likes}</p>
                                        <p>
                                            {newsData.dislikes}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-6 mt-2 font-oswald lg:tracking-wide'>

                                        {/* like button */}
                                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">

                                            <svg className="md:w-4 md:h-4 w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                            </svg>


                                        </button>

                                        {/* dislike button */}
                                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">

                                            <AiFillDislike className='md:w-4 md:h-4 w-3 h-3'></AiFillDislike>


                                        </button>
                                    </div>
                                </div>


                            </div>

                            {/* share now icon  */}
                            <div className='flex items-center md:gap-6  gap-3 md:mt-0 mt-6 '>
                                <h1 className='text-sm md:text-md lg:text-lg font-oswald lg:tracking-wide'> Share Now : </h1>
                                <FacebookShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaFacebook></FaFacebook>  </button>
                                </FacebookShareButton>

                                <LinkedinShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaLinkedin ></FaLinkedin>  </button>
                                </LinkedinShareButton>


                                <TwitterShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaTwitter ></FaTwitter>  </button>
                                </TwitterShareButton>
                            </div>

                        </div>

                        <div className='border-b-2 md:my-8 lg:my-10 my-4 border-gray-500 '></div>


                        <div className='font-oswald lg:tracking-wide '>
                            <h1 className='text-2xl font-bold py-4 '> Leave  Reply </h1>
                            <p className='mb-6'> Please Share Your Opinio Now  .</p>

                            <form className=" mx-auto">
                                <div className="mb-5">
                                    <div className='flex items-center gap-2'>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Commitments </label>
                                        <span className='text-[#FF9D00] text-2xl '>*</span>
                                    </div>
                                    <textarea className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="commit" id="" cols="30" rows="10" placeholder="Commitments" required ></textarea>


                                </div>
                                <div className="mb-5">
                                    <div className='flex items-center gap-2'>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                        <span className='text-[#FF9D00] text-2xl '>*</span>
                                    </div>
                                    <input type="email" id="email" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />
                                </div>
                                <div className="mb-5">
                                    <div className='flex items-center gap-2'>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                        <span className='text-[#FF9D00] text-2xl '>*</span>
                                    </div>
                                    <input type="email" id="email" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-mediumd text-white">Your Web Site</label>
                                    <input type="text" id="password" className="bg-gray-900 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Website Link" />
                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-200">Remember me</label>

                                </div>
                                <button type="submit" className="text-white bg-[#FF9D00] hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Post Comment</button>
                            </form>

                        </div>

                    </div>
                </div>

                {/* right side  */}
                <div className=" lg:block lg:w-5/12 px-2  text-white font-oswald lg:tracking-wide">
                    <News_Features allNewsData={allNewsData} />
                    
                   <News_Category tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} ></News_Category>

                    <Offer_Card></Offer_Card>
                </div>
            </div>
        </>
    );
};

export default News_Details;