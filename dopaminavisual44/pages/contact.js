// /pages/contact.js
import Header from '@/components/common/Header';
import Footer from '../components/common/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="p-8">
        <img src="/cover-image.jpg" alt="Portada" className="w-full h-auto mb-8" />
        {/* Aquí va el formulario (puedes usar react-hook-form) */}
        <div className="flex justify-between mt-4">
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl font-bold ">Conoce nuestro portafolio</button>
          <button className="bg-lime-500 text-white px-4 py-2 rounded-xl font-bold ">Agenda una cita 1 a 1</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
