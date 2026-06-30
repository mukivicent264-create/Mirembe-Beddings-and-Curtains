import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function PromotionalBanner() {
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden bg-white shadow-xl flex flex-col md:flex-row items-stretch rounded-2xl"
        >
          {/* Content on left */}
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gold font-bold tracking-[0.25em] uppercase text-sm mb-4 block">Limited Time Offer</span>
              <h3 className="font-serif text-5xl md:text-6xl text-charcoal mb-6 tracking-tight font-medium">Summer Sale</h3>
              <p className="text-charcoal/80 text-xl md:text-2xl font-light mb-10 leading-relaxed">
                Refresh your space with up to <strong className="font-semibold text-rose">25% Off</strong> selected beddings and curtains.
              </p>
              <Link 
                to="/products" 
                onTouchStart={() => {}}
                className="inline-block bg-rose text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-rose/90 active:scale-95 active:bg-rose-600 transition-all duration-200 shadow-md hover:shadow-lg rounded-sm cursor-pointer touch-manipulation"
              >
                Shop The Sale
              </Link>
            </motion.div>
          </div>
          
          {/* Background image on right */}
          <div className="md:w-1/2 w-full h-80 md:h-auto relative order-1 md:order-2">
            <img 
              loading="lazy"
              src="https://i.pinimg.com/736x/48/2b/9e/482b9e9992648226338716c72ebdd601.jpg" 
              alt="Beautiful bedroom interior" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay for better blending */}
            <div className="absolute inset-0 bg-charcoal/5 mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
