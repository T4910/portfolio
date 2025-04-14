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
      "A Nextjs project I made after learning Nextjs, Tailwindcss, and Database integration with Prisma",
    url: "https://food-delivery-rust-one.vercel.app/",
  },
  {
    title: "NextAuth Authentication with Nextjs",
    year: 2024,
    description:
      "A project I used to learn how to use NextAuth for authentication & authorization in Nextjs",
    url: "https://nextjs-auth-fawn.vercel.app/",
  },
  {
    title: "Tubelearn",
    year: 2022,
    description:
      "A hackathon project I worked on with some fellow developers. It's an e-learning platform. I was mostly involved in the backend, but later migrated the entire codebase to Nextjs",
    url: "https://tubelearn.vercel.app/",
  },
  {
    title: "TradeUp",
    year: 2022,
    description: "Literally just a fun little project when I started web dev",
    url: "https://trading-up.vercel.app/",
  },
  {
    title: "Landmark University Evangelism website",
    year: 2023,
    description: "A showcase website for Landmark Univeristy Evangelism Unit",
    url: "https://lueg.vercel.app/",
  },
  {
    title: "GHM website",
    year: 2025,
    description:
      "A website for showcasing GHM & contain critical software for managing GHM activities (under development)",
    url: "https://ghm-ashen.vercel.app/",
  },
  {
    title: "Oxygen loaning platform",
    year: 2025,
    description:
      "A loaning platform for students to borrow money from their peers and pay back with interest. This was a project that was given to me for a job interview. I had to build this project using Angular, a framework I had never used before. That was a fun experience.",
    url: "https://ng-oxygen.vercel.app/",
  },
  {
    title: "Task Managment Platform",
    year: 2025,
    description:
      "A task management platform for managing tasks and projects. This was a project that was given to me for a job interview. I used Nextjs for the frontend, deployed on vercel and and Hono.js for the backend deployed on Cloudflare Workers.",
    url: "https://social-inbox-frontend.vercel.app/",
  },
];
