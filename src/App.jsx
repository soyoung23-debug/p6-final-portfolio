import { useState } from 'react'

const portfolioPath = (path) => `${import.meta.env.BASE_URL}portfolio/${path}`

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  {
    name: 'HTML5',
    image: portfolioPath('images/icons8-html-5-50.png'),
    alt: 'HTML5 logo',
    level: 'Intermediate',
  },
  {
    name: 'CSS3',
    image: portfolioPath('images/icons8-css-logo-50.png'),
    alt: 'CSS3 logo',
    level: 'Intermediate',
  },
  {
    name: 'JavaScript',
    image: portfolioPath('images/icons8-js-50.png'),
    alt: 'JavaScript logo',
    level: 'Intermediate',
  },
  {
    name: 'GitLab',
    image: portfolioPath('images/icons8-gitlab-50.png'),
    alt: 'GitLab logo',
    level: 'Intermediate',
  },
  {
    name: 'GitHub',
    image: portfolioPath('images/icons8-github.png'),
    alt: 'GitHub logo',
    level: 'Intermediate',
  },
  {
    name: 'VS Code',
    image: portfolioPath('images/icons8-visual-studio-logo-50.png'),
    alt: 'Visual Studio Code logo',
    level: 'Intermediate',
  },
  {
    name: 'Node.js',
    image: portfolioPath('images/icons8-nodejs-64.png'),
    alt: 'Node.js skill badge',
    level: 'Intermediate',
  },
  {
    name: 'ExpressJS',
    image: portfolioPath('images/icons8-express-js-50.png'),
    alt: 'Express skill badge',
    level: 'Intermediate',
  },
  {
    name: 'MongoDB',
    image: portfolioPath('images/icons8-mongodb-24.png'),
    alt: 'MongoDB skill badge',
    level: 'Intermediate',
  },
  {
    name: 'Postman',
    image: portfolioPath('images/icons8-postman-32.png'),
    alt: 'Postman skill badge',
    level: 'Intermediate',
  },
  {
    name: 'React',
    image: portfolioPath('images/icons8-react-24.png'),
    alt: 'React skill badge',
    level: 'Intermediate',
  },
  {
    name: 'Tailwind CSS',
    image: portfolioPath('images/icons8-tailwind-css-48.png'),
    alt: 'Tailwind CSS skill badge',
    level: 'Intermediate',
  },
]

const projects = [
  {
    name: 'QuickCompare App',
    image: portfolioPath('images/project1.png'),
    alt: 'Screenshot of the QuickCompare command-line application',
    description:
      'A command-line app for managing product data and comparing unit prices instantly so users can choose the best-value product.',
    stack: 'JavaScript, Node.js',
    repoUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/blob/main/p1-js-console-app.js',
    liveUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/blob/main/p1-js-console-app.js',
    liveLabel: 'View Source',
  },
  {
    name: 'Web Dev Portfolio',
    image: portfolioPath('images/project2.png'),
    alt: 'Screenshot of the original personal web development portfolio',
    description:
      'My first personal portfolio website built to present my background, showcase my skills, and document my growth as a developer.',
    stack: 'HTML, CSS',
    repoUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/tree/main/p2-web-dev-portfolio',
    liveUrl: 'https://soyoung23-debug.github.io/webdev/',
    liveLabel: 'Live Site',
  },
  {
    name: 'Deal or No Deal Fan Game',
    image: portfolioPath('images/logo.png'),
    alt: 'Logo used for the Deal or No Deal browser game project',
    description:
      'A browser game inspired by Deal or No Deal with round-based case opening, banker offers, and a dramatic player experience.',
    stack: 'HTML, CSS, JavaScript',
    repoUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/blob/main/index.html',
    liveUrl: 'https://soyoung23-debug.github.io/deal-or-no-deal-game/',
    liveLabel: 'Live Site',
  },
  {
    name: 'Shopping App API',
    image: portfolioPath('images/icons8-rocket-64.png'),
    alt: 'Rocket icon representing the shopping app API project',
    description:
      'An Express-based shopping app where users can order items and receive payment instructions by email, with admin product management tools.',
    stack: 'Node.js, Express, MongoDB',
    repoUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/tree/main/p4-node-app',
    liveUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/tree/main/p4-node-app',
    liveLabel: 'Project Files',
  },
  {
    name: 'Air Quality Tracker',
    image: portfolioPath('images/icons8-cv.png'),
    alt: 'Document icon representing the air quality tracker project',
    description:
      'A React application for searching air quality data, checking locations, and viewing saved cities and station details.',
    stack: 'React, React Router, API Integration',
    repoUrl:
      'https://gitlab.com/uplift-code-camp/students/batch-28/chareen/projects/-/tree/main/p5-react-app',
    liveUrl: 'https://p5-react-app-client.onrender.com/checklocation',
    liveLabel: 'Live Site',
  },
]

const contactLinks = [
  {
    name: 'LinkedIn',
    image: portfolioPath('images/icons8-linkedin.png'),
    alt: 'LinkedIn logo',
    url: 'https://www.linkedin.com/in/chareen-joy-guzman',
  },
  {
    name: 'GitHub',
    image: portfolioPath('images/icons8-github.png'),
    alt: 'GitHub logo',
    url: 'https://github.com/soyoung23-debug',
  },
  {
    name: 'Discord',
    image: portfolioPath('images/icons8-discord-50.png'),
    alt: 'Discord logo',
    url: 'https://discord.com/users/1390894243249389689',
  },
]

const panelClassName =
  'rounded-[2rem] border border-[#ded1c3] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(248,245,240,0.94))] shadow-[0_14px_32px_rgba(79,70,62,0.08)]'

const linkButtonClassName =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(79,70,62,0.12)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#8f5a4359]'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(217,199,186,0.55),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(239,232,225,0.75),transparent_30%),#f6f1ea] text-[#5d5349]">
      <header className="sticky top-0 z-20 border-b border-[#ded1c3] bg-[rgba(248,245,240,0.92)] backdrop-blur-[14px]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-3 py-4 sm:px-5">
          <a
            className="inline-flex items-center gap-3 font-['Space_Grotesk'] text-base font-bold text-[#312a24] no-underline"
            href="#home"
            onClick={handleNavClick}
          >
            <img
              src={portfolioPath('images/logo.png')}
              alt="Chareen portfolio logo"
              width="30"
              height="30"
              className="rounded-full shadow-[0_8px_18px_rgba(79,70,62,0.15)]"
            />
            <span>Chareen Guzman</span>
          </a>

          <button
            className="inline-flex rounded-[0.8rem] border border-[#c6ad9b] bg-[#f8f5f0] p-3 md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-[#312a24]"></span>
              <span className="block h-0.5 w-5 bg-[#312a24]"></span>
              <span className="block h-0.5 w-5 bg-[#312a24]"></span>
            </span>
          </button>

          <nav
            id="site-nav"
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } absolute left-3 right-3 top-[calc(100%+0.5rem)] flex-col gap-2 rounded-[1.2rem] border border-[#ded1c3] bg-[rgba(248,245,240,0.98)] p-3 shadow-[0_16px_28px_rgba(79,70,62,0.12)] md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-full px-4 py-2.5 text-center font-['Space_Grotesk'] text-[0.95rem] font-semibold text-[#5d5349] no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#efe8e1] hover:text-[#312a24]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-2 py-6 sm:px-4 sm:py-8">
        <section
          className={`${panelClassName} grid min-h-[30rem] gap-8 p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center`}
          id="home"
        >
          <div className="max-w-2xl">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
              Full-Stack Developer | Problem-Solver | Environmentalist
            </p>
            <h1 className="mt-3 font-['Space_Grotesk'] text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.95] text-[#312a24]">
              Hello! I&apos;m Chareen
            </h1>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-7 text-[#5d5349]">
              I&apos;m a full-stack developer building thoughtful
              digital experiences while bringing the discipline, curiosity, and
              analytical mindset of an engineer into tech.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                className={`${linkButtonClassName} bg-[#a87c68] text-white shadow-[0_10px_20px_rgba(168,124,104,0.25)]`}
                href="#projects"
              >
                My Projects
              </a>
              <a
                className={`${linkButtonClassName} border border-[#c6ad9b] bg-transparent text-[#312a24]`}
                href="mailto:chareenguzman@gmail.com"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="aspect-[4/5] w-full max-w-sm rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(217,199,186,0.85),rgba(248,245,240,0.95))] p-4 shadow-[0_24px_44px_rgba(79,70,62,0.16),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <img
                src={portfolioPath('images/profile pic.jpeg')}
                alt="Portrait of Chareen Guzman"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className={`${panelClassName} p-6 md:p-8`} id="about">
          <div className="mb-6">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
              About Me
            </p>
            <h2 className="mt-1 font-['Space_Grotesk'] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#312a24]">
              Building with purpose and curiosity
            </h2>
          </div>
          <p className="max-w-4xl leading-8">
            I am currently sharpening my development skills through an
            intensive bootcamp while growing a portfolio that reflects both my
            technical progress and my personality. Beyond code, I care deeply
            about environmental preservation and hope to use technology to build
            solutions that are useful, sustainable, and meaningful.
          </p>
        </section>

        <section className={`${panelClassName} p-6 md:p-8`} id="skills">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
                Skills
              </p>
              <h2 className="mt-1 font-['Space_Grotesk'] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#312a24]">
                My development toolkit
              </h2>
            </div>
            <a
              className={`${linkButtonClassName} bg-[#a87c68] text-white shadow-[0_10px_20px_rgba(168,124,104,0.25)]`}
              href={portfolioPath('file/Chareen%20Joy%20S.%20Guzman%20-%20CV.pdf')}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            {skills.map((skill) => (
              <article
                className="group min-h-[11.5rem] [perspective:1000px]"
                key={skill.name}
              >
                <div
                  className="relative h-full w-full transition duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[1.4rem] border border-[#ded1c3] bg-[rgba(255,255,255,0.72)] p-4 text-center [backface-visibility:hidden]">
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.alt}
                        className="h-[3.2rem] w-[3.2rem] object-contain"
                      />
                    ) : (
                      <div
                        className="grid h-[3.4rem] w-[3.4rem] place-items-center rounded-2xl bg-[linear-gradient(145deg,#a87c68,#d9c7ba)] font-['Space_Grotesk'] text-base font-bold tracking-[0.06em] text-white shadow-[0_10px_18px_rgba(79,70,62,0.14)]"
                        role="img"
                        aria-label={skill.alt}
                      >
                        {skill.badge}
                      </div>
                    )}
                    <h3 className="mt-3 font-['Space_Grotesk'] text-base font-semibold text-[#312a24]">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[1.4rem] border border-[#ded1c3] bg-[linear-gradient(145deg,#d9c7ba,#efe8e1)] p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm text-[#5d5349]">Level of expertise</p>
                    <strong className="mt-1 font-['Space_Grotesk'] text-base text-[#312a24]">
                      {skill.level}
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${panelClassName} p-6 md:p-8`} id="projects">
          <div className="mb-6">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
              Projects
            </p>
            <h2 className="mt-1 font-['Space_Grotesk'] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#312a24]">
              Work I&apos;ve built and kept improving
            </h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {projects.map((project) => (
              <article
                className="flex flex-col overflow-hidden rounded-[1.5rem] border border-[#ded1c3] bg-[rgba(255,255,255,0.78)]"
                key={project.name}
              >
                <img
                  className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#efece7,#d9c7ba)] object-cover"
                  src={project.image}
                  alt={project.alt}
                />
                <div className="flex grow flex-col p-[1.15rem] pb-4">
                  <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
                    {project.stack}
                  </p>
                  <h3 className="mt-2 font-['Space_Grotesk'] text-[1.15rem] font-semibold text-[#312a24]">
                    {project.name}
                  </h3>
                  <p className="mt-3 grow leading-7">{project.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-3 px-[1.15rem] pb-[1.15rem] sm:grid-cols-2">
                  <a
                    className={`${linkButtonClassName} h-12 w-full bg-[#efe8e1] px-3 text-center text-[#312a24]`}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    className={`${linkButtonClassName} h-12 w-full bg-[#efe8e1] px-3 text-center text-[#312a24]`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.liveLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${panelClassName} p-6 md:p-8`} id="resume">
          <div className="mb-6">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
              Experience
            </p>
            <h2 className="mt-1 font-['Space_Grotesk'] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#312a24]">
              Engineering experience that shapes my tech work
            </h2>
          </div>
          <p className="max-w-4xl leading-8">
            Before shifting into software, I spent 8 years working as a
            Chemical Engineer and Environmental Specialist. That experience
            trained me to think carefully, solve problems methodically, and stay
            grounded in real-world impact. I&apos;m bringing that same mindset into
            every web project I build.
          </p>
          <a
            className="mt-6 inline-flex w-full items-center gap-4 rounded-[1.3rem] border border-[#ded1c3] bg-[rgba(255,255,255,0.72)] px-5 py-4 no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(79,70,62,0.12)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#8f5a4359]"
            href={portfolioPath('file/Chareen%20Joy%20S.%20Guzman%20-%20CV.pdf')}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={portfolioPath('images/icons8-cv.png')}
              alt="Resume document icon"
              className="h-11 w-11"
            />
            <div className="flex flex-col">
              <strong className="font-['Space_Grotesk'] text-base text-[#312a24]">
                Chareen Joy S. Guzman - CV
              </strong>
              <span className="text-sm text-[#5d5349]">
                Open or download my updated resume
              </span>
            </div>
          </a>
        </section>

        <section className={`${panelClassName} p-6 text-center md:p-8`} id="contact">
          <div className="mb-6">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8f5a43]">
              Contact
            </p>
            <h2 className="mt-1 font-['Space_Grotesk'] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#312a24]">
              Let&apos;s connect
            </h2>
          </div>
          <p className="mx-auto max-w-3xl leading-8">
            I&apos;m open to opportunities, collaborations, and conversations
            about projects that create positive impact.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4">
            <a
              className={`${linkButtonClassName} bg-[#a87c68] text-white shadow-[0_10px_20px_rgba(168,124,104,0.25)]`}
              href="mailto:chareenguzman@gmail.com"
            >
              Email Me
            </a>
            <div
              className="flex flex-wrap items-center justify-center gap-3"
              aria-label="Social links"
            >
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ded1c3] bg-[rgba(255,255,255,0.74)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(79,70,62,0.12)]"
                >
                  <img
                    src={link.image}
                    alt={link.alt}
                    className="h-[1.45rem] w-[1.45rem] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mb-8 flex w-full max-w-7xl flex-col items-center gap-2 px-3 pt-1 text-center text-sm text-[#776b61] sm:px-5">
        <p>© 2026 Chareen Guzman. All rights reserved.</p>
        <p>
          Icons by{' '}
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#312a24] no-underline"
          >
            Icons8
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
