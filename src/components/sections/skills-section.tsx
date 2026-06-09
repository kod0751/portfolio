"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Database, Wrench } from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiStyledcomponents,
  SiSass,
  SiFramer,
  SiRedux,
  SiReactquery,
  SiGit,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { RiBearSmileLine } from "react-icons/ri";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      {
        name: "styled-components",
        icon: SiStyledcomponents,
        color: "#DB7093",
      },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "State & Data",
    icon: Database,
    skills: [
      { name: "Zustand", icon: RiBearSmileLine, color: "#764ABC" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" },
    ],
  },
];

interface SkillBadgeProps {
  name: string;
  color: string;
  icon: React.ElementType; // 아이콘 컴포넌트 타입을 명시
}

const SkillBadge = ({ name, color, icon: Icon }: SkillBadgeProps) => {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="size-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md p-3"
        style={{
          backgroundColor: color === "#000000" ? "#1a1a1a" : `${color}15`,
        }}
      >
        <Icon
          className="size-full object-contain"
          style={{ color: color === "#000000" ? "#ffffff" : color }}
        />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card
              key={category.title}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-start">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      color={skill.color}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
