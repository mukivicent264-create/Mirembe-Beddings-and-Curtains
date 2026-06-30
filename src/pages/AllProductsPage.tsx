import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { allProducts, getMixedProducts } from '../data/products';
import { Search, X, Loader2 } from 'lucide-react';

interface AllProductsPageProps {
  searchQuery: string;
  onClearSearch: () => void;
  onSearchChange: (query: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 15 
    } 
  }
};

export default function AllProductsPage({ searchQuery, onClearSearch, onSearchChange }: AllProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    // Start at current scroll position to avoid jumping
    let scrollPos = scrollContainer.scrollLeft;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 0.5; // Adjust speed here
        // If we've scrolled past half the total scroll width (the first set of items), reset
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const handleSearchChange = (val: string) => {
    onSearchChange(val);
    setIsSearching(true);
    if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
        setIsSearching(false);
    }, 500);
  };

  const categories = ["All", "Bedsheets", "Pillows", "Blankets", "Duvets", "Curtains", "Bedding Sets"];

  const filteredProducts = searchQuery
    ? allProducts.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : activeCategory === "All"
      ? getMixedProducts()
      : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-warm min-h-screen">
      {/* Page Header/Banner */}
      <div className="bg-charcoal text-white pt-32 pb-20 px-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <Link to="/" className="relative z-20 inline-flex items-center gap-2 text-white/60 hover:text-rose transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">Our Collections</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl">
              Discover our premium range of home goods designed to elevate your living spaces with comfort and style.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-white/10 border border-white/20 focus:border-rose focus:bg-white/20 rounded-sm pl-11 pr-10 py-3.5 text-sm text-white placeholder-white/50 transition-all outline-none backdrop-blur-sm"
              />
              {isSearching ? (
                <Loader2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose animate-spin" />
              ) : (
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              )}
              {searchQuery && (
                <button 
                  onClick={onClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Navigation */}
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-charcoal/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 mb-4 border ${
                activeCategory === category 
                  ? 'bg-pink-100 border-rose text-charcoal shadow-md' 
                  : 'bg-pink-50 border-transparent text-charcoal/70 hover:bg-pink-100/50 hover:text-charcoal shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
          {/* Duplicated for seamless auto scrolling */}
          {categories.map((category) => (
            <button
              key={`dup-${category}`}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 mb-4 border ${
                activeCategory === category 
                  ? 'bg-pink-100 border-rose text-charcoal shadow-md' 
                  : 'bg-pink-50 border-transparent text-charcoal/70 hover:bg-pink-100/50 hover:text-charcoal shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={`${activeCategory}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={cardVariants}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-3 sm:mb-5 bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                  <Link to={`/products/${product.id}`} className="absolute inset-0 z-20"></Link>
                  <img 
                    loading="lazy"
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm text-charcoal text-[8px] sm:text-[10px] font-bold tracking-widest uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-sm z-10 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="px-1 sm:px-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-1 sm:mb-2 gap-1 sm:gap-4">
                    <h3 className="text-charcoal font-serif font-medium text-sm sm:text-xl group-hover:text-rose transition-colors line-clamp-2 sm:line-clamp-1">{product.name}</h3>
                    <span className="font-serif font-bold text-xs sm:text-lg text-charcoal shrink-0 mt-1 sm:mt-0">{product.price}</span>
                  </div>
                  <p className="text-charcoal/60 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed hidden sm:block">{product.description}</p>
                  <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 mt-2 sm:mt-3">
                    <div className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-charcoal/40 group-hover:text-rose transition-colors">
                      <span className="border-b border-transparent group-hover:border-rose pb-0.5 transition-all">View Details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform sm:w-[14px] sm:h-[14px]">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to cart functionality would go here
                        alert('Added to cart!');
                      }}
                      className="relative z-30 bg-pink-100 hover:bg-rose text-charcoal hover:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm text-[8px] sm:text-[10px] font-bold tracking-widest uppercase transition-colors shadow-sm w-full xl:w-auto text-center flex items-center justify-center"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 max-w-md mx-auto">
            <p className="text-charcoal/60 font-semibold mb-6 text-lg">
              No products found
            </p>
            <p className="text-charcoal/45 text-sm mb-8 leading-relaxed">
              We couldn't find any items matching your current filters. Try adjusting your search or category selection.
            </p>
            <button 
              onClick={() => {
                setActiveCategory("All");
                onClearSearch();
              }}
              className="bg-charcoal text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-rose transition-colors duration-300 shadow-md"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
