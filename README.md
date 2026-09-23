# Muhammad Khan — Portfolio

The personal portfolio of Muhammad Khan, a full-stack developer and software product builder behind MK TECH. It presents commercial POS products, desktop business software, web applications, and IoT automation work.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 / PostCSS
- Static, optimized portfolio assets

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run build
```

## Project structure

```text
app/                    Next.js routes, metadata, and global styles
components/
  layout/               Site-wide header, footer, and background
  projects/             Interactive project gallery and case studies
  sections/             Homepage content sections
data/                   Portfolio content and contact information
types/                  Shared TypeScript domain types
public/
  projects/             Project artwork
  resume/               Downloadable CV
```

## Updating content

- Personal details, experience, services, and projects: `data/portfolio.ts`
- Homepage composition: `app/page.tsx`
- Page sections: `components/sections/`
- Project media: `public/projects/`
- Resume: `public/resume/Muhammad-Khan-CV.pdf`

## Deployment

The project is ready for Vercel. Import the GitHub repository in Vercel; the framework, build command, and output settings are detected automatically.

## Author

**Muhammad Khan**  
Full-Stack Developer & Software Product Builder  
[GitHub](https://github.com/mu7ammadkhan) · [LinkedIn](https://www.linkedin.com/in/muhammad-khan-017b8829b)
