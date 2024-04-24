import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="bg-yellow-400 my-16 rounded-sm">
      <div className="flex flex-col lg:flex-row items-center p-5 lg:p-20 gap-5 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase">
            Get exclusive update
          </h2>
          <p className="mt-3 text-white text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <form className="flex gap-5">
            <input
              type="text"
              placeholder="Email"
              name=""
              id=""
              className="rounded-lg pl-5 py-2 md:py-3 flex-1"
            />
            <button className="bg-black rounded-lg px-5 py-2 md:py-3 text-white">
              <FaPaperPlane className="inline mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
