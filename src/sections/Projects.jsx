import { useEffect, useState } from "react";
import { motion } from "motion/react";

import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

import {
  projects as localProjects,
} from "../data/portfolio";

import {
  getGithubProjects,
} from "../services/github";

function Projects() {
  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /*
   * =========================================================
   * LOAD PROJECTS FROM GITHUB
   * =========================================================
   */

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      try {
        const githubProjects =
          await getGithubProjects();

        if (!active) {
          return;
        }

        /*
         * Keep curated information from portfolio.js
         * when a GitHub repository matches one of
         * our manually configured projects.
         */
        const mergedProjects =
          githubProjects.map(
            (githubProject) => {
              const localProject =
                localProjects.find(
                  (project) =>
                    project.githubUrl &&
                    project.githubUrl !==
                      "#" &&
                    project.githubUrl
                      .toLowerCase()
                      .replace(/\/$/, "") ===
                      githubProject.githubUrl
                        .toLowerCase()
                        .replace(
                          /\/$/,
                          "",
                        ),
                );

              if (!localProject) {
                return githubProject;
              }

              return {
                ...githubProject,

                title:
                  localProject.title ||
                  githubProject.title,

                description:
                  localProject.description ||
                  githubProject.description,

                technologies:
                  localProject
                    .technologies
                    ?.length > 0
                    ? localProject.technologies
                    : githubProject.technologies,

                demoUrl:
                  localProject.demoUrl &&
                  localProject.demoUrl !==
                    "#"
                    ? localProject.demoUrl
                    : githubProject.demoUrl,

                githubUrl:
                  githubProject.githubUrl,
              };
            },
          );

        setProjects(
          mergedProjects,
        );
      } catch (error) {
        console.error(
          "Could not load GitHub projects:",
          error,
        );

        /*
         * If GitHub is temporarily unavailable,
         * show the local project information
         * instead of leaving the section empty.
         */
        if (active) {
          setProjects(
            localProjects,
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadProjects();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#131226] py-24 sm:py-28 lg:py-32"
    >
      {/* SECTION DIVIDER */}
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--lavender)] shadow-[0_0_24px_rgba(185,165,255,.4)]" />

      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -left-48 top-[18%] h-[480px] w-[480px] rounded-full bg-[#2a2555] blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-[15%] h-[520px] w-[520px] rounded-full bg-[#3b1f3f] blur-[150px]" />

      <Container className="relative max-w-[1580px]">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--lavender)] shadow-[0_0_14px_rgba(185,165,255,.7)]" />

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">
                Featured Projects
              </p>
            </div>

            <p className="mt-5 font-mono text-sm font-bold text-[var(--pink)]">
              {
                "<selected_work />"
              }
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.4rem]">
              Selected work and
              <span className="block">
                things I&apos;ve{" "}
                <span className="text-[var(--cream)]">
                  built.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#cec7d8] sm:text-lg">
              Projects where
              I&apos;ve worked across
              frontend, backend,
              databases and interface
              design — turning ideas
              into complete web
              experiences.
            </p>
          </div>
        </motion.div>

        {/* PROJECT COUNT */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-16 flex items-center gap-5"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Selected
          </span>

          <span className="h-px flex-1 bg-white/15" />

          <span className="font-mono text-xs font-bold text-[var(--lavender)]">
            {loading
              ? "--"
              : String(
                  projects.length,
                ).padStart(
                  2,
                  "0",
                )}{" "}
            projects
          </span>
        </motion.div>

        {/* PROJECTS */}
        {loading ? (
          <div className="flex min-h-[260px] items-center justify-center">
            <p className="font-mono text-sm font-bold text-white/35">
              Loading projects
              from GitHub...
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {projects.map(
              (
                project,
                index,
              ) => (
                <ProjectCard
                  key={
                    project.id ??
                    project.title
                  }
                  index={index}
                  title={
                    project.title
                  }
                  description={
                    project.description
                  }
                  technologies={
                    project.technologies
                  }
                  demoUrl={
                    project.demoUrl
                  }
                  githubUrl={
                    project.githubUrl
                  }
                />
              ),
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

export default Projects;