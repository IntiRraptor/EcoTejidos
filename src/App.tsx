import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="EcoTejidos" className="h-12" />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'quienes-somos', 'producto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-600 hover:text-green-700 transition-colors ${
                    activeSection === section ? 'text-green-700 font-semibold' : ''
                  }`}
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {['inicio', 'quienes-somos', 'producto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-green-700"
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transformando el Futuro de la Moda
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              En EcoTejidos transformamos botellas PET en camisetas sostenibles, uniendo moda, innovación y responsabilidad ambiental.
            </p>
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      {/* Quienes Somos Section */}
      <section id="quienes-somos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Quiénes Somos
            </h2>
            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nuestra misión es transformar residuos plásticos en productos textiles de alta calidad, promoviendo la sostenibilidad ambiental y generando oportunidades económicas para comunidades rurales en Bolivia.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser líderes en la industria textil sostenible de Bolivia, reconocidos por innovar en procesos de reciclaje y por nuestro compromiso con el desarrollo comunitario y la protección del medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producto Section */}
      <section id="producto" className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestro Producto
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img 
                src="/product.png" 
                alt="Camiseta EcoTejidos" 
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Camiseta Sostenible
                </h3>
                <p className="text-gray-600">
                  Elaborada con materiales reciclados de alta calidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <img src="/logo.png" alt="EcoTejidos" className="h-16 invert" />
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <a href="mailto:info@ecotejidos.com" className="hover:text-green-300 transition-colors">
              info@ecotejidos.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;