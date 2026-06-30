import { Heart, Star, ShoppingBag } from 'lucide-react';
import { motion } from "motion/react";
import { Link } from "react-router-dom";

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

export default function BedroomInspirationGallery() {
  const bestsellers = [
    {
      id: 1,
      name: "Premium Silk Bedsheet Set",
      price: "UGX 150,000",
      rating: 5,
      reviews: 129,
      image: "https://i.pinimg.com/1200x/7c/ea/42/7cea422ad115890c9ee1bf63f6a6798f.jpg"
    },
    {
      id: 2,
      name: "Plush Velvet Curtains",
      price: "UGX 220,000",
      rating: 5,
      reviews: 84,
      image: "https://i.pinimg.com/1200x/28/e8/f2/28e8f215e32394277b0e04176c023db0.jpg"
    },
    {
      id: 3,
      name: "Orthopedic Memory Pillow",
      price: "UGX 85,000",
      rating: 4,
      reviews: 212,
      image: "https://i.pinimg.com/1200x/0b/9a/f7/0b9af7ff060f22f6e058fc22976d859a.jpg"
    },
    {
      id: 4,
      name: "All-Season Down Duvet",
      price: "UGX 350,000",
      rating: 5,
      reviews: 67,
      image: "https://i.pinimg.com/236x/2e/8d/12/2e8d12d5e454cf30976cbc8fc688038b.jpg"
    }
  ];

  return (
    <section id="bedroom-inspiration" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-px bg-rose"></div>
              <span className="text-sm tracking-[0.2em] uppercase font-bold text-rose">
                Bestsellers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
              Our Most Loved Pieces
            </h2>
          </div>
          <a href="#collections" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-charcoal hover:text-rose transition-colors group">
            View All Products 
            <span className="w-8 h-px bg-charcoal group-hover:bg-rose group-hover:w-12 transition-all duration-300"></span>
          </a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {bestsellers.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              className="group flex flex-col relative cursor-pointer"
            >
              <Link to="/products" className="absolute inset-0 z-10"></Link>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-soft group-hover:shadow-xl transition-all duration-500">
                <img 
                  loading="lazy"
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-sm shadow-sm text-charcoal/60 hover:text-rose hover:bg-white transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-sm shadow-sm text-charcoal/60 hover:text-rose hover:bg-white transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 delay-75">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col text-left px-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < item.rating ? "fill-current" : "fill-transparent text-charcoal/30"}`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-charcoal/50">({item.reviews})</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2 line-clamp-1 group-hover:text-rose transition-colors">{item.name}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-md font-bold text-charcoal">{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#collections" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-charcoal hover:text-rose transition-colors group">
            View All Products 
            <span className="w-8 h-px bg-charcoal group-hover:bg-rose transition-all duration-300"></span>
          </a>
        </div>

      </div>
    </section>
  );
}
