import { ShieldCheck, Truck, Tag, Heart, Scissors } from 'lucide-react';
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Quality Fabrics",
      bg: "bg-charcoal",
    },
    {
      icon: <Tag className="w-6 h-6 text-white" />,
      title: "Affordable Prices",
      bg: "bg-rose",
    },
    {
      icon: <Truck className="w-6 h-6 text-charcoal" />,
      title: "Fast Delivery",
      bg: "bg-[#D4AF37]", // gold
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Trusted by Ugandan Families",
      bg: "bg-charcoal",
    },
    {
      icon: <Scissors className="w-6 h-6 text-white" />,
      title: "Custom Curtain Solutions",
      bg: "bg-rose",
    }
  ];

  return (
    <section id="about" className="py-24 bg-soft/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-rose font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-4">
                <span className="w-12 h-[2px] bg-rose"></span>
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-charcoal mb-8 leading-tight">
                The Mirembe Difference
              </h2>
              <p className="text-charcoal/70 text-lg mb-12 leading-relaxed max-w-xl font-medium">
                We are committed to bringing elegance and comfort to your home with premium products designed for everyday living, crafted with exceptional quality and care.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-charcoal/5 hover:border-rose/20 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warm rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${feature.bg} shadow-sm group-hover:-translate-y-1 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-rose transition-colors">{feature.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
            className="order-1 lg:order-2 relative z-10 lg:pl-10"
          >
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-white">
               <img 
                 loading="lazy"
                 src="https://i.pinimg.com/736x/65/30/0c/65300c11a7cb3e29bc1c56538f813e60.jpg" 
                 alt="Quality Bedroom" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-10 md:p-12 text-white">
                 <div className="w-12 h-1 bg-rose mb-6 rounded-full"></div>
                 <p className="font-serif text-3xl md:text-4xl font-medium leading-snug drop-shadow-lg">"Bringing comfort and elegance to every home in Uganda."</p>
               </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-48 md:w-64 h-48 md:h-64 bg-rose/20 rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-48 md:w-64 h-48 md:h-64 bg-charcoal/10 rounded-full blur-3xl -z-10"></div>
             
             {/* Floating Badge */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="absolute top-10 -left-6 md:-left-12 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20"
             >
               <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose font-bold text-xl">
                 10+
               </div>
               <div>
                 <p className="text-charcoal font-bold text-sm">Years of</p>
                 <p className="text-charcoal/60 text-xs uppercase tracking-widest font-bold">Excellence</p>
               </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
