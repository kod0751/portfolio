"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "이메일",
    value: "kod07510@google.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "전화번호",
    value: "010-8564-9561",
  },
  { icon: MapPin, label: "위치", value: "광주, 대한민국", href: null },
];

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com" },
];

export function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-5 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">소셜 링크</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="size-5 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
