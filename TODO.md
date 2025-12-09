# TODO - Landing Page CV dla Anthropic

**Projekt:** Landing Page dla aplikacji do Anthropic
**Status:** ✅ MVP COMPLETE & DEPLOYED
**Live Site:** https://grabenzo.com
**Last Quality Audit:** December 10, 2025

---

## 🚀 QUALITY AUDIT RESULTS (December 10, 2025)

**Overall Grade: A- (92/100)**

### ✅ Strengths
- Clean, production-ready code with TypeScript
- Strong accessibility foundation (semantic HTML, focus states)
- Excellent SEO metadata (title, description, OG tags)
- Modern OKLCH color system with good contrast
- Responsive design with Tailwind breakpoints

### ⚠️ CRITICAL: Fact Verification Needed

**Before submitting to Anthropic, verify these numbers:**

1. **15+ years experience** → Is it 15, 16, or 17 years in 2025? Check exact career start date
2. **8 countries vs 10 countries** → ✅ RESOLVED (Dec 10, 2025)
   - Updated hero to "10 Countries Launched" to match map
   - Updated metadata descriptions in layout.tsx
   - Build verified successful
3. **16M users (Kinguin)** → Verify exact user count with Kinguin data
4. **40+ team (Kinguin)** → Exact number? 40, 42, 45?
5. **300M+ Eastern Europe population** → Sum of country populations = ~290M. Update number?
6. **Country populations** → Verify 2025 census data:
   - Russia: 144M, Ukraine: 44M, Poland: 38M, Romania: 19M, Czechia: 10.5M
   - Hungary: 10M, Belarus: 9.4M, Bulgaria: 6.9M, Slovakia: 5.4M, Moldova: 2.6M
7. **Project timelines**:
   - Kinguin: 2017-2019 ✓
   - Building Companion: 2019-present ✓
   - SAP XRM: 2020-2021 → Verify
   - Skinwallet: 2018-2019 → Verify
8. **Mobile Trends Awards 2020** → Confirm year and category

### 📋 Accessibility Improvements Recommended

**Priority 1**: Add ARIA labels to interactive elements
- Eastern Europe map buttons (EasternEurope.tsx:110-136)
  - Add: `aria-label="View details for ${country.name}"`
  - Add: `aria-pressed={activeCountry?.code === country.code}`
- Expandable project cards (TrackRecord.tsx:124-141)
  - Add: `aria-label="${expanded ? 'Collapse' : 'Expand'} ${project.title} details"`
  - Add: `aria-expanded={expanded}`

**Impact**: Screen readers currently announce "button" without context

**Priority 2**: Verify heading hierarchy (h1 → h2 → h3)
- Hero has h1 ✓
- Check all section headings use h2
- Check subsections use h3

### 🎨 SEO Enhancements (Optional but Recommended)

1. **Custom OG Image** → Create 1200x630px image for better social media previews
   - Current: No custom og:image specified
   - Tool: Use canvas-design skill or design software
   - Add to: layout.tsx metadata `openGraph: { images: ['/og-image.png'] }`

2. **Structured Data (JSON-LD)** → Add Person schema for Google Knowledge Panel
   - Improves search result appearance
   - Shows your role, contact, social links

### 📱 Testing Checklist

**Must Do Before Submission:**
- [ ] Verify all statistics (see list above)
- [ ] Test keyboard navigation (Tab through entire page)
- [ ] Test on iPhone (Safari mobile)
- [ ] Test on Android (Chrome mobile)
- [ ] Test on iPad/tablet
- [ ] Check all links work (mailto:, LinkedIn)
- [ ] Spell check all content

**Recommended:**
- [ ] Add ARIA labels to interactive elements
- [ ] Create custom OG image
- [ ] Test with VoiceOver (Mac) or NVDA (Windows) screen reader
- [ ] Update country populations to 2025 data
- [ ] Test in Safari (OKLCH colors), Firefox (animations)

**Nice-to-Have (Can Do After):**
- [ ] Add company logos (Kinguin, Building Companion, etc.)
- [ ] Add professional photo to Hero
- [ ] Add Vercel Analytics
- [ ] Add structured data (JSON-LD)
- [ ] Custom favicon

---

## ✅ CO ZOSTAŁO ZROBIONE (4 listopada 2025)

- [x] Przeanalizowane CV i portfolio
- [x] Stworzona strategia contentu
- [x] Przygotowany kompletny plan projektu
- [x] Utworzony 3-tygodniowy execution plan
- [x] Wybrane kluczowe decyzje:
  - Headline: **"Eastern Europe is ready for Claude. I'm ready to make it happen."**
  - Ton: **Umiarkowanie** (pewnie z osobowością)
  - Poziom: **Enhanced** (interaktywne elementy)
  - Timeline: **3 tygodnie**

---

## 📚 DOKUMENTY DO PRZECZYTANIA

W katalogu `/Users/kamil/Projects/CV/` masz:

1. **EXECUTIVE_SUMMARY.md** ⭐ **ZACZNIJ OD TEGO**
   - Twoje 5 przewag konkurencyjnych
   - Strategia pozycjonowania
   - Dlaczego to może zadziałać

2. **CONTENT_STRATEGY.md**
   - Gotowy content dla każdej sekcji
   - 4 szczegółowe case studies
   - Copy dla całego landing page'a

3. **PROJECT_PLAN.md**
   - Kompletny overview projektu
   - Stack techniczny
   - Design system

4. **3_WEEK_EXECUTION_PLAN.md**
   - Day-by-day plan na 3 tygodnie
   - Dokładnie co i kiedy
   - Launch strategy

5. **TODO.md** ← Ten plik

---

## 🎯 TWOJE ZADANIA NA NAJBLIŻSZE DNI

### ⭐ PRIORYTET 1: Napisz "Claude Effect" Story

**Co:** Osobista historia 300-400 słów o tym jak Claude zmienił Twoją pracę

**Dlaczego to kluczowe:**
- To najważniejsza sekcja całego landing page'a
- Pokazuje autentyczność i pasję
- Musi pochodzić od Ciebie (nie mogę tego napisać za Ciebie)

**Struktura:**

```
Akapit 1: Odkrycie (100 słów)
- Kiedy zacząłeś używać Claude?
- Co Cię skłoniło do wypróbowania?
- Czy byłeś sceptyczny początkowo?

Akapit 2: Transformacja (100-150 słów)
- Przykład #1: Konkretne zadanie które Claude usprawnił
- Przykład #2: Kolejny konkretny case
- Przykład #3: Jeszcze jeden przykład
- Jak zmieniło to Twoją codzienną pracę?

Akapit 3: Realizacja (80-100 słów)
- Kiedy pomyślałeś o aplikowaniu do Anthropic?
- Dlaczego Europa Wschodnia?
- Dlaczego właśnie Ty?

Akapit 4: Meta-moment (50-70 słów)
- Ta strona zbudowana z Claude
- Co to mówi o produkcie
- "That's exactly the point"
```

**Wskazówki:**
- Bądź szczery i osobisty
- Używaj konkretnych przykładów (nie ogólników!)
- Pokaż entuzjazm, ale naturalnie
- Nie pisz jak marketing copy - pisz jak do kolegi

**Gdzie zapisać:** Stwórz plik `/Users/kamil/Projects/CV/my_claude_story.md`

---

### 📸 PRIORYTET 2: Zbierz Materiały Wizualne

**Potrzebne:**

#### Zdjęcie
- [ ] Profesjonalne zdjęcie (minimum 2000x2000px)
  - Czyste tło (najlepiej jednolite)
  - Dobre oświetlenie
  - Profesjonalne ale approachable
  - Aktualne (nie sprzed 5 lat!)

**Gdzie:**
- Jeśli masz: Użyj z LinkedIn/profesjonalnej sesji
- Jeśli nie: Zrób nowe (dobry smartfon + dobre światło + czysta ściana)

#### Loga Firm (wysokiej rozdzielczości, najlepiej PNG z przezroczystym tłem)
- [ ] Kinguin logo
- [ ] Xella logo
- [ ] Building Companion logo
- [ ] Skinwallet logo
- [ ] Inne firmy z CV

**Gdzie znaleźć:** Google "[nazwa] logo PNG transparent" lub strony firm → media kit

#### Certyfikaty/Nagrody
- [ ] AJ&Smart Workshopper Master
- [ ] Design Sprint Masterclass
- [ ] Professional Scrum Product Owner
- [ ] PRINCE2
- [ ] Mobile Trends Awards 2020 nomination

**Gdzie:** Twoje pliki z kursów, certyfikaty PDF, screenshoty

#### Opcjonalnie: Screenshoty Projektów
- [ ] Kinguin interface
- [ ] Building Companion platform
- [ ] Inne projekty (jeśli masz)

**Gdzie zapisać:** Stwórz folder `/Users/kamil/Projects/CV/assets/`

---

### ✅ PRIORYTET 3: Zweryfikuj Fakty i Liczby

**Sprawdź dokładność tych liczb z CV:**

- [ ] **Kinguin users:** Dokładnie 16M czy inna liczba?
- [ ] **Building Companion countries:** Dokładnie 8 czy więcej teraz?
- [ ] **Team size Kinguin:** Dokładnie 40+ czy konkretna liczba?
- [ ] **Kinguin project dates:** Dokładnie 2017-2019?
- [ ] **Building Companion start:** Dokładnie 2019-12?
- [ ] **Mobile Trends Awards:** 2020, jaka dokładnie kategoria?
- [ ] **Lista krajów Building Companion:** PL, RO, BG, RUS, DE, NL, BE, CZ, SL - wszystkie?

**Dlaczego to ważne:**
Autentyczność > zaokrąglanie. Lepiej "15.8M users" niż "16M" jeśli to nieprawda.

**Gdzie zapisać:** Edytuj plik `/Users/kamil/Projects/CV/verified_facts.md` (stwórz go)

---

## 📅 TIMELINE

**Tydzień 1 (4-10 listopada)** ← TERAZ TUTAJ JESTEŚMY
- ✅ Dzień 1-2: Analiza i strategia (DONE!)
- ⏳ Dzień 3-5: Ty zbierasz content/materiały + Ja tworzę wireframes
- ⏳ Dzień 6-7: Design mockups

**Tydzień 2 (11-17 listopada)**
- Development (budowanie strony)
- Wszystkie sekcje w Next.js
- Responsive design

**Tydzień 3 (18-24 listopada)**
- Animacje i interaktywność
- Testing i polish
- Deploy

**~25 listopada:** 🚀 LAUNCH!

---

## 🎯 KIEDY WRÓCISZ JUTRO (5 listopada)

### Opcja A: Zaczynasz od contentu
```
1. Otwórz EXECUTIVE_SUMMARY.md (przeczytaj kluczowe insights)
2. Przeczytaj template "Claude Effect" w 3_WEEK_EXECUTION_PLAN.md
3. Napisz swoją historię (300-400 słów)
4. Zapisz w my_claude_story.md
5. Daj mi znać - mogę pomóc z editingiem/feedbackiem
```

### Opcja B: Zaczynasz od materiałów
```
1. Znajdź/zrób profesjonalne zdjęcie
2. Pobierz loga firm z internetu
3. Znajdź certyfikaty w swoich plikach
4. Zapisz wszystko w /assets/ folder
5. Wyślij mi lub pokaż co masz
```

### Opcja C: Zaczynasz od weryfikacji
```
1. Otwórz swoje CV
2. Sprawdź każdą liczbę i datę
3. Zrób listę zweryfikowanych faktów
4. Zapisz w verified_facts.md
5. Daj znać jeśli są zmiany
```

**Polecam:** Zacznij od Opcja A (Claude Effect story) - to najważniejsze i wymaga najwięcej myślenia.

---

## 💡 PYTANIA DO PRZEMYŚLENIA (opcjonalnie)

Jeśli masz chwilę, przemyśl:

1. **Domena:** Chcesz kupić custom domain (np. kamil-for-anthropic.com) czy użyć free Vercel subdomain?

2. **LinkedIn:** Masz mocne rekomendacje na LinkedIn które możemy użyć?

3. **Kontakt:** Jaką metodę kontaktu preferujesz pokazać (email, phone, LinkedIn, calendar link)?

4. **Timeline:** Czy rzeczywiście możesz zacząć pracę dla Anthropic w rozsądnym czasie (3-6 miesięcy)?

5. **Relokacja:** Gotów na remote/hybrid/relokację do USA/UK gdzie Anthropic ma biura?

(Nie musisz odpowiadać teraz - tylko do przemyślenia)

---

## 📞 KOMUNIKACJA

Gdy wrócisz:
- Daj znać co udało Ci się przygotować
- Zadaj pytania jeśli coś niejasne
- Pokaż draft "Claude Effect" story - pomogę z feedbackiem
- Gdy będziesz gotowy - zaczynam wireframes i design!

---

## 🎉 REMINDER: DLACZEGO TO WARTO

To nie jest zwykłe CV. To:
- ✅ Demonstracja product thinkingu
- ✅ Dowód umiejętności używania Claude
- ✅ Propozycja biznesowa (Europa Wschodnia opportunity)
- ✅ Unforgettable first impression
- ✅ Perfect conversation starter

**Anthropic tego nie zapomni.** 🚀

---

## 📂 STRUKTURA PROJEKTU

```
/Users/kamil/Projects/CV/
├── TODO.md                        ← Ten plik
├── EXECUTIVE_SUMMARY.md           ← Przeczytaj jutro!
├── CONTENT_STRATEGY.md            ← Szczegółowy content
├── PROJECT_PLAN.md                ← Kompletny plan
├── 3_WEEK_EXECUTION_PLAN.md       ← Day-by-day timeline
├── my_claude_story.md             ← STWÓRZ JUTRO
├── verified_facts.md              ← STWÓRZ JUTRO
└── assets/                        ← STWÓRZ FOLDER, dodaj materiały
    ├── photo/
    ├── logos/
    └── certificates/
```

---

**Do jutra! 👋**

Masz solidny fundament. Teraz czas na content i materiały. Nie spiesz się z "Claude Effect" story - poświęć czas, żeby było autentyczne i mocne. To Twoja tajna broń.

*TODO created: November 4, 2025*
*Next session: November 5, 2025*
*Target launch: ~November 25, 2025*
