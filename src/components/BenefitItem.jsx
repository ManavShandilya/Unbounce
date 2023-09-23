/* eslint-disable react/prop-types */
const BenefitItem = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-start mt-8">
      <div className="">
        <img src={imageSrc} alt={title} className="w-12 h-auto" />
      </div>
      <div className="pl-4">
        <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>
        <p className="mb-4 text-primary">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
