// /components/common/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ backgroundColor: '#ffffff' }} >
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <img style={{ padding: '10px' }}
            src="https://iili.io/JIrTVu1.png"  alt="Logo" className="w-80 h-auto" />
          </Link>
        </div>
        <nav className={`flex ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
          <Link href="/about"  className="nav-linkA">Acerca de Nosotros</Link>
          <Link href="/services"  className="nav-linkB">Productos & Servicios</Link>
          <Link href="/portfolio"  className="nav-linkC">Portafolio</Link>
          <Link href="/clients" className="nav-link">Nuestros Clientes</Link>
          <Link href="/contact" className="nav-link2">Manos a la Obra</Link>

        </nav>
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Cerrar' : 'Menú'}
        </button>
      </div>
    </header>
  );
};

export default Header;
