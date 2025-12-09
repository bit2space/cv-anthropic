# Landing Page CV - Anthropic Application

**Status**: MVP Complete
**Last Updated**: 2025-12-10
**Priority**: high

## Project Overview

Interactive landing page CV for Kamil Grabowski's application to Anthropic, focusing on Eastern Europe expansion opportunity.

**Meta-narrative**: This CV is created entirely with Claude - demonstrating product understanding while showcasing Kamil's value proposition.

## Quick Start

```bash
cd app
npm run dev    # http://localhost:3000
npm run build  # Production build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Outfit (headlines), Source Serif 4 (body)
- **Hosting**: Vercel (ready)

## Project Structure

```
/Users/kamil/Projects/CV/
├── CLAUDE.md                 # Project instructions (this file)
├── features.json             # Feature tracking (29/39 done, 74%)
├── PROGRESS.md               # Current progress tracking
├── TODO.md                   # Legacy todo list
├── assets/                   # Media assets
│   ├── certificates/         # Certificate images (empty - optional)
│   ├── logos/                # Company logos (empty - optional)
│   ├── photo/                # Professional photos (has content)
│   └── screenshots/          # Screenshots (empty)
├── docs/                     # Documentation
│   └── session-notes.md      # Development session notes
└── app/                      # Next.js 14 application
    ├── package.json          # Dependencies & scripts
    ├── tsconfig.json         # TypeScript configuration
    ├── components.json       # shadcn/ui configuration
    ├── README.md             # App-specific readme
    └── src/
        ├── app/
        │   ├── page.tsx      # Main landing page
        │   ├── layout.tsx    # Root layout with fonts & metadata
        │   └── globals.css   # Design system (colors, typography, animations)
        ├── components/
        │   ├── sections/     # Page sections (7 components)
        │   │   ├── Hero.tsx
        │   │   ├── WhyAnthropic.tsx
        │   │   ├── EasternEurope.tsx
        │   │   ├── TrackRecord.tsx
        │   │   ├── Skills.tsx
        │   │   ├── ClaudeEffect.tsx
        │   │   ├── Contact.tsx
        │   │   └── index.ts  # Barrel exports
        │   └── ui/           # shadcn/ui components
        │       ├── button.tsx
        │       └── card.tsx
        └── lib/
            └── utils.ts      # Utility functions (cn, etc.)
```

## Content Status

### Completed
- [x] All 7 sections built and integrated
- [x] Hero section with animated headline & stats
- [x] Why Anthropic narrative (3-part story)
- [x] Eastern Europe interactive map (10 countries, flags positioned)
- [x] 4 project case studies (Kinguin, Building Companion, SAP XRM, Skinwallet)
- [x] Skills matrix (4 categories, expandable)
- [x] Claude Effect personal story & transformations
- [x] Contact section with CTAs
- [x] **Deployed**: https://grabenzo.com
- [x] Custom domain configured

### Optional Polish (not required for launch)
- [ ] Company logos in Track Record cards (assets/logos/)
- [ ] Certificate images in Skills section (assets/certificates/)
- [ ] Fact verification document (verify all numbers/stats)
- [ ] Open Graph custom image (og-image.png)
- [ ] Custom favicon/app icons
- [ ] Analytics integration (track engagement)
- [ ] Accessibility audit (WCAG compliance)
- [ ] Performance optimization check (Lighthouse)

## Design System

### Colors (OKLCH for modern browsers)
- **Primary (Terracotta)**: `oklch(0.65 0.16 35)` - Warm, Anthropic-inspired
- **Accent (Sage)**: `oklch(0.72 0.08 155)` - Secondary accent
- **Navy**: `oklch(0.25 0.03 260)` - Deep text color
- **Cream**: `oklch(0.98 0.01 90)` - Warm background

### Typography
- **Headlines**: Outfit - Modern geometric sans
- **Body**: Source Serif 4 - Warm, readable
- **Mono**: Geist Mono - Code/technical

## Sections

| Section | Description | Animations |
|---------|-------------|------------|
| Hero | Bold headline, stats, CTAs | Fade up, pulse badge |
| Why Anthropic | 3-part narrative | Scroll-triggered |
| Eastern Europe | Interactive map + data cards | Hover effects, dots pulse |
| Track Record | 4 expandable project cards | Expand/collapse |
| Skills | 4 skill categories | Click to expand |
| Claude Effect | Personal story + transformations | Staggered reveal |
| Contact | Email, phone, LinkedIn, CTAs | Fade in |

## Current Status & Next Steps

**MVP is complete and deployed** at https://grabenzo.com

### For Local Development
```bash
cd app
npm run dev    # http://localhost:3000
npm run build  # Verify production build
```

### Optional Enhancements
1. **Fact check**: Verify all statistics and numbers are accurate
2. **Visual polish**: Add company logos to Track Record section
3. **SEO boost**: Create custom OG image for better social sharing
4. **Quality checks**: Run accessibility & performance audits
5. **Analytics**: Add tracking to see engagement metrics

### Ready to Submit
The CV is live and ready to share with Anthropic. All core content is complete.

## Deploy Commands

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```
