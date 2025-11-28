# Portfolio - Christian Hajduk

Moderne Portfolio-Website eines Frontend-Entwicklers, entwickelt mit Angular 20.3.0 und modernsten Web-Technologien.

---

## 📋 Projektübersicht

Dies ist ein **professionelles Portfolio-Projekt** für einen Frontend-Entwickler, das eine mehrsprachige, responsive Website mit umfangreichen Features präsentiert. Das Projekt demonstriert moderne Web-Entwicklungs-Best-Practices und aktuelle Angular-Technologien.

---

## 🛠️ Technologie-Stack

### Core Framework

- **Angular 20.3.0** - Neueste Version des Angular Frameworks
- **TypeScript 5.9.2** - Typsichere Entwicklung
- **Standalone Components** - Moderne Angular-Architektur ohne NgModules

### Wichtige Dependencies

- **@ngx-translate/core & http-loader (v17.0.0)** - Internationalisierung (i18n)
- **AOS (Animate On Scroll) v3.0.0-beta.6** - Scroll-basierte Animationen
- **Angular Forms** - Formularvalidierung und -verwaltung
- **Angular Router** - Navigation mit Scroll-Unterstützung

### Development Tools

- **Prettier** - Code-Formatierung mit Angular-HTML-Support
- **Karma & Jasmine** - Testing-Framework
- **Angular CLI 20.3.8** - Build- und Development-Tools

---

## 🚀 Schnellstart

### Development Server starten

```bash
ng serve
```

Die Anwendung ist dann unter `http://localhost:4200/` erreichbar. Die App lädt automatisch neu, wenn Sie Quelldateien ändern.

### Projekt bauen

```bash
ng build
```

Die Build-Artefakte werden im `dist/` Verzeichnis gespeichert. Der Production-Build ist für Performance und Geschwindigkeit optimiert.

### Tests ausführen

```bash
ng test
```

Führt Unit-Tests mit dem [Karma](https://karma-runner.github.io) Test-Runner aus.

---

## 🏗️ Projektstruktur

```
src/app/
├── app.ts                    # Root-Komponente
├── app.routes.ts             # Routing-Konfiguration
├── app.config.ts             # App-Konfiguration (i18n, Router)
├── burgermenu-service.ts     # Service für mobile Navigation
├── sendMail.php              # Backend-Script für Kontaktformular
│
├── main-content/             # Hauptinhalt der Portfolio-Seite
│   ├── hero/                 # Hero-Sektion (Willkommensbereich)
│   ├── about-me/             # Über-mich-Sektion
│   ├── skills/               # Fähigkeiten-Übersicht
│   ├── portfolio/            # Projekt-Portfolio
│   ├── references/           # Referenzen/Testimonials
│   ├── contact/              # Kontaktformular
│   ├── arrow-left/           # Dekorative Navigation
│   └── arrow-right/          # Dekorative Navigation
│
├── shared/                   # Wiederverwendbare Komponenten
│   ├── header/               # Kopfzeile mit Navigation
│   └── footer/               # Fußzeile
│
└── imprint/                  # Rechtliche Seiten
    ├── ham-menu/             # Hamburger-Menü für mobile Ansicht
    ├── legal-notice/         # Impressum
    └── privacy-policy/       # Datenschutzerklärung
```

---

## 🌐 Mehrsprachigkeit (i18n)

Das Projekt unterstützt **zwei Sprachen**:

- **Deutsch (de)** - Standardsprache
- **Englisch (en)** - Fallback-Sprache

### Übersetzungsdateien

Lokalisiert in `public/i18n/`:

- `de.json` - Deutsche Übersetzungen
- `en.json` - Englische Übersetzungen

Alle Inhalte sind vollständig übersetzt, einschließlich:

- Hero-Sektion
- Über mich
- Fähigkeiten
- Portfolio-Projekte
- Referenzen
- Kontaktformular
- Rechtliche Hinweise

---

## 🎯 Hauptfunktionen

### 1. Hero-Sektion

- Willkommensbereich mit Titel "Frontend Entwickler"
- Mehrsprachige Unterstützung

### 2. Über mich

- Persönliche Vorstellung
- Standortangabe: Oyten
- Remote-Arbeitsbereitschaft
- Call-to-Action

### 3. Skills-Übersicht

- Darstellung technischer Fähigkeiten
- Hinweis auf Lernbereitschaft
- Kontaktmöglichkeit für weitere Skills

### 4. Portfolio

Drei Hauptprojekte:

**Pokédex**

- Basiert auf der PokeAPI
- Katalogisiert Pokémon-Informationen

**Jump & Run Game**

- Objektorientierter Ansatz
- Klassisches Spielprinzip

**Task Manager**

- Kanban-System inspiriert
- Drag & Drop Funktionalität
- Benutzer- und Kategorienzuweisung

### 5. Referenzen

Testimonials von Teammitgliedern mit Schwerpunkt auf:

- Organisation und Kommunikation
- Teamfähigkeit
- Positives Engagement

### 6. Kontaktformular

Umfangreiches Formular mit:

- **Echtzeit-Validierung** für Name, E-Mail, Nachricht
- **Visuelle Feedback-Icons** (rot/grün)
- **Fehlermeldungen** unter Eingabefeldern
- **Datenschutz-Checkbox** (erforderlich)
- **PHP-Backend** für E-Mail-Versand
- **Test-Modus** für Entwicklung

---

## 🧭 Routing & Navigation

### Routen

```
'/' → MainContent (Hauptseite)
'/legalnotice' → LegalNotice (Impressum)
'/privacy-policy' → PrivacyPolicy (Datenschutz)
```

### Scroll-Verhalten

- Anchor Scrolling aktiviert
- Scroll Position Restoration aktiviert
- Smooth Scrolling zu Sektionen

### Navigation

- **Header** - Hauptnavigation
- **Footer** - Links zu rechtlichen Seiten
- **Hamburger-Menü** - Mobile Navigation
- **Pfeile** - Dekorative Navigation zwischen Sektionen

---

## 🎨 Design & UX

### Animationen

- **AOS (Animate On Scroll)** - Elemente animieren beim Scrollen
- **Hover-Effekte** - Interaktive Portfolio-Karten
- **Smooth Scrolling** - Sanfte Navigation

### Responsive Design

- Mobile-First Ansatz
- Hamburger-Menü für kleine Bildschirme
- Anpassungsfähige Layouts

### Formular-UX

- Echtzeit-Validierung
- Visuelle Feedback-Icons (❌/✅)
- Fehlermeldungen unter Feldern
- Border-Effekte bei Hover/Focus

---

## 🔧 Konfiguration

### App-Konfiguration

- Standardsprache: Englisch
- Fallback-Sprache: Englisch
- i18n-Dateien: `/i18n/{lang}.json`
- Scroll-Verhalten: Anchor-basiert
- Global Error Listeners aktiviert

### Kontaktformular-Backend

- PHP-Script: `sendMail.php`
- Endpoint: `https://deineDomain.de/sendMail.php`
- Content-Type: `text/plain`

---

## 🧪 Testing

Unit-Tests sind für alle Komponenten verfügbar:

- Jasmine & Karma Setup
- Spec-Dateien für jede Komponente
- Test-Befehl: `ng test`

---

## 📦 Code Scaffolding

Angular CLI bietet leistungsstarke Scaffolding-Tools. Um eine neue Komponente zu generieren:

```bash
ng generate component component-name
```

Für eine vollständige Liste verfügbarer Schematics:

```bash
ng generate --help
```

---

## 💡 Besondere Features

### Console-Branding

Beim Laden der App erscheint ein stilisiertes ASCII-Banner in der Konsole mit dem Namen "CHRISTIAN HAJDUK".

### Service-Architektur

- **BurgermenuService** - Zentrale Verwaltung des mobilen Menüs
- Verwendung von Angular Signals für reaktive State-Verwaltung

### Standalone Components

- Moderne Angular-Architektur
- Keine NgModules erforderlich
- Bessere Tree-Shaking-Fähigkeit

---

## 📚 Weitere Ressourcen

Für weitere Informationen zur Verwendung der Angular CLI besuchen Sie die [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) Seite.

---

## ✨ Zusammenfassung

Dieses Portfolio demonstriert:

✅ Moderne Angular-Architektur (Standalone Components)  
✅ Mehrsprachigkeit (DE/EN)  
✅ Responsive Design (Mobile-First)  
✅ Formular-Validierung mit UX-Feedback  
✅ Scroll-Animationen (AOS)  
✅ SEO-freundliches Routing  
✅ Professionelle Code-Struktur  
✅ Testing-Setup

---

**Entwickelt mit ❤️ und Angular 20.3.0**
