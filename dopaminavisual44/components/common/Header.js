// /components/common/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/">
            
              <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
            
          </Link>
        </div>
        <nav>
          <Link href="/about">Acerca de Nosotros</Link>
          <Link href="/services">Nuestros Servicios</Link>
          <Link href="/contact">Trabajemos Juntos</Link>
          <Link href="/portfolio">Portafolio</Link>
          <Link href="/clients">Nuestros Clientes</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
