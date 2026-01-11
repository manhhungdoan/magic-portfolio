import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manh Hung",
  lastName: "Doan",
  name: `manhhungdoan`,
  role: "Frontend developer",
  avatar: "/images/avatar.webp",
  email: "hungthiendoan@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Vietnamese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Zalo",
    icon: "zalo",
    link: `https://zalo.me/0777432921`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/manhhungdoan",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhungdoan/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable web applications with modern architecture</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">hungdm</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/sofin-business-platform",
  },
  subline: (
    <>
      I'm Manh Hung, a Frontend Team Lead specializing in{" "}
      <Text as="span" size="xl" weight="strong">
        ReactJS
      </Text>
      , microfrontend architecture, and performance optimization for <br /> enterprise fintech
      solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Frontend Developer with 3+ years in enterprise web applications and 1+ year leading teams in
        fintech platforms. Strong expertise in React, microfrontend/monorepo architectures, and
        performance optimization. Led a 3-member team with responsibilities including technical
        decisions, code review, and production deployment to Red Hat servers in bank-grade security
        environments
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SFIN .JSC",
        timeframe: "Jul 2024 - Present",
        role: "Frontend Team Lead",
        achievements: [
          <>
            Led a team of 3 developers using Agile/Scrum, increasing project delivery speed by 25%
            through effective sprint planning and task prioritization
          </>,
          <>
            Established best practices for microfrontend architecture and monorepo structure across
            multiple team projects
          </>,
          <>
            Enforced coding standards and Git Flow through code reviews, mentoring junior developers
            to improve overall code quality by 30%+
          </>,
          <>
            Delivered multiple projects for banking and financial institution partners, meeting
            bank-grade security and compliance requirements
          </>,
          <>
            Ensured production readiness and system stability in critical payment environments
            through deployment coordination and monitoring
          </>,
        ],
      },
      {
        company: "SFIN .JSC",
        timeframe: "Jan 2023 - Jun 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed and maintained 3-5 large-scale web applications using ReactJS, Redux Toolkit,
            Ant design and modern frontend technologies
          </>,
          <>
            Migrated build tooling from Webpack to Vite or RSBuild, improving build performance by
            90% and simplifying configuration
          </>,
          <>
            Optimized performance by 97% (15MB → 500KB bundle size) through code splitting, lazy
            loading, and tree-shaking, reducing load time by 70%+
          </>,
          <>
            Optimized Dockerfile and CI/CD pipelines with Jenkins, reducing deployment time from 15
            minutes to under 1 minute with zero-downtime releases
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hanoi University of Industry",
        description: <>Information technology</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "ReactJS Ecosystem",
        description: (
          <>
            Expert in building large-scale applications with React, Redux Toolkit, and React Router.
            Specialized in performance optimization and component architecture.
          </>
        ),
        tags: [
          { name: "ReactJS", icon: "react" },
          { name: "Redux", icon: "redux" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Microfrontend Architecture",
        description: (
          <>
            Experienced in designing and implementing microfrontend systems with independent module
            deployment. Re-architected enterprise platforms reducing code duplication by 30%.
          </>
        ),
        tags: [
          { name: "Microfrontend", icon: "grid" },
          { name: "Module Federation", icon: "puzzle" },
        ],
        images: [],
      },
      {
        title: "Monorepo & Build Tools",
        description: (
          <>
            Proficient in managing large codebases with Turborepo and Nx. Migrated from Webpack to
            RSBuild, improving build times by 25%.
          </>
        ),
        tags: [
          { name: "Turborepo", icon: "turborepo" },
          { name: "RSBuild", icon: "rsbuild" },
          { name: "Vite", icon: "vite" },
          { name: "Webpack", icon: "webpack" },
        ],
        images: [],
      },
      {
        title: "Performance Optimization",
        description: (
          <>
            Achieved 97% bundle size reduction (15MB → 500KB) through code splitting, lazy loading,
            and tree-shaking. Reduced load time by 70%+.
          </>
        ),
        tags: [
          { name: "Code Splitting", icon: "zap" },
          { name: "Lazy Loading", icon: "download" },
          { name: "Tree Shaking", icon: "scissors" },
        ],
        images: [],
      },
      {
        title: "UI Libraries & Styling",
        description: (
          <>
            Skilled in building responsive, accessible UIs with Ant Design and Tailwind CSS. Created
            15+ reusable components used across multiple projects.
          </>
        ),
        tags: [
          { name: "Ant Design", icon: "antd" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "CSS3", icon: "css" },
        ],
        images: [],
      },
      {
        title: "DevOps & Deployment",
        description: (
          <>
            Experienced with Docker, Jenkins CI/CD pipelines, and deployment to RedHat Linux
            servers. Reduced deployment time from 15 minutes to under 1 minute.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "RedHat Linux", icon: "redhat" },
          { name: "Nginx", icon: "nginx" },
        ],
        images: [],
      },
      {
        title: "API Integration & i18n",
        description: (
          <>
            Proficient in integrating RESTful APIs and implementing multi-language support (i18n)
            for international applications.
          </>
        ),
        tags: [
          { name: "REST API", icon: "api" },
          { name: "i18n", icon: "globe" },
          { name: "Axios", icon: "axios" },
        ],
        images: [],
      },
      {
        title: "Version Control & Workflow",
        description: (
          <>
            Strong Git expertise with Gitflow workflow. Enforced coding standards through code
            reviews, improving team code quality by 30%+.
          </>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "Gitflow", icon: "git-branch" },
          { name: "Code Review", icon: "code" },
        ],
        images: [],
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards & Certifications",
    items: [
      {
        title: "SFIN Warrior of the Year 2024",
        year: "2024",
        description: (
          <>
            Awarded for outstanding contributions to the development and performance optimization of
            the SOFIN Business Platform
          </>
        ),
        organization: "SFIN",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
