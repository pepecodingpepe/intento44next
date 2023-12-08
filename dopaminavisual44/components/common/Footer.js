// /components/common/Footer.js
const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex justify-between items-center">
        <div>
          {/* Agrega iconos de redes sociales */}
          <a href="#" className="text-white mr-4">Facebook</a>
          <a href="#" className="text-white mr-4">Twitter</a>
          <a href="#" className="text-white">Instagram</a>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">Contacto</button>
          <p className="text-sm">Leyenda breve sobre la empresa</p>
          <p className="text-sm">Chihuahua, Chih. Mexico</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
