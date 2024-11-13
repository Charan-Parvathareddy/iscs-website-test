import React from 'react'
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/magicui/project-card";

const BLUR_FADE_DELAY = 0.04;

function Projects() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-3.png')"
    }}>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Our Products
                  </span>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have worked on a variety of projects, from simple
                  integrations to complex Machine Learning applications. Here are a few of our
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects