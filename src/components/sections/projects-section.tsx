"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, Trophy } from "lucide-react";
import { FaGithub, FaFigma, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

interface ProjectsSectionProps {
  onProjectClick?: (projectSlug: string) => void;
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const handleProjectClick = (projectSlug: string) => {
    if (onProjectClick) {
      onProjectClick(projectSlug);
    }
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card
          key={project.slug}
          className="group hover:shadow-md transition-all duration-300 hover:border-primary/50 cursor-pointer"
          onClick={() => handleProjectClick(project.slug)}
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.awards && project.awards.length > 0 && (
                    <Badge className="gap-1 bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20">
                      <Trophy className="size-3" />
                      {project.awards[0].rank}
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-2 line-clamp-2">
                  {project.description}
                </CardDescription>
              </div>
              <div className="text-xs text-muted-foreground shrink-0 text-right">
                <p>{project.duration.split(" ")[0]}</p>
                <p>{project.duration.split(" ")[2]}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 5}
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="size-4 mr-1.5" />
                      Code
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
                      <ExternalLink className="size-4 mr-1.5" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.figma && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    asChild
                  >
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFigma className="size-4" />
                    </a>
                  </Button>
                )}
                {project.youtube && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    asChild
                  >
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground group-hover:text-primary"
              >
                자세히 보기
                <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
