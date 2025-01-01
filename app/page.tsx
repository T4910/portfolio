import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Emmanuel
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
            I'm a software engineer with a passion for anything growth. I'm into Full-stack web development, 
            Mobile/Desktop application development & Cloud/DevOps technologies.
        </p>
        <p>
          I thrive in places where solutions to problems are valued. Also love to work alongside fellow minds. 
          Whether it's working on a complex backend system or optimizing the frontend user experience, I'm 
          always eager to tackle new challenges and solve problems (with computers solution or other means).
        </p>
      </div>
    </section>
  );
}
