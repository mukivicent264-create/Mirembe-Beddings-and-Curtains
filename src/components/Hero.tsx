import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative overflow-hidden pt-24 pb-12 lg:py-24 bg-charcoal lg:min-h-screen lg:flex lg:items-center lg:justify-center"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center max-w-3xl lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-rose fill-rose" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-white">
              Trusted by 10,000+ Ugandan Homes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.05] tracking-tight mb-6 sm:mb-8 drop-shadow-2xl"
          >
            Transform Your Home Into a <span className="italic font-light text-rose relative inline-block">Haven<svg className="absolute w-full h-3 -bottom-1 left-0 text-rose/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg></span> of Comfort.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/80 text-lg sm:text-xl mb-10 sm:mb-12 max-w-xl leading-relaxed font-medium drop-shadow-md"
          >
            Discover premium bedsheets, blankets, pillows, curtains, and bedding sets designed to bring comfort, elegance, and style to every home. Quality products, affordable prices, and delivery across Uganda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link
              to="/products"
              className="group bg-rose text-white px-8 py-4 sm:px-10 sm:py-5 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] flex items-center justify-center w-full sm:w-auto rounded-sm"
            >
              Shop Collection
            </Link>
            <a
              href="https://wa.me/256700000000?text=Hello Mirembe Beddings, I would like to place an order."
              className="group flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-[#25D366] text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#25D366] transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] rounded-sm"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right Content / Abstract visual */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
        >
            <div className="absolute inset-0 bg-rose/20 blur-3xl mix-blend-screen transform translate-x-10 translate-y-10 pointer-events-none"></div>
            <img 
              src="https://i.pinimg.com/originals/f0/f6/1a/f0f61a6e0d021d68bf1661ad6ed1e1a6.jpg" 
              className="relative w-full max-w-xl lg:max-w-2xl h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              alt="Premium bedding detail"
              referrerPolicy="no-referrer"
            />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-bounce hidden md:flex"
      >
        <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase rotate-90 mb-8">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </div>
  );
}
