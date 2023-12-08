// /pages/index.js
import Header from '../components/common/Header';
import HomeBanner from '../components/home/HomeBanner';
import ServiceCard from '../components/home/ServiceCard';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <div className="flex flex-wrap justify-center p-8">
        <ServiceCard title="Diseño gráfico en tiempo real" description="Aquí va el detalle" ctaText="Trabajemos Juntos" />
        <ServiceCard title="Consultoría 1 a 1 para emprendedores" description="Aquí va el detalle" ctaText="Trabajemos Juntos" />
        <ServiceCard title="Estrategias de expansión comercial" description="Aquí va el detalle" ctaText="Trabajemos Juntos" />
        <ServiceCard title="Modelador de negocios: comienza desde cero" description="Aquí va el detalle" ctaText="Trabajemos Juntos" />
      </div>
    </div>
  );
};

export default Home;
