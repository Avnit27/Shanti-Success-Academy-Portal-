import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#toppers' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Admission', href: '#admission' }
  ];

  // Custom scroll to center function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elCenter = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
      window.scrollTo({ top: elCenter, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-ssa-blue shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="public/favicon.png" alt="Shanti Success Academy Logo" className="h-14 w-14 mr-2 rounded-full bg-white shadow-md object-contain" />
            <span className="text-white font-montserrat font-bold text-xl sr-only">SHANTI SUCCESS ACADEMY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-ssa-yellow transition-colors duration-200 font-medium"
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919324714072"
              className="flex items-center bg-ssa-yellow text-ssa-blue px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919324714072"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-ssa-blue border-t border-blue-700">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-ssa-yellow hover:bg-blue-800 transition-colors duration-200"
                  onClick={e => { handleNavClick(e, item.href); setIsMenuOpen(false); }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2 space-y-2">
                <a
                  href="tel:+919324714072"
                  className="flex items-center justify-center bg-ssa-yellow text-ssa-blue px-4 py-2 rounded-lg font-semibold w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 93247 14072
                </a>
                <a
                  href="https://wa.me/919324714072"
                  className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold w-full"
                >
                  WhatsApp Chat
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
