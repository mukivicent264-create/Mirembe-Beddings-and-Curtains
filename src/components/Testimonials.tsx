import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah T.",
      text: "The quality is exceptional, and the design elevates my entire living room. I couldn't be happier with my purchase.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael R.",
      text: "Beautiful pieces that are built to last. Worth every penny. The customer service team was also incredibly helpful.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily S.",
      text: "Customer service was amazing and delivery was super fast. The curtains fit perfectly and transformed my space.",
      rating: 5,
    },
    {
      id: 4,
      name: "David K.",
      text: "I bought a full bedding set for my new home and the comfort is unmatched. Highly recommended!",
      rating: 5,
    },
    {
      id: 5,
      name: "Grace N.",
      text: "The sheer elegance curtains added such a warm touch to my bedroom. The fabric quality is top notch.",
      rating: 5,
    },
  ];

  // We duplicate the array to create a seamless infinite scroll loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Client Stories
          </h2>
          <div className="w-12 h-1 bg-rose mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Discover why families across Uganda trust Mirembe for their home
            essentials.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex pb-8">
        {/* Left and Right Fade overlays for smoother effect */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-marquee">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[260px] sm:w-[320px] md:w-[400px] flex-shrink-0 mx-2 sm:mx-4"
            >
              <div className="bg-soft/30 p-5 sm:p-8 md:p-10 rounded-2xl border border-soft/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative group flex flex-col h-full cursor-pointer">
                <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-rose/10 group-hover:text-rose/20 transition-colors">
                  <svg
                    width="30"
                    height="30"
                    className="sm:w-[40px] sm:h-[40px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 18L16.438 10H13V6H20V10L17.017 18H14.017ZM6.017 18L8.438 10H5V6H12V10L9.017 18H6.017Z" />
                  </svg>
                </div>

                <div className="flex text-gold mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < review.rating ? "fill-current" : "fill-transparent text-charcoal/30"}`}
                    />
                  ))}
                </div>

                <p className="text-charcoal/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow italic font-medium">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-charcoal rounded-full flex items-center justify-center text-white font-bold font-serif text-base sm:text-lg shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal text-sm sm:text-base tracking-wide">
                      {review.name}
                    </h4>
                    <span className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
