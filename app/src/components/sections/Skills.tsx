"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb,
  Code2,
  Globe2,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const skillCategories = [
  {
    id: "product",
    title: "Product Management",
    icon: Lightbulb,
    color: "bg-primary/10 text-primary",
    skills: [
      "Product Strategy & Roadmapping",
      "Product Discovery & Validation",
      "Go-to-Market Planning",
      "User Research & Analysis",
      "Stakeholder Management",
      "Workshop Facilitation",
      "Product-Market Fit Optimization",
      "Pricing & Positioning",
    ],
  },
  {
    id: "technical",
    title: "Technical Leadership",
    icon: Code2,
    color: "bg-accent/20 text-accent-foreground",
    skills: [
      "Team Management (up to 40+ people)",
      "Microservices Architecture",
      "System Integration",
      "Technical Roadmapping",
      "Dev Tools: Jira, Confluence, Figma",
      "Cloud: Google Cloud, AWS",
      "Frontend: React, Vue.js, Angular",
      "Backend: Spring, Node.js, PHP",
    ],
  },
  {
    id: "international",
    title: "International Expansion",
    icon: Globe2,
    color: "bg-primary/10 text-primary",
    skills: [
      "Multi-Market Launch Strategy",
      "Localization & Adaptation",
      "Cultural Intelligence",
      "Regulatory Navigation",
      "Local Partnership Development",
      "Market Research & Analysis",
      "Pricing Strategy per Market",
      "Growth Metrics & OKRs",
    ],
  },
  {
    id: "business",
    title: "Business Acumen",
    icon: Briefcase,
    color: "bg-accent/20 text-accent-foreground",
    skills: [
      "P&L Management",
      "Budget Planning & Control",
      "Business Case Development",
      "Strategic Planning",
      "Negotiation (contracts, partnerships)",
      "Vendor Management",
      "Board-level Communication",
      "IPO Preparation Processes",
    ],
  },
];

function SkillCard({
  category,
  index,
  isActive,
  onActivate,
}: {
  category: typeof skillCategories[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
        isActive
          ? "bg-card shadow-lg border-primary/50"
          : "bg-card/50 hover:bg-card hover:border-primary/30"
      }`}
      onClick={onActivate}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg">{category.title}</h3>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-muted-foreground transition-transform ${
              isActive ? "rotate-90" : "group-hover:translate-x-1"
            }`}
          />
        </div>

        {isActive && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-2 mt-4 pt-4 border-t"
          >
            {category.skills.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>("product");

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Capabilities
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Full Stack of Product Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            Not just a PM. Not just technical. Not just international.
            A rare combination of all three.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              isActive={activeCategory === category.id}
              onActivate={() =>
                setActiveCategory(activeCategory === category.id ? null : category.id)
              }
            />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-card border"
        >
          <h3 className="font-bold mb-4">Certifications & Training</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Workshopper Master (AJ&Smart, 2022)",
              "Design Sprint Masterclass (2021)",
              "Product Discovery (Spotify Lead, 2021)",
              "Professional Scrum Product Owner (2017)",
              "PRINCE2 (2018)",
            ].map((cert, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/5 text-sm rounded-full border border-primary/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
