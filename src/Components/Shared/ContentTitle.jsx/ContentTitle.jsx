import PropTypes from "prop-types";

const ContentTitle = ({ title, description, barWidth }) => {
  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase font-oswald">
        {title}
      </h2>
      <hr
        className={`border-[#FF9D00] border-2 my-5`}
        style={{ width: `${barWidth}px` }}
      />
      <p className="text-gray-400">{description}</p>
    </>
  );
};

ContentTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  barWidth: PropTypes.number,
};

export default ContentTitle;
