import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <section className="py-24 bg-charcoal text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Home?</h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Contact our team directly on WhatsApp to place an order, request customizations, or get expert advice on matching curtains and beddings.
        </p>
        <a 
          href="https://wa.me/256700000000?text=Hello Mirembe Beddings, I would like to place an order."
          target="_blank"
          rel="noreferrer"
          onTouchStart={() => {}}
          className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#20bd5a] active:scale-95 active:bg-[#1da851] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 touch-manipulation"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
