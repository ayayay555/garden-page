import { motion } from 'framer-motion';
import { 
  Trees, 
  Leaf, 
  Map, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Star,
  Quote
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <motion.div 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
    className="text-center mb-16"
  >
    <span className={`uppercase tracking-widest text-sm font-semibold ${light ? 'text-garden-accent' : 'text-garden-olive'} mb-4 block`}>
      {subtitle}
    </span>
    <h2 className={`text-4xl md:text-5xl font-display ${light ? 'text-white' : 'text-garden-dark'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 mx-auto mt-6 ${light ? 'bg-garden-accent' : 'bg-garden-olive'}`}></div>
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-6 lg:px-24 bg-garden-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-garden-dark rounded-full border border-garden-accent/30">
            <Trees className="text-garden-accent w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">EDENIC</span>
        </div>
        <div className="hidden md:flex gap-12 items-center text-sm font-semibold tracking-wide uppercase text-white/80">
          <a href="#work" className="hover:text-garden-accent transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-garden-accent transition-colors">Process</a>
          <a href="#contact" className="px-6 py-3 bg-garden-accent text-garden-dark hover:bg-white transition-all rounded-full flex items-center gap-2">
            Consult Now <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-garden-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558905619-1598aa7e4732?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Garden Landscape" 
            className="w-full h-full object-cover brightness-[0.35] opacity-60"
          />
        </div>
        
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 pt-20 pb-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-garden-accent uppercase tracking-[0.4em] font-bold text-sm mb-6 block">
              Est. 1994 • Master Landscapers
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-[1.1]">
              Transform Your Backyard <br />
              Into a <span className="italic text-garden-accent">Private Oasis</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We bridge the gap between architectural elegance and organic serenity, crafting outdoor spaces that inspire, restore, and elevate your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-5 bg-garden-accent text-garden-dark font-bold rounded-full hover:bg-white transition-all text-lg shadow-2xl">
                Get My Free Design Quote
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 bg-black/20 backdrop-blur-md border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-white/90 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-garden-accent transition-colors">
                <Award className="text-garden-accent w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase max-w-[200px]">3-Time Chelsea Flower Show Gold Winner</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0 group">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-garden-accent transition-colors">
                <CheckCircle2 className="text-garden-accent w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase max-w-[200px]">15-Year Plant & Structure Guarantee</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-garden-accent transition-colors">
                <Star className="text-garden-accent w-6 h-6" fill="#d4a373" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase max-w-[200px]">4.9/5 Average Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner / Social Proof */}
      <section className="bg-garden-dark py-12 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
          <span className="text-2xl font-display text-white">VOGUE LIVING</span>
          <span className="text-2xl font-display text-white">ARCHITECTURAL DIGEST</span>
          <span className="text-2xl font-display text-white">ELLE DECOR</span>
          <span className="text-2xl font-display text-white">HOUSE & GARDEN</span>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 px-4 bg-garden-stone/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Our Signature Creations" 
            subtitle="Recent Transformations" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
                title: "The Minimalist Retreat",
                tag: "Modern"
              },
              { 
                img: "https://i.pinimg.com/originals/14/4a/83/144a8372f6437a6312eb41a1ab4e3353.jpg",
                title: "Mediterranean Courtyard",
                tag: "Classical"
              },
              { 
                img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
                title: "Vertical Living Oasis",
                tag: "Compact"
              },
              { 
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
                title: "Wildflower Estate",
                tag: "Natural"
              },
              { 
                img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800",
                title: "Zen Reflection Pond",
                tag: "Japanese"
              },
              { 
                img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
                title: "English Rose Sanctuary",
                tag: "Traditional"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5]"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-garden-dark/80 via-transparent to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-garden-accent font-bold text-xs uppercase tracking-widest mb-2">{item.tag}</span>
                  <h3 className="text-2xl font-display text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 border-2 border-garden-olive text-garden-olive font-bold rounded-full hover:bg-garden-olive hover:text-white transition-all">
              Discover All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <Leaf size={600} className="rotate-45" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="The Path to Perfection" 
            subtitle="The Journey" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <PhoneCall className="w-10 h-10" />, 
                title: "01. Consultation", 
                desc: "We begin with a deep dive into your lifestyle, aesthetic preferences, and how you intend to use the space." 
              },
              { 
                icon: <Map className="w-10 h-10" />, 
                title: "02. Design Blueprint", 
                desc: "Our architects create high-fidelity 3D renderings and planting schemes tailored to your unique site." 
              },
              { 
                icon: <Trees className="w-10 h-10" />, 
                title: "03. Implementation", 
                desc: "Our master horticulturists and craftsmen bring the vision to life with surgical precision and care." 
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-10 bg-garden-stone/20 rounded-3xl border border-garden-stone group hover:bg-garden-olive hover:text-white transition-all duration-500"
              >
                <div className="text-garden-accent mb-6 group-hover:text-white transition-colors">{step.icon}</div>
                <h3 className="text-2xl font-display mb-4">{step.title}</h3>
                <p className="opacity-80 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-garden-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeading 
            title="Voices of Delight" 
            subtitle="Kind Words" 
            light 
          />
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Quote className="mx-auto w-12 h-12 text-garden-accent/30 mb-8" />
            <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-8">
              "EDENIC transformed our neglected backyard into a sanctuary we use every single day. The attention to detail, from the choice of stone to the nocturnal lighting, is simply unparalleled. It's not just a garden; it's a masterpiece."
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://i.pravatar.cc/150?u=garden1" 
                alt="Client" 
                className="w-20 h-20 rounded-full border-4 border-garden-accent mb-4"
              />
              <span className="font-bold text-lg tracking-wide uppercase">Eleanor Sinclair</span>
              <span className="text-garden-accent text-sm tracking-[0.2em] font-semibold">Cotswolds Estate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-4 bg-garden-accent text-garden-dark">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-6xl font-display mb-8">Ready to Start Your Transformation?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-semibold">
              Join the hundreds of homeowners who have redefined their relationship with nature. Let's build your legacy together.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full md:w-96 px-8 py-5 rounded-full bg-white/20 border-2 border-garden-dark/20 text-garden-dark placeholder:text-garden-dark/50 focus:outline-none focus:border-garden-dark transition-all text-lg font-bold"
              />
              <button className="w-full md:w-auto px-12 py-5 bg-garden-dark text-white font-bold rounded-full hover:bg-garden-olive hover:scale-105 transition-all text-lg shadow-xl">
                Get Your Free Guide
              </button>
            </div>
            <p className="mt-8 text-sm opacity-60 font-medium italic">
              *Limited availability for Summer 2026. Schedule your consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white border-t border-garden-stone text-garden-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-garden-dark rounded-full">
              <Trees className="text-garden-accent w-4 h-4" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">EDENIC</span>
          </div>
          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase opacity-60">
            <a href="#" className="hover:text-garden-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-garden-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-garden-accent transition-colors">Instagram</a>
          </div>
          <p className="text-sm opacity-40 font-medium">
            © 2026 Edenic Landscape Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
