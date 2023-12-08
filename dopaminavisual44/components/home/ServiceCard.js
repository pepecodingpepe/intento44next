// /components/home/ServiceCard.js
const ServiceCard = ({ title, description, ctaText }) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{ctaText}</button>
      </div>
    );
  };
  
  export default ServiceCard;
  