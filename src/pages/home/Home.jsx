import AboutUs from "../../Components/HomeComponents/AboutUs/AboutUs";
import Banner from "../../Components/HomeComponents/Banner/Banner";
import Category from "../../Components/HomeComponents/Category/Category";
import OfferFood from "../../Components/HomeComponents/OfferFood/OfferFood";
import VideoSection from "../../Components/HomeComponents/VideoSection/VideoSection";
import CustomerReview from "../../Components/Shared/CustomerReview/CustomerReview";
import NewsLetter from "../../Components/Shared/NewsLetter/NewsLetter";

function Home() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <Banner />
        <Category />
        <OfferFood />
        <AboutUs />
        <VideoSection />
        <NewsLetter />
        <CustomerReview />
      </div>
    </div>
  );
}

export default Home;
