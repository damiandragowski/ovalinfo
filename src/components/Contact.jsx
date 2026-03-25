import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  { src: "/images/zero.jpg", alt: "OvalInfo office" },
  { src: "/images/one.jpg", alt: "Team at work" },
  { src: "/images/two.jpg", alt: "Project collaboration" },
  { src: "/images/three.jpg", alt: "Architecture session" },
  { src: "/images/four.jpg", alt: "Development team" },
  { src: "/images/five.jpg", alt: "OvalInfo workspace" },
];

const info = [
  { icon: "📍", label: "Address", value: "ul. Złota 59, 00-120 Warsaw, Poland" },
  { icon: "✉️", label: "Email", value: "damiandragowski@gmail.com", href: "mailto:damiandragowski@gmail.com" },
  { icon: "📞", label: "Phone", value: "+48 509 277 939", href: "tel:+48509277939" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/company/ovalinfo", href: "https://linkedin.com/company/ovalinfo" },
];

export default function Contact() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl font-bold mt-2">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Ready to build your next enterprise platform? Let's discuss your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16"
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-video"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl">⊕</span>
              </div>
            </div>
          ))}
        </motion.div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl hover:text-cyan-400 transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <button
              className="absolute left-4 text-white text-4xl hover:text-cyan-400 transition-colors px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            >
              ‹
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-white text-4xl hover:text-cyan-400 transition-colors px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            >
              ›
            </button>
            <div className="absolute bottom-4 text-slate-400 text-sm">
              {lightbox + 1} / {images.length}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-300 hover:text-cyan-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <h4 className="font-semibold text-white mb-2">NIP / VAT</h4>
              <p className="text-slate-400 text-sm">PL 527-000-00-00</p>
              <h4 className="font-semibold text-white mt-4 mb-2">REGON</h4>
              <p className="text-slate-400 text-sm">380000000</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-sm block mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Jan"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm block mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Kowalski"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-sm block mb-1">Company</label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="jan@company.com"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm block mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Describe your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
