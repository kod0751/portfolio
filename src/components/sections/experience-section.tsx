"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "프론트엔드 개발 인턴",
    company: "ABC 테크",
    period: "2024.01 - 2024.06",
    description:
      "React와 TypeScript를 활용한 웹 애플리케이션 개발. 컴포넌트 라이브러리 구축 및 성능 최적화 작업 참여.",
    tags: ["React", "TypeScript", "Storybook"],
  },
  {
    type: "project",
    title: "웹 개발 프로젝트",
    company: "대학교 캡스톤",
    period: "2023.09 - 2023.12",
    description:
      "팀 프로젝트로 헬스케어 플랫폼 개발. 프론트엔드 리드로 참여하여 UI/UX 설계 및 구현 담당.",
    tags: ["Next.js", "Tailwind CSS", "Figma"],
  },
  {
    type: "education",
    title: "부트캠프 수료",
    company: "프론트엔드 스쿨",
    period: "2023.03 - 2023.08",
    description:
      "6개월 집중 교육 과정. JavaScript 기초부터 React, Node.js까지 풀스택 웹 개발 학습.",
    tags: ["JavaScript", "React", "Node.js"],
  },
];

const iconMap = {
  work: Briefcase,
  project: Award,
  education: GraduationCap,
};

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute left-4.75 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.type as keyof typeof iconMap];
            return (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 size-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="shrink-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
