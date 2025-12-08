"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Globe, Building2, TrendingUp, ChevronDown, Check } from "lucide-react";

const projects = [
  {
    id: "kinguin",
    title: "Kinguin Magento Migration",
    subtitle: "Scaling to 16M Users",
    icon: Users,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    stats: { users: "16M", team: "40+", duration: "3 years" },
    challenge: "Kinguin's monolithic Magento architecture couldn't handle growth. 16M users, increasing traffic, custom modifications made migration to standard platforms impossible. The mission: Rebuild entire ecommerce platform as microservices while maintaining 24/7 operations.",
    approach: [
      "Coordinated 40+ person team across 6 specialized squads",
      "3-year phased migration strategy",
      "New tech stack: React, Spring, Kubernetes, GOlang, Kotlin",
      "Built: Homepage, Listings, Product Pages, Cart, Checkout, Mobile Apps",
      "Integrated: Pixels, Social Media, Affiliate Networks, CRM, Email",
    ],
    results: [
      "Delivered on scope, on time, on budget",
      "Zero downtime during migration",
      "Improved performance and scalability",
      "Modern, maintainable architecture",
    ],
    tech: ["React", "Spring", "Kubernetes", "GOlang", "Kotlin"],
    timeline: "2017-2019",
  },
  {
    id: "building-companion",
    title: "Building Companion",
    subtitle: "0 to Market Leader in 8 Countries",
    icon: Globe,
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
    stats: { countries: "8+", award: "2020", status: "Ongoing" },
    challenge: "Xella (construction materials manufacturer) needed digital transformation. Goal: Become the 'known doctor of construction industry' by connecting investors, contractors, and product suppliers. Target: 10% market share in construction project market.",
    approach: [
      "Started with business process modeling and MVP concept",
      "Built marketplace connecting supply and demand",
      "Features: Listings, Profiles, RFQ system, Reviews, Multi-language",
      "Created both customer panel and contractor panel",
      "Go-to-market strategy for each country",
    ],
    results: [
      "Successfully launched in 8+ countries (PL, RO, BG, RU, DE, NL, CZ, SI)",
      "Became market leader in construction service marketplace",
      "Mobile Trends Awards 2020 Nomination",
      "Strategic platform for Xella's digital future",
    ],
    tech: ["Vue.js", "Node.js"],
    timeline: "2019-present",
  },
  {
    id: "sap-xrm",
    title: "SAP XRM Integration",
    subtitle: "Enterprise-Level Complexity",
    icon: Building2,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/20",
    stats: { scope: "Enterprise", teams: "6+", priority: "IPO" },
    challenge: "Xella needed centralized repository for all construction projects across: Production, Sales, Customer Service, Logistics. Strategic importance: IPO preparation required process excellence and data integration.",
    approach: [
      "Designed and implemented API interfaces connecting SAP XRM with loyalty programs",
      "Integration with construction calculators and order systems",
      "Connected customer service platforms",
      "Coordinated external implementation team",
      "Trained end users across departments",
    ],
    results: [
      "Delivered on scope, on time, on budget",
      "Enterprise-wide data integration achieved",
      "Process optimization across departments",
      "Foundation for IPO readiness",
    ],
    tech: ["SAP", "REST API", "PHP"],
    timeline: "2020-2021",
  },
  {
    id: "skinwallet",
    title: "Skinwallet",
    subtitle: "Startup to Stock Exchange",
    icon: TrendingUp,
    color: "from-accent/15 to-accent/5",
    borderColor: "border-accent/20",
    stats: { status: "IPO", market: "NEWCONNECT", type: "Marketplace" },
    challenge: "Create payment method and marketplace for gaming community. Need rapid development, market fit, and scalability.",
    approach: [
      "React/Node.js modern stack",
      "Payment gateway integration",
      "Marketplace features",
      "Community building and engagement",
    ],
    results: [
      "Successfully launched and scaled",
      "Company now listed on NEWCONNECT stock exchange",
      "Proven business model",
      "Active user community",
    ],
    tech: ["React", "Node.js"],
    timeline: "2018-2019",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl border ${project.borderColor} bg-gradient-to-br ${project.color} overflow-hidden`}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center shadow-sm">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full">
            {project.timeline}
          </span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="bg-card/80 px-4 py-2 rounded-xl">
              <div className="text-lg font-bold text-primary">{value}</div>
              <div className="text-xs text-muted-foreground capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Challenge */}
        <p className="text-muted-foreground font-serif leading-relaxed mb-4">
          {project.challenge}
        </p>

        {/* Expandable content */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          {isExpanded ? "Show less" : "Show approach & results"}
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-6"
          >
            {/* Approach */}
            <div>
              <h4 className="font-semibold mb-3">Approach</h4>
              <ul className="space-y-2">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className="font-semibold mb-3">Results</h4>
              <ul className="space-y-2">
                {project.results.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-card text-sm rounded-full text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function TrackRecord() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32">
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
              Track Record
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proven at Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            From startups to enterprise, from 0 to 16M users.
            These are the stories that shaped my approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
