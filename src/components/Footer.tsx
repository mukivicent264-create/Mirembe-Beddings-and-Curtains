import { Instagram, Facebook, Twitter, ArrowRight, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose/20 rounded-full blur-[80px] -z-10 pointer-events-none mix-blend-screen"></div>
          
          <div className="lg:w-1/2 text-center lg:text-left relative z-10">
            <span className="text-rose font-bold tracking-[0.2em] uppercase text-xs mb-3 block flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-[2px] bg-rose"></span>
              Newsletter
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4 text-white">Join the Mirembe Family</h3>
            <p className="text-white/70 text-lg max-w-md mx-auto lg:mx-0">
              Subscribe to receive exclusive offers, new arrivals, and interior inspiration directly to your inbox.
            </p>
          </div>
          <div className="lg:w-1/2 w-full max-w-md relative z-10">
            <form className="relative flex items-center">
              <div className="absolute left-5 text-white/50">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/10 border border-white/20 focus:border-rose text-white placeholder-white/50 rounded-sm py-4 pl-14 pr-32 outline-none transition-all focus:bg-white/15 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              />
              <button 
                type="button"
                className="absolute right-2 bg-rose hover:bg-white hover:text-charcoal text-white rounded-sm px-6 py-2.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
              >
                Join
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 lg:col-span-2 flex flex-col pr-8">
            <a href="#" className="inline-block mb-6 bg-white p-4 sm:p-6 rounded-xl w-fit">
              <div className="flex flex-col justify-center items-start">
                <span className="text-rose font-serif font-black text-2xl sm:text-3xl md:text-4xl leading-none tracking-tight">
                  MIREMBE
                </span>
                <span className="text-rose/80 font-sans font-bold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1">
                  Beddings & Curtains
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Bringing comfort, luxury, and timeless elegance to homes across
              Uganda. We craft premium bedding sets, memory foam pillows, warm
              blankets, and custom curtain solutions tailored to your unique
              style.
            </p>
            <div className="flex flex-wrap gap-4 text-white/60">
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.128.552 4.195 1.603 6.02L.031 24l6.104-1.601a11.972 11.972 0 005.896 1.543c6.643 0 12.028-5.386 12.028-12.034C24.059 5.386 18.674 0 12.031 0zM12.031 21.964c-1.802 0-3.565-.483-5.111-1.401l-.367-.217-3.8.995.996-3.705-.238-.378a9.982 9.982 0 01-1.528-5.223c0-5.503 4.476-9.984 9.981-9.984 5.503 0 9.98 4.481 9.98 9.984 0 5.505-4.477 9.981-9.98 9.981zm5.474-7.481c-.301-.151-1.782-.878-2.059-.979-.276-.1-.476-.151-.676.15-.201.301-.777.978-.952 1.179-.176.2-.351.225-.652.075-.3-.151-1.272-.47-2.423-1.498-.896-.801-1.502-1.79-1.677-2.091-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.151-.676-1.63-.927-2.231-.244-.588-.492-.508-.676-.517-.176-.009-.376-.011-.577-.011-.2 0-.526.075-.801.376-.276.301-1.053 1.028-1.053 2.507 0 1.48 1.078 2.911 1.228 3.111.151.2 2.122 3.238 5.138 4.54 1.765.762 2.53.86 3.447.728 1.042-.15 2.531-.952 2.906-1.928.376-.976.376-1.815.263-1.99-.113-.176-.413-.277-.714-.428z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-white/10 hover:border-transparent">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Categories */}
          <div className="col-span-1">
            <h4 className="text-sm font-serif font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-3">
              Shop
              <span className="w-8 h-[1px] bg-rose/50"></span>
            </h4>
            <ul className="space-y-4">
              {['Bedsheets', 'Pillows', 'Blankets', 'Duvets', 'Curtains', 'Bedding Sets'].map((item) => (
                <li key={item}>
                  <a
                    href="#collections"
                    className="text-white/60 hover:text-rose transition-all text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-rose mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Care */}
          <div className="col-span-1">
            <h4 className="text-sm font-serif font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-3">
              Support
              <span className="w-8 h-[1px] bg-rose/50"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Contact Us', href: '#contact' },
                { name: 'Shipping & Delivery', href: '#' },
                { name: 'Returns & Exchanges', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Order Tracking', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-rose transition-all text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-rose mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-sm font-serif font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-3">
              Contact
              <span className="w-8 h-[1px] bg-rose/50"></span>
            </h4>
            <div className="space-y-5">
              <div className="group">
                <span className="text-rose font-bold block uppercase tracking-widest text-[10px] mb-1">
                  Email Support
                </span>
                <a href="mailto:hello@mirembefurnishings.com" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                  hello@mirembe.com
                </a>
              </div>
              <div className="group">
                <span className="text-rose font-bold block uppercase tracking-widest text-[10px] mb-1">
                  WhatsApp & Call
                </span>
                <a href="https://wa.me/256700000000" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                  +256 700 000 000
                </a>
              </div>
              <div className="group">
                <span className="text-rose font-bold block uppercase tracking-widest text-[10px] mb-1">
                  Showroom Address
                </span>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  123 Design Street,<br/>Kampala, Uganda
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-white/40 tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} MIREMBE LIVING. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-rose transition-colors uppercase">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-rose transition-colors uppercase">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
