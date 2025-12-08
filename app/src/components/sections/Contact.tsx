"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Calendar, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "kamil@royalco.io",
    href: "mailto:kamil@royalco.io",
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+48 728 934 610",
    href: "tel:+48728934610",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/mrkamilgrabowski",
    href: "https://linkedin.com/in/mrkamilgrabowski",
  },
];

const talkingPoints = [
  "Eastern Europe market opportunity for Claude",
  "Go-to-market strategy for the region",
  "How my experience can accelerate expansion",
  "Specific markets to prioritize and why",
  "Cultural insights for product adoption",
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Claude&apos;s Eastern European Future
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto font-serif">
            I&apos;d love to discuss the opportunity and how my experience
            can accelerate Anthropic&apos;s expansion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl transition-all ${
                      method.primary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background/10 hover:bg-background/20"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      method.primary ? "bg-background/20" : "bg-background/10"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm opacity-70">{method.label}</div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}
            </div>

            {/* Additional links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://calendar.app.google/xYRrCojKoJ3Ret1P6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg text-sm hover:bg-background/20 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </motion.div>

          {/* Talking points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-2xl bg-background/5 border border-background/10"
          >
            <h3 className="text-xl font-bold mb-6">Let&apos;s Talk About</h3>
            <ul className="space-y-4">
              {talkingPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-background/80 font-serif">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-background/60 font-serif text-lg italic max-w-2xl mx-auto">
            P.S. — Still curious if this was actually built with Claude?
            It was. Every section. Because when you have a great tool, you use it.
            And when you have a great opportunity, you go for it.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50"
        >
          <div>
            © 2025 Kamil Grabowski. Built with Claude.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Ready for new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
