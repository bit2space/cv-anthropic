# 3-Week Execution Plan: Landing Page CV dla Anthropic

**Headline:** "Eastern Europe is ready for Claude. I'm ready to make it happen."
**Tone:** Umiarkowanie (pewnie z osobowością)
**Interactivity:** Enhanced (elementy interaktywne, animacje, 3 tygodnie)
**Target Launch:** ~November 25, 2025

---

## 🎯 PODSUMOWANIE DECYZJI

✅ **Headline:** Direct, confident, action-oriented
✅ **Tone:** Professional with personality (not conservative, not crazy)
✅ **Features:** Interactive elements, smooth animations, polished
✅ **Timeline:** 3 weeks for quality without rush
✅ **Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, Vercel

---

## 📅 WEEK 1: CONTENT & DESIGN (Nov 4-10)

### **Day 1-2: Content Refinement** (Nov 4-5)

**Kamil's Tasks:**
- [ ] Review all content in CONTENT_STRATEGY.md
- [ ] Write personal "Claude Effect" story (300-400 words)
  - When did you start using Claude?
  - Specific examples of how it helped
  - The "aha" moment
  - Why you want to help build it
- [ ] Gather visual assets:
  - [ ] Professional headshot (high-res, at least 2000px)
  - [ ] Screenshots from projects (Kinguin, Building Companion)
  - [ ] Company logos (Kinguin, Xella, etc.)
  - [ ] Any awards/certificates images
- [ ] Verify all numbers and facts:
  - [ ] 16M users - exact number?
  - [ ] Team sizes - confirm
  - [ ] Dates - double-check
  - [ ] Countries - complete list

**Claude's Tasks:**
- [ ] Refine and polish all section copy
- [ ] Create 4 detailed case studies (Kinguin, Building Companion, SAP, Skinwallet)
- [ ] Write alternative headline variations
- [ ] Prepare micro-copy (tooltips, buttons, loading states)

**Deliverable:** Finalized content document with all copy approved

---

### **Day 3-5: Wireframes & Design** (Nov 6-8)

**Tasks:**
- [ ] Create wireframes for all 9 sections:
  1. Hero Section
  2. Why Anthropic
  3. Eastern Europe Opportunity
  4. Track Record (4 case studies)
  5. Skills Matrix
  6. International Experience Map
  7. The Claude Effect
  8. Validation/Testimonials
  9. Call to Action

- [ ] Mobile wireframes (responsive design)
- [ ] Define interaction points:
  - [ ] Scroll animations
  - [ ] Hover states
  - [ ] Interactive map
  - [ ] Expandable case studies
  - [ ] Number count-ups

- [ ] Create design system:
  - [ ] Color palette (Anthropic-inspired)
  - [ ] Typography hierarchy
  - [ ] Spacing system
  - [ ] Component library

**Deliverable:** Complete wireframes + design system

---

### **Day 6-7: Design Mockups** (Nov 9-10)

**Tasks:**
- [ ] High-fidelity mockups for desktop
- [ ] High-fidelity mockups for mobile
- [ ] Design interactive states
- [ ] Create visual assets (icons, illustrations)
- [ ] Get Kamil's approval on designs

**Deliverable:** Approved design mockups ready for development

---

## 📅 WEEK 2: DEVELOPMENT - STRUCTURE (Nov 11-17)

### **Day 1: Project Setup** (Nov 11)

**Tasks:**
- [ ] Initialize Next.js 14 project
- [ ] Set up Tailwind CSS
- [ ] Install dependencies:
  - [ ] Framer Motion (animations)
  - [ ] Lucide React (icons)
  - [ ] shadcn/ui (components)
- [ ] Set up project structure:
  ```
  /app
    /components
      /sections
      /ui
    /lib
    /assets
  ```
- [ ] Configure TypeScript
- [ ] Set up ESLint and Prettier
- [ ] Initialize Git repository

**Deliverable:** Clean project structure ready for development

---

### **Day 2-3: Core Sections (Static)** (Nov 12-13)

**Build these sections (no animations yet):**
- [ ] Hero Section
  - Layout
  - Typography
  - CTA buttons
  - Professional photo integration
- [ ] Why Anthropic
  - 3-paragraph layout
  - Typography hierarchy
- [ ] Eastern Europe Opportunity
  - Market data blocks
  - Statistics display
- [ ] Call to Action
  - Contact methods
  - Form/buttons
  - Footer

**Deliverable:** Core structure visible and responsive

---

### **Day 4-5: Case Studies Section** (Nov 14-15)

**Build:**
- [ ] Case study cards
  - Kinguin
  - Building Companion
  - SAP XRM
  - Skinwallet
- [ ] Card layout design
- [ ] Tech stack badges
- [ ] Team composition display
- [ ] Results/metrics formatting
- [ ] Expandable details (interaction placeholder)

**Deliverable:** All 4 case studies rendered and responsive

---

### **Day 6-7: Skills & Experience Sections** (Nov 16-17)

**Build:**
- [ ] Skills Matrix
  - 4 categories (Product, Technical, International, Business)
  - Visual layout (not boring bars!)
  - Skill items rendering
- [ ] International Experience Map
  - Country cards/pins
  - Timeline or map layout
  - Insights per country
- [ ] The Claude Effect
  - Story layout
  - Visual elements
  - Quote styling
- [ ] Validation/Testimonials
  - Numbers display
  - Awards
  - Certifications

**Deliverable:** All sections built and responsive

---

## 📅 WEEK 3: POLISH & INTERACTIVITY (Nov 18-24)

### **Day 1-2: Animations** (Nov 18-19)

**Add Framer Motion animations:**
- [ ] Hero Section:
  - [ ] Fade in on load
  - [ ] Stagger text animation
  - [ ] CTA button hover effects
- [ ] Scroll animations:
  - [ ] Fade up on scroll into view
  - [ ] Stagger children
  - [ ] Parallax effects (subtle)
- [ ] Number count-ups:
  - [ ] 16M users
  - [ ] 8 countries
  - [ ] 40 team members
  - [ ] 15+ years
- [ ] Section transitions:
  - [ ] Smooth fade-ins
  - [ ] Slide-ups
  - [ ] Opacity changes

**Deliverable:** Smooth, professional animations throughout

---

### **Day 3: Interactive Elements** (Nov 20)

**Add interactivity:**
- [ ] Case Study Cards:
  - [ ] Click to expand
  - [ ] Hover effects
  - [ ] Smooth transitions
- [ ] Skills Matrix:
  - [ ] Hover to reveal details
  - [ ] Interactive skill tree OR card flip
- [ ] International Experience Map:
  - [ ] Click countries for insights
  - [ ] Hover states
  - [ ] Active state highlighting
- [ ] Button hover states:
  - [ ] Color changes
  - [ ] Scale effects
  - [ ] Cursor changes

**Deliverable:** Engaging, interactive experience

---

### **Day 4: Easter Eggs & Fun Elements** (Nov 21)

**Add personality:**
- [ ] Loading states with personality:
  - "Fetching Kamil's credentials..."
  - "Loading international experience..."
- [ ] Tooltip humor:
  - "Early Bird" skill
  - Russian language level
  - "15 years = ancient in internet years"
- [ ] Button hover text changes:
  - "Let's Talk" → "Seriously, let's talk!"
  - "Schedule Call" → "I promise to be interesting"
- [ ] Hidden surprises:
  - [ ] Konami code easter egg?
  - [ ] Scroll progress bar with fun messages
  - [ ] Claude references throughout
- [ ] Micro-interactions:
  - [ ] Cursor changes on hover
  - [ ] Sound effects? (optional, subtle)
  - [ ] Confetti on CTA click? (optional)

**Deliverable:** Personality and delight throughout

---

### **Day 5: Performance & SEO** (Nov 22)

**Optimize:**
- [ ] Image optimization:
  - [ ] Compress all images
  - [ ] Next.js Image component
  - [ ] Lazy loading
  - [ ] WebP format
- [ ] Code splitting
- [ ] Remove unused CSS
- [ ] Lighthouse audit:
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 95
  - [ ] SEO > 95
- [ ] SEO optimization:
  - [ ] Meta tags
  - [ ] Open Graph images
  - [ ] Twitter cards
  - [ ] Structured data (JSON-LD)
  - [ ] Sitemap
- [ ] Analytics setup (optional):
  - [ ] Simple page view tracking
  - [ ] Scroll depth
  - [ ] CTA clicks

**Deliverable:** Fast, optimized, SEO-ready site

---

### **Day 6: Testing & QA** (Nov 23)

**Test on:**
- [ ] Browsers:
  - [ ] Chrome
  - [ ] Safari
  - [ ] Firefox
  - [ ] Edge
- [ ] Devices:
  - [ ] Desktop (1920px, 1440px, 1280px)
  - [ ] Tablet (iPad)
  - [ ] Mobile (iPhone, Android)
- [ ] Interactions:
  - [ ] All buttons work
  - [ ] Forms submit
  - [ ] Links open correctly
  - [ ] Animations smooth
  - [ ] No console errors
- [ ] Content:
  - [ ] Proofread everything
  - [ ] Check all numbers
  - [ ] Verify links
  - [ ] Test contact methods
- [ ] Accessibility:
  - [ ] Keyboard navigation
  - [ ] Screen reader friendly
  - [ ] Color contrast
  - [ ] Alt text on images

**Deliverable:** Bug-free, tested site

---

### **Day 7: Deploy & Launch** (Nov 24)

**Deployment:**
- [ ] Set up Vercel account
- [ ] Connect GitHub repo
- [ ] Configure build settings
- [ ] Deploy to production
- [ ] Custom domain setup (if you have one):
  - Option 1: kamil-grabowski.com
  - Option 2: kamil-for-anthropic.com
  - Option 3: Use Vercel subdomain
- [ ] SSL certificate (automatic via Vercel)
- [ ] Test production deployment
- [ ] Share preview with close contacts for feedback

**Deliverable:** Live, public landing page! 🚀

---

## 📋 KAMIL'S PREPARATION CHECKLIST

### Content You Need to Prepare:

#### **1. The Claude Effect - Personal Story**
Write 300-400 words answering:
- When did you start using Claude?
- What were you skeptical about initially?
- What specific task made you realize Claude was different?
- How has it changed your daily work? (3-4 concrete examples)
- What was the "aha moment" when you realized you wanted to apply?
- Why do you believe in Claude enough to create this whole landing page?

**Example structure:**
```
Paragraph 1: The Discovery (how you found Claude)
Paragraph 2: The Transformation (specific examples of impact)
Paragraph 3: The Realization (why Eastern Europe + why you)
Paragraph 4: The Meta-Moment (this page built with Claude)
```

---

#### **2. Visual Assets to Gather**

**Photos:**
- [ ] Professional headshot (minimum 2000x2000px, high quality)
  - Clean background
  - Professional but approachable
  - Good lighting
  - Current photo (not from 2015!)

**Project Screenshots (if available):**
- [ ] Kinguin platform
- [ ] Building Companion interface
- [ ] SAP integration (if shareable)
- [ ] Any other projects

**Logos:**
- [ ] Kinguin logo
- [ ] Xella logo
- [ ] Building Companion logo
- [ ] Skinwallet logo
- [ ] Other companies (high-res, transparent background if possible)

**Awards/Certificates:**
- [ ] Mobile Trends Awards 2020 nomination
- [ ] AJ&Smart Workshopper certificate
- [ ] Design Sprint Masterclass
- [ ] Scrum Product Owner
- [ ] PRINCE2

---

#### **3. Facts to Verify**

Double-check these numbers:
- [ ] Kinguin users: 16M or exact number?
- [ ] Team size: Exactly 40+ or specific number?
- [ ] Countries: Full list with dates
- [ ] Project timelines: Verify start/end dates
- [ ] Budget sizes (if you can share)
- [ ] Award nominations (exact year and category)

---

#### **4. LinkedIn Recommendations**

If you have strong recommendations on LinkedIn:
- [ ] Copy 2-3 best ones
- [ ] Get permission to use (if not public)
- [ ] Note who they're from and their title

---

#### **5. Contact Preferences**

Decide what contact info to show:
- [ ] Email: kamil@royalco.io ✓
- [ ] Phone: +48 728 934 610 ✓
- [ ] LinkedIn: linkedin.com/in/mrkamilgrabowski ✓
- [ ] Calendar link: (Calendly? Cal.com?)
- [ ] Other?

---

#### **6. Domain Name Decision**

Do you want a custom domain?
- **Option 1:** Use existing domain if you have one
- **Option 2:** Buy new domain:
  - kamil-grabowski.com (~$15/year)
  - kamil-for-anthropic.com (~$15/year)
  - kamil-cv.com
  - Other ideas?
- **Option 3:** Use free Vercel subdomain (e.g., kamil-anthropic.vercel.app)

**Recommendation:** Start with Vercel subdomain, can add custom domain later if needed.

---

## 🎨 DESIGN SYSTEM (Preview)

### Color Palette (Anthropic-Inspired):

**Primary:**
- Warm Orange: `#FF6B35` (Anthropic brand-inspired)
- Deep Navy: `#1A1F36` (text)
- Warm White: `#FFFDF7` (background)
- Soft Gray: `#6B7280` (secondary text)

**Gradients:**
- Hero: `linear-gradient(135deg, #FF6B35, #FF8C61)`
- Sections: Subtle warm gradients

**Accents:**
- Success Green: `#10B981`
- Highlight Yellow: `#FCD34D`

---

### Typography:

**Headings:** Inter (modern, clean, professional)
- H1: 3.5rem (56px) - Hero headline
- H2: 2.5rem (40px) - Section titles
- H3: 1.75rem (28px) - Subsections
- H4: 1.25rem (20px) - Card titles

**Body:** Inter
- Large: 1.125rem (18px) - Intro paragraphs
- Normal: 1rem (16px) - Body text
- Small: 0.875rem (14px) - Captions

**Accent:** Space Grotesk (for highlights, numbers)

---

### Spacing System:

Base unit: 8px
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px

---

### Animation Timings:

- Fast: 200ms (hover states)
- Normal: 300ms (most transitions)
- Slow: 500ms (page sections)
- Ease: cubic-bezier(0.4, 0, 0.2, 1)

---

## 🚀 INTERACTIVE ELEMENTS (Enhanced Level)

### 1. **Hero Section**
- Fade in animation on load
- Gradient background with subtle animation
- CTA buttons with hover scale + color change
- Smooth scroll to next section on arrow click

### 2. **Case Study Cards**
- Hover: Lift effect (translateY + shadow)
- Click: Expand to show full details
- Smooth accordion animation
- Tech stack badges pulse on hover

### 3. **Skills Matrix**
- Interactive card layout (not boring bars!)
- Hover: Flip card to show details
- OR: Tree structure that expands on click
- Smooth transitions

### 4. **International Experience Map**
- Interactive map or country cards
- Click country: Show detailed insights
- Hover: Highlight + preview
- Timeline visualization

### 5. **The Claude Effect Section**
- Chat-like interface showing example interactions?
- OR: Story with animated quotes
- Scroll-triggered reveals

### 6. **Number Count-ups**
- When scrolling into view: numbers count up
- 16M users: 0 → 16,000,000
- 8 countries: 0 → 8
- 40 team members: 0 → 40
- Smooth easing

### 7. **Scroll Progress**
- Top bar showing % of page explored
- Changes color as you progress
- Fun messages at milestones:
  - 25%: "Learning about Kamil..."
  - 50%: "Halfway to the full story"
  - 75%: "Almost there!"
  - 100%: "Ready to talk?"

### 8. **Easter Eggs**
- Konami code (↑↑↓↓←→←→BA): Reveals special message
- Triple-click on "Claude": Shows fun fact
- Hover on photo: Subtle zoom
- Hidden Claude references throughout

---

## 📊 SUCCESS METRICS TO TRACK

After launch:
- [ ] Average time on page (target: >3 minutes)
- [ ] Scroll depth (target: >80% reach bottom)
- [ ] CTA click rate
- [ ] Device breakdown (mobile vs desktop)
- [ ] Browser breakdown
- [ ] Geographic distribution
- [ ] Outreach response rate

---

## 🎯 LAUNCH STRATEGY (Week 4)

### **Soft Launch** (Nov 25)

**Share with close circle for feedback:**
- [ ] 3-5 trusted friends/colleagues
- [ ] Ask for honest feedback:
  - What stands out?
  - What's confusing?
  - Any typos/bugs?
  - How long did you spend?
  - Would you remember this person?

### **Iteration** (Nov 26-27)

- [ ] Fix any bugs found
- [ ] Refine based on feedback
- [ ] Final polish

### **Public Launch** (Nov 28+)

**LinkedIn Strategy:**
- [ ] Create compelling LinkedIn post:
  - Story of creating CV with Claude
  - Why Anthropic
  - Link to landing page
  - Call to action: "What do you think?"
- [ ] Tag relevant people (carefully!)
- [ ] Share in relevant groups

**Direct Outreach to Anthropic:**
- [ ] Find Anthropic employees on LinkedIn
- [ ] Research who handles international expansion
- [ ] Craft personalized messages:
  ```
  Hi [Name],

  I've been using Claude for months and it's transformed
  my work as a Product Manager. I recently saw Anthropic
  is expanding globally, and I wanted to share something
  I created.

  I've launched products across 8 countries in Eastern
  Europe (16M users at Kinguin, market leader Building
  Companion in construction tech). I see massive potential
  for Claude in this region.

  I created this landing page entirely with Claude to
  showcase both the opportunity and my experience:
  [LINK]

  Would love to chat about Eastern Europe expansion
  strategy if you're open to it.

  Best,
  Kamil
  ```

**Email Campaign:**
- [ ] Find Anthropic contact emails
- [ ] Send thoughtful, personalized emails
- [ ] Include landing page link
- [ ] Follow up after 1 week if no response

**Network Leverage:**
- [ ] Check for mutual connections
- [ ] Ask for warm introductions
- [ ] Attend any Anthropic events/webinars

---

## ⚠️ RISK MITIGATION

### What Could Go Wrong & How to Handle:

**1. No response from Anthropic**
- **Backup:** Keep site up, use for other opportunities
- **Action:** Try different channels, different people
- **Timeline:** Follow up 3 times over 3 weeks

**2. Technical issues during development**
- **Backup:** Simpler version ready
- **Action:** Focus on core sections first
- **Buffer:** 3-week timeline has padding

**3. Content not compelling enough**
- **Backup:** Get feedback from peers
- **Action:** Iterate based on feedback
- **Test:** Soft launch first

**4. Too busy to finish in 3 weeks**
- **Backup:** Extend to 4 weeks
- **Action:** Prioritize ruthlessly
- **MVP:** Can launch with fewer interactive elements

---

## ✅ DAILY CHECKLIST FORMAT

**Each day, track:**
- [ ] What I accomplished today
- [ ] What's blocking me
- [ ] What's next tomorrow
- [ ] Any decisions needed from Kamil

**Weekly check-ins:**
- End of Week 1: Content & Design approved?
- End of Week 2: Development on track?
- End of Week 3: Ready to launch?

---

## 🎉 DEFINITION OF DONE

**This project is complete when:**
1. ✅ Landing page is live and accessible
2. ✅ All 9 sections are polished and complete
3. ✅ Mobile responsive and tested on all devices
4. ✅ Performance score >90 on Lighthouse
5. ✅ No bugs or broken links
6. ✅ Kamil is proud to share it
7. ✅ Used successfully in Anthropic outreach
8. ✅ At least 1 meaningful conversation initiated

---

## 📞 COMMUNICATION PLAN

**How we'll stay in sync:**
- **Daily updates:** Quick message on progress
- **Mid-week check-ins:** Review what's been built
- **End-of-week reviews:** Demo + feedback session
- **Blockers:** Immediate notification if stuck
- **Decisions:** Flag anything needing Kamil's input

**Kamil's availability needed:**
- Week 1: Review content + designs (3-4 hours)
- Week 2: Mid-week check-in (1 hour)
- Week 3: Final review + testing (2 hours)
- Launch: Coordinate outreach strategy

---

## 🎯 LET'S GET STARTED!

**Immediate Next Steps (Today/Tomorrow):**

1. **Kamil writes "Claude Effect" story** (1-2 hours)
   - Use the template above
   - Be authentic and personal
   - Specific examples

2. **Kamil gathers visual assets** (1 hour)
   - Professional photo
   - Company logos
   - Certificates/awards

3. **Kamil verifies facts** (30 mins)
   - Double-check all numbers
   - Confirm dates
   - Review project details

4. **Claude starts wireframes** (immediately)
   - Section layouts
   - Interaction points
   - Design system

**By end of this week:**
- ✅ All content finalized
- ✅ All assets gathered
- ✅ Wireframes + design mockups approved
- ✅ Ready to start development

---

**This is going to be amazing. Let's build something that makes Anthropic sit up and pay attention.** 🚀

---

*3-Week Plan created with Claude (of course)*
*Ready to execute and ship*
*November 4, 2025*
