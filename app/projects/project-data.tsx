export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "FoodDelivery",
    year: 2024,
    description:
      "A full-stack food delivery application built with Next.js, Tailwind CSS, and Prisma for database integration.",
    url: "https://food-delivery-rust-one.vercel.app/",
  },
  {
    title: "NextAuth Authentication with Nextjs",
    year: 2024,
    description:
      "A demo project showcasing authentication and authorization in Next.js using NextAuth.",
    url: "https://nextjs-auth-fawn.vercel.app/",
  },
  {
    title: "Tubelearn",
    year: 2022,
    description:
      "An e-learning platform developed during a hackathon. Initially contributed to the backend, later migrated the codebase to Next.js.",
    url: "https://tubelearn.vercel.app/",
  },
  {
    title: "TradeUp",
    year: 2022,
    description: "A fun project created at the start of my web development journey.",
    url: "https://trading-up.vercel.app/",
  },
  {
    title: "Landmark University Evangelism website",
    year: 2023,
    description: "A showcase website for the Landmark University Evangelism Unit.",
    url: "https://lueg.vercel.app/",
  },
  {
    title: "GHM website",
    year: 2025,
    description:
      "A website for GHM, featuring critical software for managing organizational activities. Currently under development.",
    url: "https://ghm-ashen.vercel.app/",
  },
  {
    title: "Oxygen loaning platform",
    year: 2025,
    description:
      "A peer-to-peer loan platform for students, built with Angular as part of a job interview challenge.",
    url: "https://ng-oxygen.vercel.app/",
  },
  {
    title: "Walls & Gates website",
    year: 2025,
    description:
      "A complete website revamp for Walls & Gates Limited during my internship.",
    url: "https://wandggroup.com/",
  },
  {
    title: "Realyze Real Estate Platform",
    year: 2025,
    description:
      "A real estate platform with an AI agent to assist users in finding homes. Built for the DevTo Brightdata Hackathon using TanStack Router, TanStack Query, and Django Rest Framework.",
    url: "https://realyze.floo.com.ng/",
  },
  {
    title: "Task Management Platform",
    year: 2025,
    description:
      "A platform for managing tasks and projects, built with Next.js (frontend) and Hono.js (backend on Cloudflare Workers) for a job interview.",
    url: "https://social-inbox-frontend.vercel.app/",
  },
];
