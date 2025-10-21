# 🌌 Jens Osberg — Personal Homepage

Welcome to the codebase behind Jens Osberg's modern, one-page personal site. The app combines playful motion design with informative sections that highlight Jens' work across law, technology, public speaking, and music.

## ✨ Highlights
- **Immersive hero section** powered by parallax scrolling, a floating astronaut illustration, and a typewriter headline animation.
- **Sticky, responsive navigation** that adapts to scroll position and mobile breakpoints.
- **Story-driven content sections** for professional background, public speaking engagements, musical projects, and developer experiments.
- **Interactive testimonial carousel** showcasing talks and podcast appearances with swipe support.
- **Embedded Spotify player** to preview Gete's album *Tynn Is* directly on the page.
- **3D-inspired card** linking to the previous homepage design for visitors who want to explore the earlier 3D experiment.

## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/) App Router with TypeScript
- [React 19](https://react.dev/) with client/server components
- [Tailwind CSS](https://tailwindcss.com/) for styling and gradients
- [Framer Motion](https://www.framer.com/motion/) for parallax, scroll, and hover animations
- [react-responsive](https://github.com/contra/react-responsive) for adaptive motion behavior
- Custom UI utilities for the testimonial slider, 3D card, and typewriter effect

## 🗂️ Project Structure
```
app/
  layout.tsx      // Root layout, metadata, and global styles
  page.tsx        // Top-level page that assembles all sections
components/
  Navbar.tsx      // Sticky nav with framer-motion underline
  ParallaxComponent.tsx // Hero with layered backgrounds and astronaut
  Work.tsx        // "About me" content with animated image
  Speaking.tsx    // Testimonial carousel of talks & podcasts
  Music.tsx       // Spotify embed and band story
  Other.tsx       // Developer section with 3D card link
  Footer.tsx      // Contact section with social links
  ui/             // Reusable animated and 3D UI primitives
public/
  *.jpg, *.png, *.svg assets used across sections
```

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to explore the site. Any edits to files under `app/` or `components/` will hot-reload automatically.

## 🧪 Available Scripts
| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Check the project with ESLint |

## 📚 Content Guide
Each section can be tailored to reflect new achievements or media appearances:
- **Home** (`ParallaxComponent.tsx`): Update background assets or hero copy.
- **About me** (`Work.tsx`): Adjust the bio paragraphs or illustration.
- **Public speaking** (`Speaking.tsx`): Extend the `testimonials` array with new talks.
- **Music** (`Music.tsx`): Swap the Spotify embed or edit the band story.
- **Developer** (`Other.tsx` + `prevSite.tsx`): Refresh the tech overview or change the external link.
- **Contact** (`Footer.tsx`): Update email and social URLs as needed.

## 🤝 Contributing
This is a personal project, but feel free to fork the repository or adapt components for your own homepage. If you spot an issue, open a discussion or pull request.

## 📄 License
No explicit license has been provided. Please reach out to Jens Osberg for usage questions.
