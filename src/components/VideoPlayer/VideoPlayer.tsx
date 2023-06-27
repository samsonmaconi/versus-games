import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props: any) => {
  const { videoUrl, autoplay, className, muted } = props;
  return (
    <div className={`${className}`}>
      {renderVideoPlayer(videoUrl, autoplay, muted)}
    </div>
  );
};

const renderVideoPlayer = (
  videoUrl: string,
  autoplay: boolean,
  muted: boolean
) => {
  if (videoUrl.includes("youtube")) {
    // TODO: Youtube Video component
  } else {
    return <VideoComponent src={videoUrl} autoplay={autoplay} muted={muted} />;
  }
};

// tested for mp4 videos only
const VideoComponent = (props: any) => {
  const { src, autoplay, muted = true } = props;
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
  muted: PropTypes.bool,
  className: PropTypes.string,
};

export default React.memo(VideoPlayer);
