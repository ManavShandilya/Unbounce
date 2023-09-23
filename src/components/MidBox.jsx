import video from '../assets/video (360p).mp4';
import VideoPlayer from './VideoPlayer';
function MidBox() {
    return (
        <div className="h-[646px] bg-extralight w-full mb-10">
            <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="text-4xl font-bold mt-8 mb-4 max-w-xl text-primary text-center">
                    <span className="text-center">
                        Show visitors what <br /> they&rsquo;re signing up for
                    </span>
                </h2>
                <span className="max-w-xl">
                    <p className="text-center">
                        Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
                    </p>
                </span>
            </div>
            <div className="flex justify-center items-center h-full  ">
                {/* <video className="w-full h-full max-w-4xl" src={video} controls /> */}
                <VideoPlayer video={video} />
            </div>
        </div>
    );
}

export default MidBox;
