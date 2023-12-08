// /pages/about.js
import Header from '../components/common/Header';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Acerca de Nosotros</h2>
        <p className="mb-4">Aquí va el contenido del blog sobre tu negocio de consultoría.</p>
        {/* Agrega más párrafos, imágenes y otros elementos según sea necesario */}
      </section>
    </div>
  );
};

export default AboutUs;
