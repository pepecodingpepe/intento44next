// /components/common/Footer.js
const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-slate-800 text-white p-8 fixed bottom-0 w-full">
      <div className="flex justify-between items-center">
        <div>
          {/* Agrega iconos de redes sociales */}
          <a href="#" className="text-white mr-4">Facebook</a>
          <a href="#" className="text-white mr-4">Twitter</a>
          <a href="#" className="text-white">Instagram</a>
        </div>

        <div className="text-center">
        <p className="text-base font-mono text-gray-300" > Agencia de consultoría y servicios profesionales de diseño gráfico</p>
          <p className="text-sm font-mono text-gray-500" >Chihuahua, Chih. Mexico © 2024</p>
          </div>

        <div>
          <button className="bg-lime-500 text-white font-black text-lg px-6 py-3 rounded-xl mr-8 mt-px-8">CONTACTO</button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
