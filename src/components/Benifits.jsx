import benfit1 from "../assets/ben1.svg";
import benfit2 from "../assets/ben2.svg";
import benfit3 from "../assets/ben3.svg";
import AppointmentForm from "./AppointmentForm";
import BenefitItem from "./BenefitItem";

const Benefits = () => {
    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-x-10 mb-20 mx-4">
            <div className="lg:w-[30%]">
                <BenefitItem
                    imageSrc={benfit1}
                    title="Benefit 1"
                    description="Include a description of Benefit 1 here."
                />
                <BenefitItem
                    imageSrc={benfit2}
                    title="Benefit 2"
                    description="Include a description of Benefit 2 here."
                />
                <BenefitItem
                    imageSrc={benfit3}
                    title="Benefit 3"
                    description="Include a description of Benefit 3 here."
                />
            </div>
            <div className="text-center bg-primary mx-4 mt-2 md:px-8 md:py-10 md:mt-[-100px] lg:w-[25%] p-4 ">
                <div className="max-w-md mx-auto ">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold mb-2  mx-16 text-white">Schedule an Appointment</h2>
                        <p className="text-white">
                            Here, let visitors know what will happen when they complete your form.
                        </p>
                    </div>
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
