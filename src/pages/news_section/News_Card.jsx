import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetAllNews from "../../Hooks/userGetAllnews";
import RightSide from "./RightSide";
import News_Features from "./News_Features";

const News_Card = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedNews, setExpandedNews] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/newsData.json");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleReadMore = (id) => {
    setExpandedNews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`lg:hidden fixed top-0 left-0 h-full z-50 bg-black w-4/5 md:w-3/5  transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <RxCross2></RxCross2>
          </button>
        </div>
        <div className="p-4">
          <News_Features />
        </div>
      </div>
      <div>
        <button className="lg:hidden px-2 py-2" onClick={toggleSidebar}>
          {" "}
          <FaBarsStaggered></FaBarsStaggered>{" "}
        </button>
      </div>
      <div className="lg:flex bg-black ">
        <section className=" container mx-auto  w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-2 py-4 ">
          {data?.map((news) => (
            <div key={news.id}>
              <div className=" w-full bg-black border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg  w-full h-[300px] "
                    src={news?.image}
                    alt=""
                  />
                </a>
                <div className="lg:px-2 md:px-1 px-1 py-3">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-white  dark:text-white">
                    {news?.title}
                  </h5>

                  {/* <p className="mb-3 font-normal text-gray-300  dark:text-gray-400">{news?.description}</p> */}
                  <p
                    className={`mb-3 font-normal text-gray-300 ${
                      expandedNews[news.id] ? "block" : ""
                    } dark:text-gray-400`}
                  >
                    {expandedNews[news?.id]
                      ? news?.description
                      : `${news?.description.slice(0, 300)}${
                          news?.description.length > 40 ? "..." : ""
                        }`}
                    {news?.description.length > 40 && (
                      <button
                        onClick={() => handleReadMore(news.id)}
                        className="inline-flex items-center  px-1 text-md font-medium text-center text-yellow-600 rounded-lg focus:outline-none"
                      >
                        {expandedNews[news?.id] ? "Show Less" : "Read Now"}
                      </button>
                    )}
                  </p>

                  <Link to={`/news_details/${news?.id}`}>
                    <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600  rounded-lg  focus:ring-4 focus:outline-none  ">
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="hidden lg:block lg:w-5/12 px-2 py-4">
          <News_Features />
          <Offer_Card></Offer_Card>
        </div>
      </div>
    </>
  );
};

export default News_Card;
