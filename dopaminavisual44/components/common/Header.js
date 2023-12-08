// /components/common/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
          </Link>
        </div>
        <nav className={`flex ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
          <Link href="/about" className="nav-link">Acerca de Nosotros</Link>
          <Link href="/services" className="nav-link">Nuestros Servicios</Link>
          <Link href="/contact" className="nav-link">Trabajemos Juntos</Link>
          <Link href="/portfolio" className="nav-link">Portafolio</Link>
          <Link href="/clients" className="nav-link">Nuestros Clientes</Link>
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
