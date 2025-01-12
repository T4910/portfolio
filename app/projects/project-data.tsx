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
    description:
      "Literally just a fun little project when I started web dev",
    url: "https://trading-up.vercel.app/",
  },
  {
    title: "Landmark University Evangelism website",
    year: 2023,
    description:
      "A showcase website for Landmark Univeristy Evangelism Unit",
    url: "https://lueg.vercel.app/",
  },
  {
    title: "GHM website",
    year: 2025,
    description:
      "A website for showcasing GHM & contain critical software for managing GHM activities",
    url: "https://ghm.lmu.edu.ng",
  },
];
