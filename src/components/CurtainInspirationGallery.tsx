import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
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

export default function CurtainInspirationGallery() {
  const images = [
    {
      id: 1,
      title: "Sheer Elegance",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Velvet Drapes",
      image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Blackout Mastery",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop", // Reused beautiful room with curtains
    }
  ];

  return (
    <section id="curtain-inspiration" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4 tracking-tight">Curtain Inspiration</h2>
          <div className="w-12 h-1 bg-rose mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal/60 max-w-lg mx-auto text-sm leading-relaxed">
            Frame your windows with elegance. From light-filtering sheers to premium blackout velvets.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md border border-white"
            >
              <img 
                loading="lazy"
                src={img.image} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center">
                <h3 className="font-serif font-bold text-xl text-white mb-2">{img.title}</h3>
                <a href="#collections" className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-xs font-semibold uppercase tracking-wider text-white border border-white/50 hover:bg-white hover:text-charcoal px-4 py-2 rounded-full">
                  Explore Curtains
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
