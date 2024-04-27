import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    let templateParams = {
      from_name: email,
    };

    emailjs.init({
      publicKey: "6fqe3_D7QnBxWpkqD",
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });

    emailjs.send("service_sov7ppu", "template_bb92alg", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("email").value = "";
      },
      (error) => {
        console.log("FAILED...", error);
        document.getElementById("email").value = "";
      }
    );
  };

  return (
    <div className="bg-[#FF9D00] my-16 rounded-sm">
      <div className="flex flex-col lg:flex-row items-center p-5 lg:p-20 gap-5 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase font-oswald">
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
              id="email"
              className="rounded-lg pl-5 py-2 md:py-3 flex-1"
            />
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleForm}
              className="bg-black rounded-lg px-5 py-2 md:py-3 text-white"
            >
              <FaPaperPlane className="inline mr-2" />
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
