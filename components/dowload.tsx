'use client';
import downloadResume from "@/lib/resume";

export default function Resume() {
    return (
        <a onClick={downloadResume} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative cursor-pointer">Resume</a>
    );
}