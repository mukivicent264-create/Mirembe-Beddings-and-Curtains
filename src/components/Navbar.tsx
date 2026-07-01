import { Search, Menu, X, Truck, RefreshCcw, ShieldCheck, User, Heart, ShoppingBag, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { allProducts } from '../data/products';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount?: number;
}

export default function Navbar({ searchQuery, onSearchChange, cartCount = 0 }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (val: string) => {
    onSearchChange(val);
    setShowSuggestions(true);
    setIsSearching(true);
    if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
        setIsSearching(false);
    }, 500);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicking outside the desktop suggestions dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/products' },
    { name: 'Bedding', href: '#bedroom-inspiration' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-soft text-charcoal py-2.5 px-4 text-sm font-medium hidden md:flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4" />
          <span>Free Shipping on All Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCcw className="w-4 h-4" />
          <span>30-Day Easy Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Exceptional Quality, Guaranteed</span>
        </div>
      </div>

      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 shadow-sm border-b border-soft' : 'py-6 border-b border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 xl:gap-8 items-center min-h-[4rem] md:min-h-[6rem]">
            {/* Logo */}
            <div className="flex items-center cursor-pointer z-10 justify-start">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Mirembe" 
                  className="h-10 sm:h-12 md:h-20 lg:h-24 w-auto object-contain shrink-0" 
                />
              </Link>
            </div>
            
            {/* Desktop Nav - Centered */}
            <div className="hidden lg:flex justify-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`text-sm uppercase tracking-widest transition-colors pb-1 ${
                      (location.pathname === link.to && link.to === '/products') || (location.pathname === '/' && link.to === '/')
                        ? 'text-rose font-bold border-b-2 border-rose'
                        : 'text-charcoal/70 font-semibold hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href!)}
                    className="text-sm uppercase tracking-widest transition-colors pb-1 text-charcoal/70 font-semibold hover:text-charcoal"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>
            
            {/* Right Side container (Icons + Mobile Toggle) */}
            <div className="flex items-center justify-end gap-5 z-10 text-charcoal">
              {/* CTA / Icons (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-5">
                {/* Desktop Search Bar */}
                <div className="relative" ref={dropdownRef}>
                  <div className="flex items-center bg-soft/60 border border-soft hover:border-charcoal/20 focus-within:border-rose focus-within:bg-white rounded-sm px-3.5 py-1.5 transition-all w-48 xl:w-56 focus-within:w-64">
                    {isSearching ? (
                      <Loader2 className="w-4 h-4 text-rose mr-2 shrink-0 animate-spin" />
                    ) : (
                      <Search className="w-4 h-4 text-charcoal/40 mr-2 shrink-0" />
                    )}
                    <input
                      type="text"
                      placeholder="Search bedding..."
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      className="bg-transparent border-none outline-none text-xs text-charcoal placeholder-charcoal/40 w-full font-medium"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => {
                          onSearchChange("");
                          setShowSuggestions(false);
                        }} 
                        className="text-charcoal/40 hover:text-rose p-0.5 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  
                  {/* Suggestions Dropdown */}
                  {showSuggestions && searchQuery && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-soft py-2 z-50 max-h-80 overflow-y-auto">
                      <div className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-charcoal/40 border-b border-soft">
                        Product Suggestions
                      </div>
                      {allProducts
                        .filter(p => 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .slice(0, 5)
                        .map(product => (
                          <button
                            key={product.id}
                            onClick={() => {
                              onSearchChange("");
                              setShowSuggestions(false);
                              navigate(`/products/${product.id}`);
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-soft/40 w-full text-left transition-colors"
                          >
                            <img src={product.image} className="w-10 h-10 object-cover rounded-md shrink-0 border border-soft" referrerPolicy="no-referrer" />
                            <div className="min-w-0 flex-grow">
                              <p className="text-xs font-bold text-charcoal truncate">{product.name}</p>
                              <p className="text-[10px] text-rose font-medium mt-0.5">{product.price} • <span className="text-charcoal/50">{product.category}</span></p>
                            </div>
                          </button>
                        ))
                      }
                      {allProducts.filter(p => 
                        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 && (
                        <div className="px-4 py-4 text-xs text-charcoal/50 text-center font-medium">
                          No matches found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button className="hover:text-rose transition-colors"><User className="w-5 h-5" /></button>
                <a href="https://wa.me/256700000000" target="_blank" rel="noreferrer" className="relative group mr-2">
                  <ShoppingBag className="w-5 h-5 group-hover:text-rose transition-colors" />
                  {cartCount > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-charcoal text-white text-[10px] font-bold rounded-sm flex items-center justify-center">{cartCount}</span>}
                </a>
                <a href="https://wa.me/256700000000" target="_blank" rel="noreferrer" className="bg-rose text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-rose/90 transition-colors shadow-sm rounded-sm whitespace-nowrap">
                  WhatsApp Order
                </a>
              </div>
              
              {/* Mobile Toggle (Visible on Mobile & Tablet) */}
              <div className="flex lg:hidden items-center">
                <div className="flex md:hidden items-center gap-4 mr-2">
                  <button onClick={() => {
                    setIsMobileSearchOpen(!isMobileSearchOpen);
                    setIsMenuOpen(false);
                  }} className="text-charcoal hover:text-rose transition-colors">
                     <Search className="w-5 h-5" />
                  </button>
                  <a href="https://wa.me/256700000000" target="_blank" rel="noreferrer" className="relative mr-2">
                    <ShoppingBag className="w-5 h-5 text-charcoal" />
                    {cartCount > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-charcoal text-white text-[10px] font-bold rounded-sm flex items-center justify-center">{cartCount}</span>}
                  </a>
                </div>
                <button onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsMobileSearchOpen(false);
                }} className="text-charcoal hover:text-rose transition-colors p-2 -mr-2">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        <div className={`md:hidden absolute w-full left-0 top-full bg-white border-b border-soft shadow-md transition-all duration-300 origin-top overflow-hidden z-40 ${isMobileSearchOpen ? 'opacity-100 scale-y-100 max-h-40' : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'}`}>
          <div className="p-4">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsMobileSearchOpen(false);
              }}
              className="relative flex items-center bg-soft/50 border border-soft focus-within:border-rose focus-within:bg-white rounded-sm px-4 py-2.5 w-full transition-all shadow-sm"
            >
              {isSearching ? (
                <Loader2 className="w-4 h-4 text-rose mr-2 shrink-0 animate-spin" />
              ) : (
                <Search className="w-4 h-4 text-charcoal/40 mr-2 shrink-0" />
              )}
              <input
                type="text"
                placeholder="Search bedding, curtains..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-charcoal placeholder-charcoal/40 w-full font-semibold"
              />
              {searchQuery && (
                <button 
                  type="button"
                  onClick={() => onSearchChange("")} 
                  className="text-charcoal/40 hover:text-rose p-0.5 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full left-0 top-full bg-white border-b border-soft shadow-xl transition-all duration-300 ease-in-out origin-top z-30 ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="px-6 py-8 space-y-5">

            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm uppercase tracking-wider border-b border-soft/50 pb-2 active:opacity-50 transition-opacity touch-manipulation ${
                    (location.pathname === link.to && link.to === '/products') || (location.pathname === '/' && link.to === '/')
                      ? 'font-bold text-rose'
                      : 'font-semibold text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button 
                  key={link.name}
                  onClick={() => handleNavClick(link.href!)}
                  className="block text-left w-full text-sm uppercase tracking-wider border-b border-soft/50 pb-2 active:opacity-50 transition-opacity touch-manipulation font-semibold text-charcoal/70 hover:text-charcoal"
                >
                  {link.name}
                </button>
              )
            ))}
            <a 
              href="https://wa.me/256700000000" 
              target="_blank" 
              rel="noreferrer" 
              onTouchStart={() => {}}
              className="block text-center bg-rose text-white px-6 py-4 rounded-sm text-sm uppercase tracking-widest font-semibold mt-6 shadow-sm hover:bg-rose/90 active:scale-95 active:bg-rose-600 transition-all touch-manipulation" 
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
