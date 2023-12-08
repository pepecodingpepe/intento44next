// /pages/contact.js
import Header from '@/components/common/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="p-8">
        <img src="/cover-image.jpg" alt="Portada" className="w-full h-auto mb-8" />
        {/* Aquí va el formulario (puedes usar react-hook-form) */}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Conoce nuestro portafolio</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Agenda una cita 1 a 1</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
