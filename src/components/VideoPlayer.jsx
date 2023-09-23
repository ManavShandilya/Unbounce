/* eslint-disable react/prop-types */
import { useRef } from 'react';

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);

    const handleClick = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <video
            ref={videoRef}
            className="w-full h-full max-w-4xl"
            src={video}
            onClick={handleClick}
        />
    );
};

export default VideoPlayer;
