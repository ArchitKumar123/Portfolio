"use client";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-[radial-gradient(ellipse_at_50%_45%,#CFFAFE_0%,#EEF2FF_45%,#F8FAFC_100%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(ellipse_at_50%_45%,#312E81_0%,#1E1B4B_40%,#0F172A_100%)]">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Sub Title */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-sm text-slate-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-400/20 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Open to opportunities
          </span>
        </div>

        {/* Title */}
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-indigo-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-cyan-400 dark:to-sky-300">
            Archit Kumar Raul
          </span>
        </h1>

        {/* Type Animation */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-semibold mb-4 sm:mb-8 h-12">
          <TypeAnimation
            sequence={[
              "Aspiring Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Bug Bounty Hunter",
              2000,
              "Building Secure Web Applications",
              2000,
              "React.js & Next.js Developer",
              2000,
              "Problem Solver & Lifelong Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
            className="font-mono"
          />
        </div>

        {/* Description */}
        <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Aspiring Software Engineer skilled in full-stack development with
          React.js, Next.js, and Node.js, passionate about building scalable web
          applications and exploring cybersecurity.
        </p>

        {/* button */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size={"lg"}
            className="group w-full sm:w-fit mx-auto sm:mx-0 h-12 px-7 rounded-xl
        bg-indigo-600 text-white border border-indigo-600 shadow-lg shadow-indigo-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/30 active:scale-[0.98] dark:bg-indigo-500 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-white"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({
                  block: "start",
                });
                window.history.replaceState(null, "", "#projects");
              }}
              className="inline-flex items-center justify-center gap-2"
            >
              <FolderOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              View Projects
            </a>
          </Button>
          <Button
            size="lg"
            className="group w-full sm:w-fit mx-auto sm:mx-0 h-12 px-7 rounded-xl bg-white text-slate-800 border border-slate-300 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-500 hover:shadow-md active:scale-[0.98] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300 dark:hover:border-indigo-400"
          >
            <a
              href="/Archit_Kumar_Raul_CV.pdf"
              download="Archit_Kumar_Raul_CV.pdf"
              className="inline-flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
