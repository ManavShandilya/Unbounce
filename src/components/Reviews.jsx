import S1 from "../assets/star1.svg";
import S2 from "../assets/star 2.svg";
import DP1 from "../assets/P1.jpg";

const Reviews = () => {
    return (
        <div className="flex flex-col items-center w-full mx-auto md:container md:w-[63%] mb-20 px-4">
            {/* #01c4cc */}
            <p className="text-light text-xs font-bold mb-20">DON&rsquo;T JUST TAKE OUR WORD FOR IT</p>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8">
                <div className="flex flex-col items-start">
                    <img src={S1} alt="stars" className="w-20 h-auto" />
                    <p className="text-2xl w-[70%] italic mt-2">Share a real testimonial that hits some of your benefits (but isn&rsquo;t too sales-y).</p>
                    <div className="flex gap-5 items-center mt-8">
                        <img src={DP1} alt="stars" className="w-14 h-auto" />
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-medium">Robin</p>
                            <p className="text-xs font-normal">Location</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <img src={S2} alt="stars" className="w-20 h-auto" />
                    <p className="text-2xl w-[70%] italic mt-2">Include someone talking about how easy it was to sign up and participate.</p>
                    <div className="flex gap-5 items-center mt-8">
                        <img src={DP1} alt="stars" className="w-14 h-auto" />
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-medium">Robin</p>
                            <p className="text-xs font-normal">Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews