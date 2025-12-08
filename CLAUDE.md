# Landing Page CV - Anthropic Application

**Status**: MVP Complete
**Last Updated**: 2025-12-08
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
├── CLAUDE.md                 # This file
├── my_claude_story.md        # Personal Claude story (done)
├── PROJECT_PLAN.md           # Original planning
├── CONTENT_STRATEGY.md       # Content details
├── assets/                   # Images, logos (to add)
└── app/                      # Next.js application
    └── src/
        ├── app/
        │   ├── page.tsx      # Main page
        │   ├── layout.tsx    # Root layout with fonts
        │   └── globals.css   # Design system
        └── components/
            └── sections/     # All page sections
                ├── Hero.tsx
                ├── WhyAnthropic.tsx
                ├── EasternEurope.tsx
                ├── TrackRecord.tsx
                ├── Skills.tsx
                ├── ClaudeEffect.tsx
                └── Contact.tsx
```

## Content Status

### Completed
- [x] Claude Effect story (my_claude_story.md)
- [x] Hero section with animated headline
- [x] Why Anthropic narrative
- [x] Eastern Europe interactive map
- [x] 4 project case studies (Kinguin, Building Companion, SAP XRM, Skinwallet)
- [x] Skills matrix (4 categories)
- [x] Contact section with CTAs

### Still Needed (optional polish)
- [ ] Professional photo in assets/photo/
- [ ] Company logos in assets/logos/
- [ ] Certificate images in assets/certificates/
- [ ] verified_facts.md (verify numbers before publishing)
- [ ] Custom domain setup

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

## Next Steps

1. **Review in browser**: `npm run dev` → http://localhost:3000
2. **Add assets**: Photos, logos for more visual polish
3. **Verify facts**: Double-check all numbers
4. **Deploy**: `vercel --prod` when ready
5. **Custom domain**: Optional (kamil-for-anthropic.com or similar)

## Deploy Commands

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```
