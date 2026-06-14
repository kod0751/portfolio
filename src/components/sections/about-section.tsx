"use client";

import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="shrink-0 w-full md:w-48 bg-zinc-950 text-zinc-400 rounded-xl p-4 font-mono text-xs border border-zinc-800 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-2 mb-2">
                <div className="size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2.5 rounded-full bg-yellow-500/80" />
                <div className="size-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-zinc-500 ml-1">
                  developer.json
                </span>
              </div>
              <div className="space-y-1 flex-1 flex flex-col justify-center">
                <p>
                  <span className="text-pink-500">const</span> dev = &#123;
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-emerald-400">&quot;박덕인&quot;</span>,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-emerald-400">&quot;Web&quot;</span>,
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">
                  <span className="text-primary">박덕인</span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Badge variant="secondary" className="text-sm">
                    Web Developer
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Next.js
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                사용자 경험을 최우선으로 생각하는 신입 프론트엔드 개발자입니다.
                깔끔하고 직관적인 인터페이스를 만드는 것에 열정을 가지고 있으며,
                새로운 기술을 배우고 적용하는 것을 즐깁니다.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
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
