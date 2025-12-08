"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Globe, MessageSquare } from "lucide-react";

export function ClaudeEffect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const transformations = [
    {
      icon: Sparkles,
      before: "PRDs that took a week",
      after: "Done in an afternoon",
      description: "Writing product requirements for complex features like unit conversion—explaining why Polish contractors need prices in m³ while Romanian ones think in pallets.",
    },
    {
      icon: Zap,
      before: "Manual workflows",
      after: "MCP automation obsession",
      description: "Building MCP servers connecting Claude to actual workflows. Invoice processing with multilingual detection. LinkedIn content automation.",
    },
    {
      icon: MessageSquare,
      before: "Staring at blank slides",
      after: "Industry-specific messaging",
      description: "PowerPoint presentations for PKB (Polish Construction Cluster) that actually resonate with construction industry stakeholders.",
    },
    {
      icon: Globe,
      before: "Translation bottleneck",
      after: "Thinking partner",
      description: "Managing Jira epics, coordinating with Radu and the engineering team, translating business requirements into specs developers actually want to read.",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              The Claude Effect
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How Claude Changed My Game
          </h2>
        </motion.div>

        {/* The story */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Discovery */}
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                The Discovery
              </h3>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed pl-10">
                I found Claude while drowning in documentation. Running Royal Company means
                juggling development services for Xella, coordinating with engineering teams
                across Poland and Romania, and somehow keeping the BCS marketplace moving
                forward. I needed help that understood context, not just keywords.
              </p>
            </div>

            {/* Transformation */}
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                The Transformation
              </h3>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed pl-10">
                Claude changed everything about how I work. First, it was PRDs. Writing
                product requirements for the unit conversion system—explaining why Polish
                contractors need prices in m³ while Romanian ones think in pallets—used to
                take days. Now I think out loud with Claude, and coherent documentation emerges.
              </p>
            </div>

            {/* Realization */}
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                The Realization
              </h3>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed pl-10">
                After months of this, something clicked: if Claude transforms how I work in
                Poland—managing B2B marketplaces, coordinating international teams, building
                automation—imagine what it could do for millions of professionals across
                Eastern Europe who face the same challenges.
              </p>
              <p className="text-foreground font-serif text-lg leading-relaxed pl-10 mt-4 font-medium">
                Most AI tools don&apos;t understand our markets. The regulatory complexity.
                The business culture differences between Warsaw and Bucharest.
                The specific workflows that matter here.
              </p>
              <p className="text-primary font-serif text-lg leading-relaxed pl-10 mt-2 italic">
                I do. And I&apos;ve been using Claude to prove it works.
              </p>
            </div>
          </motion.div>

          {/* Transformation cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Transformations
            </h4>
            {transformations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground line-through">{item.before}</div>
                      <div className="text-sm font-medium text-primary">{item.after}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-serif">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Meta moment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20"
        >
          <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            The Meta-Moment
          </div>
          <p className="text-xl md:text-2xl font-serif leading-relaxed">
            This entire landing page? <span className="text-primary font-semibold">Built with Claude.</span>
          </p>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed mt-4">
            The strategy documents, the case studies, even this story was refined through conversation.
            That&apos;s not a confession—it&apos;s the point.
          </p>
          <p className="text-lg text-foreground font-serif leading-relaxed mt-4 font-medium">
            Claude is already good enough to help me create something I&apos;m proud to share.
            Now imagine what happens when someone who understands Eastern European markets
            helps shape Claude&apos;s future there.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
