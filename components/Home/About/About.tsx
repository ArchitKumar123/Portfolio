import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />

      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div data-aos="fade-right" data-aos-delay="0" data-aos-anchor-placement= "top-center" className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/Archit_Photo.jpg"}
              alt="Archit Kumar Raul"
              width={700}
              height={700}
              priority
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div data-aos="fade-left" data-aos-delay="150" data-aos-anchor-placement= "top-center" className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Full-Stack Developer & Problem Solver
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a Computer Science and Engineering graduate passionate
            about full-stack development and software engineering. With hands-on
            experience in React.js, Next.js, Node.js, and Express.js, I build
            responsive web applications that combine functionality,
            usability,and modern design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From developing full-stack projects like Vehiql and Blog-App to
            leading six student developers at CodeNexus, I&apos;ve strengthened
            my technical and collaborative skills. As a Smart India Hackathon
            2025 finalist, I&apos;m driven to solve real-world challenges,
            explore new technologies, and contribute to impactful software
            solutions.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement= "top-center"
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                    {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
