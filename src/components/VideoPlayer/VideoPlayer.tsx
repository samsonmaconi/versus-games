import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props: any) => {
  const { videoUrl, autoplay, className } = props;
  return (
    <div className={`${className}`}>
      {renderVideoPlayer(videoUrl, autoplay)}
    </div>
  );
};

const renderVideoPlayer = (videoUrl: string, autoplay: boolean) => {
  if (videoUrl.includes("youtube")) {
    // TODO: Youtube Video component
  } else {
    return <VideoComponent src={videoUrl} autoplay={autoplay} />;
  }
};

// tested for mp4 videos only
const VideoComponent = (props: any) => {
  const { src, autoplay = true, muted = true } = props;
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <video
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        playsInline={true}
        autoPlay={autoplay}
        muted={muted}
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  className: PropTypes.string,
};

export default React.memo(VideoPlayer);
