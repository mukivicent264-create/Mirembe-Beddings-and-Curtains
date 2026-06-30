import { Truck, MapPin, CalendarCheck } from 'lucide-react';
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function DeliveryBanner() {
  return (
    <section className="py-20 bg-soft/50 border-t border-b border-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-sm shadow-sm text-rose mb-6">
            <Truck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Delivery Across Uganda</h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From Kampala to Gulu, we ensure your luxury beddings and curtains reach you safely and swiftly. We partner with reliable couriers to guarantee your satisfaction.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-soft text-center flex flex-col items-center">
            <MapPin className="w-6 h-6 text-gold mb-3" />
            <h4 className="font-bold text-charcoal text-sm">Nationwide Coverage</h4>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-soft text-center flex flex-col items-center">
            <Truck className="w-6 h-6 text-gold mb-3" />
            <h4 className="font-bold text-charcoal text-sm">Secure Packaging</h4>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-soft text-center flex flex-col items-center">
            <CalendarCheck className="w-6 h-6 text-gold mb-3" />
            <h4 className="font-bold text-charcoal text-sm">Prompt Dispatch</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
