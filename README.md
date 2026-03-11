# Yuvraj Soni — Portfolio

Angular 17 personal portfolio with full SEO, Google Tag Manager, and SSR support.

## Quick Start

```bash
npm install
ng serve
```

## Build for Production

```bash
ng build --configuration production
```

## Build with SSR

```bash
ng build && ng run portfolio:server
node dist/portfolio/server/server.mjs
```

## Customization Checklist

### 1. Google Tag Manager
Replace `GTM-XXXXXXX` in `src/index.html` with your real GTM container ID.

### 2. Canonical URL
Replace all `https://www.itsyuvraj.com` with your actual domain in:
- `src/index.html`
- `src/sitemap.xml`
- `src/app/services/seo.service.ts`

### 3. Contact Form
In `contact.component.ts` → `onSubmit()`, integrate your email service:
- **EmailJS** (free, client-side): https://www.emailjs.com/
- **Formspree** (free tier): https://formspree.io/
- **Custom API**: POST to your Node.js backend

### 4. Resume Download
Place your CV at `src/assets/Yuvraj_Soni_Resume.pdf`

### 5. OG Image
Create a 1200×630px image at `src/assets/og-image.jpg` for social sharing.

### 6. GTM Events Already Tracked
- `page_view` — on every navigation
- `contact_form_submit` — when contact form is submitted
- `project_click` — when a project card is clicked
- `resume_download` — when CV is downloaded
- `section_view` — when nav links are clicked

## Tech Stack
- Angular 17 (Standalone Components)
- TypeScript 5.4
- SCSS
- Angular SSR (Universal)
- Google Tag Manager
- Schema.org JSON-LD structured data
