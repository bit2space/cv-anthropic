"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Target } from "lucide-react";

export function WhyAnthropic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Why This Matters
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Why I&apos;m Reaching Out
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Paragraph 1: Personal Connection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                Claude changed how I approach product management. From strategic
                planning to technical documentation, from workshop preparation to
                stakeholder communication—Claude became my thinking partner.
              </p>
              <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed mt-4">
                Not just a tool. A collaborator that helps me work smarter, faster,
                and with more clarity.
              </p>
            </div>
          </motion.div>

          {/* Paragraph 2: The Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                But here&apos;s what keeps me up at night in a good way:
              </p>
              <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed mt-4">
                <span className="text-primary font-semibold">Eastern Europe—300 million people</span> across
                dynamic, growing markets—is hungry for AI tools that understand
                their context. I&apos;ve launched products in Poland, Romania, Russia,
                Bulgaria, and more. I&apos;ve seen the potential. I&apos;ve felt the appetite.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mt-4 italic">
                And I know Claude can be transformative there.
              </p>
            </div>
          </motion.div>

          {/* Paragraph 3: The Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                I&apos;m not just a Claude enthusiast applying blind. I&apos;m a product
                leader with 15 years of international expansion experience,
                technical credibility, and a track record of taking products from
                zero to market leader.
              </p>
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mt-6 border-l-4 border-primary pl-6">
                I want to help write Claude&apos;s next chapter.<br />
                In Eastern Europe. Together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
