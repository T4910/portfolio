"use client";
import { metaData, socialLinks } from "app/config";
import { Download } from "lucide-react";
import { useRouter } from 'next/navigation';
import React from "react";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRss,
  FaXTwitter,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {/* <SocialLink href={socialLinks.twitter} icon={FaXTwitter} /> */}
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      {/* <SocialLink href={socialLinks.instagram} icon={FaInstagram} /> */}
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
      <a href={`/resume`} download>
        <FaDownload />
      </a>

    </div>
  );
}

export default function Footer() {
  return (
    <small className="flex justify-between flex-wrap-reverse gap-x-4 gap-y-2 lg:mt-16 mt-12 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div className="inline-block">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </div>
      <SocialLinks />
    </small>
  );
}
