"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "부트캠프 수료",
    company: "프론트엔드 웹 데브코스",
    period: "2024.07 - 2024.12",
    description:
      "HTML5/CSS3 웹 표준 및 JavaScript(ES6+) 비동기 프로그래밍 기초 확립, React 프레임워크 기반의 컴포넌트 중심 설계 및 상태 관리 라이브러리 활용",
    tags: ["React", "TypeScript", "Javascript", "HTML", "CSS", "Git", "OPENAI"],
  },
  {
    type: "education",
    title: "부트캠프 수료",
    company: "휴먼교육센터",
    period: "2025.11 - 2026.02",
    description:
      " Python 기반의 데이터 전처리 및 Numpy, Pandas를 활용한 데이터 분석/시각화 기초 확립, TensorFlow 기반의 머신러닝/딥러닝 모델 개발 및 데이터 플랫폼 파이프라인 활용",
    tags: [
      "Python",
      "PostgreSQL",
      "MySQL",
      "Tableau",
      "JAVA",
      "데이터분석",
      "AI",
    ],
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
                    <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm mb-4">
                      {exp.description.split(",").map((sentence, sIndex) => {
                        const trimmedSentence = sentence.trim();
                        if (!trimmedSentence) return null;

                        return (
                          <li key={sIndex} className="pl-1 -indent-5 ml-5">
                            {trimmedSentence}
                          </li>
                        );
                      })}
                    </ul>
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
