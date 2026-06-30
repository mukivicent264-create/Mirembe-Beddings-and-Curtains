import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CategoriesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
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

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Categories({ activeCategory, onSelectCategory }: CategoriesProps) {
  const categories = [
    {
      id: 1,
      title: "Bedsheets",
      image: "https://i.pinimg.com/1200x/30/c6/56/30c65685c5dbdddf9e9e1451a058a1c7.jpg",
    },
    {
      id: 2,
      title: "Pillows",
      image: "https://i.pinimg.com/736x/7b/3a/eb/7b3aeb7d6b4b7af1e3cc2e79d79e740c.jpg",
    },
    {
      id: 3,
      title: "Blankets",
      image: "https://i.pinimg.com/1200x/b9/3d/a5/b93da52c4aaeae0e7ed270a42bce241d.jpg",
    },
    {
      id: 4,
      title: "Duvets",
      image: "https://i.pinimg.com/1200x/51/c4/72/51c47206b1628a3873b9674d07cda157.jpg",
    },
    {
      id: 5,
      title: "Curtains",
      image: "https://i.pinimg.com/1200x/ea/8e/b4/ea8eb4d3f0664378211445c70a5b424c.jpg",
    },
    {
      id: 6,
      title: "Bedding Sets",
      image: "https://i.pinimg.com/736x/1b/ec/5b/1bec5bb80e13c25b1b7c094e4298b654.jpg",
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = scrollContainer.scrollLeft;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 1; // Adjust speed here
        if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section id="categories" className="py-16 bg-warm border-b border-soft/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left flex justify-between items-end">
        <div>
          <span className="text-rose font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center justify-center sm:justify-start gap-3">
            <span className="w-6 h-[2px] bg-rose"></span>
            Shop By Category
          </span>
          <h2 className="text-3xl font-serif font-medium text-charcoal">Explore Collections</h2>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto custom-scrollbar px-4 sm:px-6 lg:px-8 pb-8 pt-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center w-max gap-5"
        >
          <motion.button 
            variants={itemVariants}
            onClick={() => onSelectCategory("All")}
            className={`group relative flex items-center gap-4 p-2 pr-8 rounded-2xl shadow-sm hover:shadow-xl active:scale-95 transition-all w-[240px] border ${activeCategory === "All" ? "border-rose bg-pink-100" : "bg-pink-50 border-transparent"} cursor-pointer`}
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-soft flex items-center justify-center">
              <span className="text-xl font-serif font-bold text-charcoal">All</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeCategory === "All" ? "text-rose" : "text-charcoal group-hover:text-rose"}`}>
                All Products
              </span>
              <span className="text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mt-1">View Everything</span>
            </div>
          </motion.button>
          
          {categories.map((cat) => (
            <motion.button 
              key={cat.id} 
              variants={itemVariants}
              onClick={() => onSelectCategory(cat.title)}
              className={`group relative flex items-center gap-4 p-2 pr-8 rounded-2xl shadow-sm hover:shadow-xl active:scale-95 transition-all w-[240px] border ${activeCategory === cat.title ? "border-rose bg-pink-100" : "bg-pink-50 border-transparent"} cursor-pointer`}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  loading="lazy"
                  src={cat.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={cat.title} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className={`text-sm font-bold uppercase tracking-wider transition-colors line-clamp-1 ${activeCategory === cat.title ? "text-rose" : "text-charcoal group-hover:text-rose"}`}>
                  {cat.title}
                </span>
                <span className="text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mt-1 group-hover:text-charcoal/70 transition-colors">Explore</span>
              </div>
            </motion.button>
          ))}

          {/* Duplicate items for seamless continuous scrolling effect visually if the user scrolls, but we don't strictly need duplicates if we just scroll the container. But to make it feel rich, let's append another set of same categories but they function identically */}
          {categories.map((cat) => (
            <motion.button 
              key={`dup-${cat.id}`} 
              variants={itemVariants}
              onClick={() => onSelectCategory(cat.title)}
              className={`group relative flex items-center gap-4 p-2 pr-8 rounded-2xl shadow-sm hover:shadow-xl active:scale-95 transition-all w-[240px] border ${activeCategory === cat.title ? "border-rose bg-pink-100" : "bg-pink-50 border-transparent"} cursor-pointer`}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  loading="lazy"
                  src={cat.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={cat.title} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className={`text-sm font-bold uppercase tracking-wider transition-colors line-clamp-1 ${activeCategory === cat.title ? "text-rose" : "text-charcoal group-hover:text-rose"}`}>
                  {cat.title}
                </span>
                <span className="text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mt-1 group-hover:text-charcoal/70 transition-colors">Explore</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

