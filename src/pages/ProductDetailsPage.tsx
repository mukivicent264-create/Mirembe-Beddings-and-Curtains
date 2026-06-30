import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allProducts } from '../data/products';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Shield, Truck } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = allProducts.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif text-charcoal mb-4">Product Not Found</h2>
        <p className="text-charcoal/60 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="bg-charcoal text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-rose transition-colors shadow-md">
          Back to Collections
        </Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hello, I am interested in purchasing the ${product.name} (${product.category}) priced at ${product.price}. Could you provide more details?`);
    window.open(`https://wa.me/256700000000?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-warm min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-charcoal/60 hover:text-rose transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Image Gallery Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] shadow-xl relative bg-white"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm shadow-sm text-xs font-bold tracking-wider uppercase text-charcoal">
              {product.category}
            </div>
          </motion.div>

          {/* Product Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-medium leading-tight mb-4">
                {product.name}
              </h1>
              <div className="text-2xl font-serif font-bold text-rose">
                {product.price}
              </div>
            </div>

            <div className="prose prose-sm md:prose-base text-charcoal/70 mb-10 leading-relaxed">
              <p>{product.description}</p>
              <p className="mt-4">
                Experience unparalleled comfort and exquisite design with this premium piece from our {product.category} collection. Crafted with attention to detail to elevate your living space.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <Check className="w-5 h-5 text-rose" />
                <span>Premium quality materials</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <Truck className="w-5 h-5 text-rose" />
                <span>Fast nationwide delivery available</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <Shield className="w-5 h-5 text-rose" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex-[3] inline-flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-4 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-charcoal/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order via WhatsApp
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
              
              <button 
                onClick={() => alert('Added to cart!')}
                className="flex-[2] inline-flex items-center justify-center gap-2 bg-rose text-white px-4 py-4 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-rose/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Add to Cart
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-soft pt-16">
            <h2 className="text-3xl font-serif text-charcoal font-medium mb-10 text-center">Related Products</h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {relatedProducts.map((relatedProduct) => (
                <motion.div 
                  key={relatedProduct.id} 
                  variants={cardVariants}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-3 sm:mb-5 bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                    <Link to={`/products/${relatedProduct.id}`} className="absolute inset-0 z-20"></Link>
                    <img 
                      loading="lazy"
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm text-charcoal text-[8px] sm:text-[10px] font-bold tracking-widest uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-sm z-10 shadow-sm">
                      {relatedProduct.category}
                    </div>
                  </div>
                  <div className="px-1 sm:px-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1 sm:mb-2 gap-1 sm:gap-4">
                      <h3 className="text-charcoal font-serif font-medium text-sm sm:text-xl group-hover:text-rose transition-colors line-clamp-2 sm:line-clamp-1">{relatedProduct.name}</h3>
                      <span className="font-serif font-bold text-xs sm:text-lg text-charcoal shrink-0">{relatedProduct.price}</span>
                    </div>
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
          </div>
        )}
      </div>
    </div>
  );
}
