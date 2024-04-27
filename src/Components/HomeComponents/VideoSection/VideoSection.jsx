const VideoSection = () => {
  return (
    <div className="mt-16">
      <iframe
        className=""
        id="ytplayer"
        type="text/html"
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/HS24PywYlxg?controls=0&rel=0&playsinline=1&widget_referrer=https%3A%2F%2Fpreview.themeforest.net%2F&enablejsapi=1&origin=https%3A%2F%2Ftemplatekit.jegtheme.com&widgetid=1`}
      ></iframe>
    </div>
  );
};

export default VideoSection;
