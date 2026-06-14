"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Trophy,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaFigma, FaYoutube } from "react-icons/fa";
import { Project } from "@/lib/projects-data";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const hasLinks =
    project.github || project.demo || project.figma || project.youtube;

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="gap-2 hover:bg-muted"
      >
        <ArrowLeft className="size-4" />
        프로젝트 목록으로
      </Button>

      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground">
                {project.title}
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">
                {project.description}
              </p>
            </div>
            {project.awards && project.awards.length > 0 && (
              <Badge className="shrink-0 gap-1.5 bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20">
                <Trophy className="size-3.5" />
                {project.awards[0].rank}
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {hasLinks && (
            <div className="flex flex-wrap gap-2">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.figma && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFigma className="size-4 mr-2" />
                    Figma
                  </a>
                </Button>
              )}
              {project.youtube && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="size-4 mr-2" />
                    YouTube
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* 수상 내역 */}
        {project.awards && project.awards.length > 0 && (
          <Card className="border-amber-500/20 bg-linear-to-br from-amber-500/5 to-transparent">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="size-5 text-amber-500" />
                수상 내역
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.awards.map((award, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      {award.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className="text-amber-600 border-amber-500/30"
                    >
                      {award.rank}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {award.organization} · {award.date}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {award.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* 기간 & 팀 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="size-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">기간</p>
                  <p className="font-medium text-foreground">
                    {project.duration}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-sm">
                <Users className="size-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">팀 구성</p>
                  <p className="font-medium text-foreground">{project.team}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 프로젝트 소개 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">프로젝트 소개</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </CardContent>
        </Card>

        {/* 아키텍처 이미지 */}
        {project.architectureImage && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">아키텍처</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.architectureImage}
                  alt={`${project.title} 아키텍처`}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* 주요 성과 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CheckCircle2 className="size-5 text-emerald-500" />
              주요 성과
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 gap-3">
              {project.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10"
                >
                  <span className="flex items-center justify-center size-6 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* 기술적 도전 과제 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb className="size-5 text-amber-500" />
              기술적 도전 과제
            </CardTitle>
            <CardDescription>
              프로젝트를 진행하며 해결한 주요 기술적 과제들입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-foreground flex items-start gap-2">
                    <span className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {challenge.title}
                  </h4>
                  <div className="ml-8 space-y-2">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          문제:{" "}
                        </span>
                        {challenge.description}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary">해결: </span>
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
