import f1 from "../assets/F1.jpg";
import f2 from "../assets/F2.jpg";
import f3 from "../assets/F3.jpg";

// eslint-disable-next-line react/prop-types
const FeatureBox = ({ src, name, desc }) => {
    return (
        <div className="w-full">
            <img src={src} alt="features" className="w-full h-auto cursor-pointer" />
            <p className="font-semibold text-lg mt-5 text-primary cursor-pointer">{name}</p>
            <p className="font-normal text-sm text-primary w-[80%] mt-2 cursor-pointer">{desc}</p>
        </div>
    )
}

const Features = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto md:container md:w-[63%] mb-20 gap-5 px-4 md:px-0">
            <FeatureBox src={f1} name="FEATURE 1" desc="Talk about some of the details of your offer with a focus on the value people get back."/>
            <FeatureBox src={f2} name="FEATURE 2" desc="Talk about some of the details of your offer with a focus on the value people get back."/>
            <FeatureBox src={f3} name="FEATURE 3" desc="Talk about some of the details of your offer with a focus on the value people get back."/>
        </div>
    )
}

export default Features