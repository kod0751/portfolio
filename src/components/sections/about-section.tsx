"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <div className="size-32 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border">
                <span className="text-4xl font-bold text-primary">KD</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">
                  <span className="text-primary">박덕인</span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Badge variant="secondary" className="text-sm">
                    Frontend Developer
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    TypeScript
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                사용자 경험을 최우선으로 생각하는 신입 프론트엔드 개발자입니다.
                깔끔하고 직관적인 인터페이스를 만드는 것에 열정을 가지고 있으며,
                새로운 기술을 배우고 적용하는 것을 즐깁니다.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="size-4 mr-2" />
                    이력서 다운로드
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="size-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:hello@example.com" aria-label="Email">
                    <Mail className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-3">About Me</h3>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              React와 Next.js를 주력으로 사용하며, TypeScript를 통한 타입 안정성
              있는 코드 작성을 선호합니다. 웹 접근성과 성능 최적화에도 관심이
              많습니다.
            </p>
            <p>
              팀 협업을 중시하며, 코드 리뷰와 문서화를 통해 지식을 공유하는 것을
              좋아합니다. 사용자 피드백을 반영한 지속적인 개선을 추구합니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
