"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "HTML5", icon: "/icons/html.svg", color: "#E34F26" },
      { name: "CSS3", icon: "/icons/css.svg", color: "#1572B6" },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      {
        name: "styled-components",
        icon: "/icons/styled.svg",
        color: "#DB7093",
      },
      { name: "Sass", icon: "/icons/sass.svg", color: "#CC6699" },
      { name: "Framer Motion", icon: "/icons/framer.svg", color: "#0055FF" },
    ],
  },
  {
    title: "State & Data",
    icon: Database,
    skills: [
      { name: "Zustand", icon: "/icons/zustand.svg", color: "#764ABC" },
      { name: "Redux", icon: "/icons/redux.svg", color: "#764ABC" },
      { name: "React Query", icon: "/icons/react-query.svg", color: "#FF4154" },
      { name: "GraphQL", icon: "/icons/graphql.svg", color: "#E10098" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
      { name: "Vercel", icon: "/icons/vercel.svg", color: "#000000" },
      { name: "VS Code", icon: "/icons/vscode.svg", color: "#007ACC" },
    ],
  },
];

// 기술 아이콘을 텍스트 기반으로 표시
const SkillBadge = ({ name, color }: { name: string; color: string }) => {
  // 기술명 약어 생성
  const getInitials = (name: string) => {
    if (name === "React") return "Re";
    if (name === "Next.js") return "Nx";
    if (name === "TypeScript") return "TS";
    if (name === "JavaScript") return "JS";
    if (name === "HTML5") return "H5";
    if (name === "CSS3") return "C3";
    if (name === "Tailwind CSS") return "Tw";
    if (name === "styled-components") return "SC";
    if (name === "Sass") return "Sa";
    if (name === "Framer Motion") return "FM";
    if (name === "Zustand") return "Zu";
    if (name === "Redux") return "Rx";
    if (name === "React Query") return "RQ";
    if (name === "GraphQL") return "GQ";
    if (name === "Git") return "Gt";
    if (name === "Figma") return "Fg";
    if (name === "Vercel") return "Vc";
    if (name === "VS Code") return "VS";
    return name.slice(0, 2);
  };

  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="size-14 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110 shadow-md"
        style={{ backgroundColor: color === "#000000" ? "#1a1a1a" : color }}
      >
        {getInitials(name)}
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
