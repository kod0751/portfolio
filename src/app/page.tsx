"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectDetail } from "@/components/sections/project-detail";
import { getProjectBySlug } from "@/lib/projects-data";

const sectionTitles: Record<string, string> = {
  about: "About Me",
  projects: "Projects",
  skills: "Skills",
  experience: "Experience",
  contact: "Contact",
};

const sectionSubtitles: Record<string, string> = {
  about: "저를 소개합니다",
  projects: "제가 만든 프로젝트들",
  skills: "보유 기술 스택",
  experience: "경력 및 경험",
  contact: "연락처 및 문의",
};

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(
    null,
  );

  const selectedProject = selectedProjectSlug
    ? getProjectBySlug(selectedProjectSlug)
    : null;

  const handleProjectClick = (projectSlug: string) => {
    setSelectedProjectSlug(projectSlug);
  };

  const handleBackToProjects = () => {
    setSelectedProjectSlug(null);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setSelectedProjectSlug(null);
  };

  const getTitle = () => {
    if (selectedProject) {
      return selectedProject.title;
    }
    return sectionTitles[activeSection] || "Portfolio";
  };

  const getSubtitle = () => {
    if (selectedProject) {
      return "프로젝트 상세 정보";
    }
    return sectionSubtitles[activeSection] || "Welcome to my portfolio";
  };

  const renderContent = () => {
    if (selectedProject) {
      return (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      );
    }

    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection onProjectClick={handleProjectClick} />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="ml-72 min-h-[calc(100vh-2rem)]">
        <div className="border border-border bg-background rounded-2xl shadow-lg overflow-hidden min-h-[calc(100vh-2rem)]">
          <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-border bg-background/95 backdrop-blur-sm">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {getTitle()}
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                {getSubtitle()}
              </p>
            </div>
            <ThemeToggle />
          </header>

          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProjectSlug || activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
