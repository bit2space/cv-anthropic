"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Users, TrendingUp, Shield, Grid3X3 } from "lucide-react";

// DEV MODE: Set to true to show coordinate grid for flag positioning
const SHOW_DEV_GRID = false;

const countries = [
  { code: "RU", name: "Russia", flag: "🇷🇺", position: { top: "30%", left: "90%" }, duration: "2019-2022", insight: "Massive 144M market, complex regulations, high technical bar. Users value depth and precision over simplicity." },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", position: { top: "55%", left: "85%" }, duration: "2019-2022", insight: "44M population, exceptional engineering talent pool. Strong tech community before current challenges." },
  { code: "PL", name: "Poland", flag: "🇵🇱", position: { top: "52%", left: "60%" }, duration: "15+ years", insight: "Home market. 38M people. Deep understanding of local business culture, startup ecosystem, and regulatory landscape." },
  { code: "RO", name: "Romania", flag: "🇷🇴", position: { top: "70%", left: "72%" }, duration: "2019-present", insight: "19M population with strong IT sector. Successfully navigated different language and cultural expectations." },
  { code: "CZ", name: "Czechia", flag: "🇨🇿", position: { top: "61%", left: "53%" }, duration: "2020-present", insight: "10.5M population. Growing tech scene, Prague emerging as major CEE tech and startup hub." },
  { code: "HU", name: "Hungary", flag: "🇭🇺", position: { top: "69%", left: "60%" }, duration: "2020-present", insight: "10M population. Budapest tech scene growing rapidly, strong academic and research tradition." },
  { code: "BY", name: "Belarus", flag: "🇧🇾", position: { top: "45%", left: "75%" }, duration: "2019-2022", insight: "9.4M population. Known for world-class developers and strong technical education system." },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", position: { top: "80%", left: "75%" }, duration: "2019-present", insight: "6.9M population. Emerging tech hub with hungry, skilled developers and competitive costs." },
  { code: "SK", name: "Slovakia", flag: "🇸🇰", position: { top: "62%", left: "64%" }, duration: "2020-present", insight: "5.4M population. Industrial powerhouse transitioning to tech, strong Bratislava startup scene." },
  { code: "MD", name: "Moldova", flag: "🇲🇩", position: { top: "64%", left: "80%" }, duration: "2021-present", insight: "2.6M population. Small but eager market, high AI adoption potential among young professionals." },
];

const marketData = [
  { icon: Users, value: "300M+", label: "People in the region", description: "Growing tech-savvy population hungry for AI tools" },
  { icon: TrendingUp, value: "15%+", label: "Annual AI adoption growth", description: "Fastest growing AI market in Europe" },
  { icon: Shield, value: "Low", label: "AI tool penetration", description: "First-mover advantage available" },
  { icon: MapPin, value: "10", label: "Markets I've launched in", description: "Proven playbook for regional expansion" },
];

export function EasternEurope() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCountry, setActiveCountry] = useState<typeof countries[0] | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              The Opportunity
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Eastern Europe? Why Now?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            A region of 300 million people, rapidly adopting technology,
            underserved by AI tools that understand their context.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square max-w-lg mx-auto lg:mx-0"
          >
            {/* Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted rounded-3xl overflow-hidden">
              {/* Europe map image - aligned right */}
              <img
                src="/europe-map.svg"
                alt="Map of Europe"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-40"
              />

              {/* DEV: Coordinate grid overlay for positioning flags */}
              {SHOW_DEV_GRID && (
                <div className="absolute inset-0 pointer-events-none z-30">
                  {/* Vertical lines (left percentages) */}
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => (
                    <div
                      key={`v-${pct}`}
                      className="absolute top-0 bottom-0 w-px bg-red-500/30"
                      style={{ left: `${pct}%` }}
                    >
                      <span className="absolute top-0 -translate-x-1/2 text-[10px] text-red-600 font-mono bg-white/80 px-0.5">
                        {pct}
                      </span>
                    </div>
                  ))}
                  {/* Horizontal lines (top percentages) */}
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => (
                    <div
                      key={`h-${pct}`}
                      className="absolute left-0 right-0 h-px bg-blue-500/30"
                      style={{ top: `${pct}%` }}
                    >
                      <span className="absolute left-0 -translate-y-1/2 text-[10px] text-blue-600 font-mono bg-white/80 px-0.5">
                        {pct}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Country dots */}
              {countries.map((country, index) => (
                <motion.button
                  key={country.code}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer ${
                    activeCountry?.code === country.code ? "z-20" : ""
                  }`}
                  style={{ top: country.position.top, left: country.position.left }}
                  onClick={() => setActiveCountry(activeCountry?.code === country.code ? null : country)}
                  onMouseEnter={() => setActiveCountry(country)}
                  onMouseLeave={() => setActiveCountry(null)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                      activeCountry?.code === country.code
                        ? "bg-primary text-primary-foreground scale-125 shadow-lg shadow-primary/30"
                        : "bg-card text-foreground hover:bg-primary/20 hover:scale-110"
                    }`}
                  >
                    {country.flag}
                  </div>

                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                </motion.button>
              ))}
            </div>

            {/* Country info card */}
            {activeCountry && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 bg-card p-4 rounded-xl shadow-xl border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{activeCountry.flag}</span>
                  <div>
                    <h4 className="font-bold text-lg">{activeCountry.name}</h4>
                    <p className="text-sm text-muted-foreground">{activeCountry.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-serif">{activeCountry.insight}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Market data cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {marketData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                <div className="font-medium text-sm mb-2">{item.label}</div>
                <div className="text-sm text-muted-foreground font-serif">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border"
        >
          <h3 className="text-xl font-bold mb-4">Cultural Insights That Matter</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-1">Learning Styles</div>
              <div className="text-muted-foreground font-serif">Eastern Europeans value depth and technical precision</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Communication</div>
              <div className="text-muted-foreground font-serif">Direct communication, technical credibility matters</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Trust Building</div>
              <div className="text-muted-foreground font-serif">Word-of-mouth and community over advertising</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Pricing</div>
              <div className="text-muted-foreground font-serif">Value perception balanced with accessibility</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
