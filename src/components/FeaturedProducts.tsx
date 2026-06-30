import { allProducts, getMixedProducts } from "../data/products";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

interface FeaturedProductsProps {
  activeCategory: string;
  searchQuery?: string;
  onClearSearch?: () => void;
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

export default function FeaturedProducts({ 
  activeCategory, 
  searchQuery = "", 
  onClearSearch 
}: FeaturedProductsProps) {
  const navigate = useNavigate();
  
  const filteredProducts = searchQuery
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const displayedProducts = searchQuery
    ? filteredProducts
    : activeCategory === "All" 
      ? getMixedProducts(8) 
      : allProducts.filter(p => p.category === activeCategory).slice(0, 8);

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center flex flex-col items-center"
        >
          <span className="text-sm tracking-[0.2em] uppercase font-bold text-charcoal/60 mb-4">
            {searchQuery ? "Search Results" : "Curated For You"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight font-medium">
            {searchQuery 
              ? `Results for "${searchQuery}"`
              : activeCategory === "All" 
                ? "Featured Collections" 
                : `${activeCategory} Collection`
            }
          </h2>
          {searchQuery && (
            <button 
              onClick={onClearSearch}
              className="mt-4 text-xs font-bold uppercase tracking-widest text-rose border-b border-rose pb-1 hover:text-charcoal hover:border-charcoal transition-all"
            >
              Clear Search
            </button>
          )}
        </motion.div>

        {displayedProducts.length > 0 ? (
          <>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              key={`${activeCategory}-${searchQuery}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {displayedProducts.map((product) => (
                <motion.div 
                  key={product.id} 
                  variants={cardVariants}
                  className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <Link to={`/products/${product.id}`} className="absolute inset-0 z-20"></Link>
                  <img 
                    loading="lazy"
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-charcoal text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-sm shadow-sm z-10">
                    {product.price}
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 text-left w-full flex flex-col justify-end h-full">
                    <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[8px] sm:text-[10px] tracking-widest uppercase text-white/50 font-bold mb-1 block">
                        {product.category}
                      </span>
                      <h3 className="text-white text-base sm:text-xl md:text-2xl font-serif font-bold mb-2 sm:mb-4 drop-shadow-md line-clamp-1">{product.name}</h3>
                      <p className="text-white/75 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2 font-medium hidden group-hover:hidden sm:group-hover:block transition-all duration-300">
                        {product.description}
                      </p>
                      <div className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-rose text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-sm text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all shadow-md group-hover:shadow-lg group-hover:bg-white group-hover:text-charcoal border border-transparent group-hover:border-white relative z-30">
                        Shop 
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {!searchQuery && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <Link 
                  to="/products"
                  className="inline-block bg-charcoal text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-rose transition-colors duration-300 shadow-md hover:shadow-xl"
                >
                  View More Products
                </Link>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <p className="text-charcoal/60 font-semibold mb-6 text-lg">
              No products match "{searchQuery}"
            </p>
            <p className="text-charcoal/45 text-sm mb-8 leading-relaxed">
              We couldn't find any items matching your search. Try checking your spelling or searching for general categories like Beddings, Pillows, or Curtains!
            </p>
            <Link 
              to="/products"
              onClick={onClearSearch}
              className="inline-block bg-charcoal text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-rose transition-colors duration-300 shadow-md"
            >
              View All Collections
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
