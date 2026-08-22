export interface TProject {
  title: string;
  year: number;
  description: string;
  url: string;
  priority?: number; // Optional field for priority
}

export const projects: TProject[] = [
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
    title: "GHM Unit Management applicaation",
    year: 2026,
    description:
      "A website for GHM, featuring critical software for managing organizational activities.",
    url: "https://ghm.lmu.edu.ng/",
    priority: 6, // High priority project
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
    priority: 5, // High priority project

  },
  {
    title: "The Content Factory website",
    year: 2025,
    description:
      "Content Factory is an on-demand creative platform providing affordable, agency-quality content production with predictable turnaround for startups and SMEs.",
    url: "https://tcf.wandggroup.com/",
    priority: 4, // High priority project

  },
  {
    title: "Realyze Real Estate Platform",
    year: 2025,
    description:
      "A real estate platform with an AI agent to assist users in finding homes. Built for the DevTo Brightdata Hackathon using TanStack Router, TanStack Query, and Django Rest Framework.",
    url: "https://realyze.floo.com.ng/",
    priority: 7, // Medium priority project
  },
  {
    title: "Task Management Platform",
    year: 2025,
    description:
      "A platform for managing tasks and projects, built with Next.js (frontend) and Hono.js (backend on Cloudflare Workers) for a job interview.",
    url: "https://social-inbox-frontend.vercel.app/",
    priority: 8, // Low priority project
  },
  {
    title: "ZeroCancer",
    year: 2025,
    description:
      "A healthcare platform designed to support cancer awareness, screening, donation management through a centralized digital system.",
    url: "https://zerocancer.ttaiwo4910.workers.dev/",
    priority: 3, 
  },
  {
    title: "GE-MART",
    year: 2026,
    description:
      "Built an escrow-based e-commerce marketplace for peer-to-peer tech sales, implementing secure transaction workflows that hold buyer payments until product delivery and verification.",
    url: "https://ge-mart.com/",
    priority: 1, 
  },
  {
    title: "Popin",
    year: 2026,
    description: "PopIn is a unified marketplace for discovering, booking, and managing events, short-term stays, and vehicle rentals, connecting users with verified service providers through a secure, integrated booking and payment platform.",
    url: "#",
    priority: 2, // Low priority project
  },
];
