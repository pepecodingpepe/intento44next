// /pages/services.js
import Header from '../components/common/Header';
import ServiceCard from '../components/home/ServiceCard';
import Footer from '../components/common/Footer';

const Services = () => {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <ServiceCard title="Servicio 1" description="Aquí va el detalle" />
        <ServiceCard title="Servicio 2" description="Aquí va el detalle" />
        {/* Agrega más ServiceCard según sea necesario */}
      </section>
      <Footer />
    </div>
  );
};

export default Services;
