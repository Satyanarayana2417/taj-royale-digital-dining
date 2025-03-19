
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'py-3 md:py-4 bg-transparent'
      )}
    >
      <div className="taj-container flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-serif font-bold"
          onClick={closeMobileMenu}
        >
          <span className={cn(
            'transition-colors duration-300',
            scrollPosition > 50 ? 'text-neutral-900' : 'text-white'
          )}>
            Taj<span className="text-gold">Royale</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 lg:space-x-6 xl:space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/menu', label: 'Menu' },
            { path: '/reservation', label: 'Book a Table' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link text-sm lg:text-base',
                isActive(link.path) && 'active',
                scrollPosition > 50 ? 'text-neutral-800' : 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-neutral-800" />
          ) : (
            <Menu className={cn(
              'h-6 w-6 transition-colors duration-300',
              scrollPosition > 50 ? 'text-neutral-800' : 'text-white'
            )} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          'fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <nav className="flex flex-col items-center space-y-6">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/menu', label: 'Menu' },
              { path: '/reservation', label: 'Book a Table' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-xl font-serif transition-colors duration-300',
                  isActive(link.path) ? 'text-gold' : 'text-neutral-800'
                )}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
