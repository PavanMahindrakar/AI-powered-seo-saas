"use client";

import Link from "next/link";
import {
  Search,
  Sparkles,
  BarChart3,
  MessageSquare,
  Globe,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function FeaturesPage() {
  const features = [
    {
      icon: Search,
      title: "Competitor Analysis",
      description:
        "Discover competitor SEO strategies, keyword gaps, and ranking opportunities using AI-powered search analysis.",
    },
    {
      icon: Globe,
      title: "Backlink Intelligence",
      description:
        "Analyze backlink opportunities, referring domains, and authority signals across the web.",
    },
    {
      icon: BarChart3,
      title: "Keyword Intelligence",
      description:
        "Identify high-value keywords, ranking opportunities, and search intent insights.",
    },
    {
      icon: MessageSquare,
      title: "AI SEO Assistant",
      description:
        "Chat with your SEO reports and receive actionable AI-generated recommendations.",
    },
    {
      icon: Sparkles,
      title: "SERP Intelligence",
      description:
        "Monitor search engine visibility and analyze real-time SERP data at scale.",
    },
    {
      icon: FileText,
      title: "Exportable Reports",
      description:
        "Export SEO intelligence reports and share insights with your team or clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 dark:from-primary/5 dark:via-purple-500/5 dark:to-pink-500/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur mb-6">
              AI-Powered SEO Intelligence Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Smarter SEO Research
              </span>

              <span className="block mt-2">
                Powered by AI
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Automated competitor analysis, keyword intelligence,
              backlink insights, and AI-powered SEO recommendations
              in one scalable platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base"
                >
                  Start SEO Analysis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base"
                >
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Competitor Intelligence
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                AI SEO Insights
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Real-Time SERP Analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything You Need for SEO Intelligence
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for founders, marketers, agencies, and growth teams
              looking to automate SEO research workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <CardHeader>

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <CardTitle className="text-xl">
                      {feature.title}
                    </CardTitle>

                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>

                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 sm:py-24 border-y bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How BrightSEO AI Works
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Simple workflow. Powerful SEO intelligence.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">

            {/* Step 1 */}
            <Card className="bg-card/80 backdrop-blur">
              <CardContent className="pt-8">

                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    1
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Enter a Website
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Analyze a business, startup, SaaS product,
                  or domain instantly.
                </p>

              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-card/80 backdrop-blur">
              <CardContent className="pt-8">

                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    2
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  AI Collects Search Intelligence
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  AI agents gather SERP data, competitor insights,
                  keywords, and backlink signals.
                </p>

              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-card/80 backdrop-blur">
              <CardContent className="pt-8">

                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-6">
                  <span className="font-bold text-pink-600 dark:text-pink-400">
                    3
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Receive Actionable Reports
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Get AI-powered recommendations and SEO intelligence
                  reports in seconds.
                </p>

              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 dark:from-primary/5 dark:via-purple-500/5 dark:to-pink-500/5 p-8 sm:p-12 lg:p-16 text-center">

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Start Building Smarter SEO Strategies
            </h2>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate AI-powered SEO intelligence reports and uncover
              actionable growth opportunities in minutes.
            </p>

            <div className="mt-10">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base"
                >
                  Analyze Website
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}