// /pages/index.js
import Header from '../components/common/Header';
import HomeBanner from '../components/home/HomeBanner';
import ServiceCard from '../components/home/ServiceCard';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <div className="flex flex-wrap justify-center p-8 mx-0.5 mx-3.5">
            <div className="mx-7 "> <ServiceCard title="Diseño gráfico en tiempo real" description="Aquí va el detalle" ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Consultoría 1 a 1 para emprendedores" description="Aquí va el detalle" ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Estrategias de expansión comercial" description="Aquí va el detalle" ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Modelador de negocios: comienza desde cero" description="Aquí va el detalle" ctaText="mas información" /></div>



       
        
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
