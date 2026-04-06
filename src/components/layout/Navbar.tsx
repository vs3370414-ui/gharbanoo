import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, LogIn, LogOut, User, ChevronDown, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../AuthProvider';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, openAuthModal, logout } = useAuth();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'House Plans', path: '/house-plans' },
    { name: 'Find Services', path: '/find-services' },
    { name: 'Join as Provider', path: '/join-provider' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white group-hover:bg-primary-dark transition-colors">
                <Home className="w-6 h-6" />
                <Heart className="w-3 h-3 absolute bottom-2 right-2 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-gray-900 leading-tight">Gharbanoo</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Ghar Ka Pehla Kadam</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus:outline-none"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-9 h-9 rounded-full border border-gray-200" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                  <span className="hidden lg:block max-w-[100px] truncate">{user.displayName?.split(' ')[0] || user.phoneNumber}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-gray-50 mb-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.displayName || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email || user.phoneNumber}</p>
                    </div>
                    <Link to="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                    <Link to="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      <FileText className="w-4 h-4" />
                      My Requests
                    </Link>
                    <div className="border-t border-gray-50 my-1"></div>
                    <button
                      onClick={() => { logout(); setIsDropdownOpen(false); }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={openAuthModal}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  Sign In
                </button>
                <a
                  href="https://wa.me/919241562747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
                >
                  WhatsApp Us
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user && (
              <div className="flex items-center gap-3 px-3 py-3 mb-2 border-b border-gray-100">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                )}
                <div className="overflow-hidden">
                  <div className="font-medium text-gray-900 truncate">{user.displayName || user.phoneNumber}</div>
                  <div className="text-xs text-gray-500 truncate">{user.email}</div>
                </div>
              </div>
            )}
            
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-primary bg-red-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link to="#" className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                  <User className="w-5 h-5" /> My Profile
                </Link>
                <Link to="#" className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                  <FileText className="w-5 h-5" /> My Requests
                </Link>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { openAuthModal(); setIsOpen(false); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </button>
                <a
                  href="https://wa.me/919241562747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-4 px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                >
                  WhatsApp Us
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
