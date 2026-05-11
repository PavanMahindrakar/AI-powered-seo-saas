"use client";

import { PricingTable } from "@clerk/nextjs";
import { Star } from "lucide-react";

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 dark:from-primary/5 dark:via-purple-500/5 dark:to-pink-500/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

          <div className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/50 text-sm font-medium text-muted-foreground backdrop-blur mb-6">
              <Star className="size-4 text-yellow-500" />
              AI-Powered SEO Intelligence Plans
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Scale Your SEO
              </span>

              <span className="block mt-2">
                Workflow with AI
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Choose the right plan for competitor intelligence,
              AI-powered SEO analysis, keyword insights, and scalable
              reporting workflows.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                AI SEO Intelligence
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Competitor Analysis
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Real-Time SERP Insights
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Pricing Intro */}
          <div className="text-center mb-10">

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Flexible Pricing for Modern Growth Teams
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with essential SEO intelligence tools and upgrade
              for advanced AI-powered competitor analysis and reporting workflows.
            </p>

          </div>

          {/* Pricing Table */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl" />

            <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-3xl p-4 sm:p-8 shadow-2xl">

              <PricingTable newSubscriptionRedirectUrl="/dashboard" />

            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-24">

            <div className="max-w-5xl mx-auto">

              <div className="text-center mb-12">

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h2>

                <p className="mt-4 text-muted-foreground">
                  Everything you need to know about BrightSEO AI.
                </p>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border bg-card/60 backdrop-blur p-6">
                  <h3 className="font-semibold mb-3">
                    What does BrightSEO AI analyze?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Competitors, keywords, SERP visibility, backlink opportunities,
                    and AI-powered SEO recommendations.
                  </p>
                </div>

                <div className="rounded-2xl border bg-card/60 backdrop-blur p-6">
                  <h3 className="font-semibold mb-3">
                    Can I export SEO reports?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Yes. Export and share AI-generated SEO intelligence reports
                    with your team or clients.
                  </p>
                </div>

                <div className="rounded-2xl border bg-card/60 backdrop-blur p-6">
                  <h3 className="font-semibold mb-3">
                    Does the platform use real-time data?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Yes. BrightSEO AI uses live search intelligence and
                    AI-driven analysis workflows.
                  </p>
                </div>

                <div className="rounded-2xl border bg-card/60 backdrop-blur p-6">
                  <h3 className="font-semibold mb-3">
                    Is there a free plan?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Yes. Start with essential SEO analysis tools and upgrade
                    as your workflow scales.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-24">

            <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 dark:from-primary/5 dark:via-purple-500/5 dark:to-pink-500/5 p-8 sm:p-12 lg:p-16 text-center">

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Start Building Smarter SEO Strategies
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Generate AI-powered SEO intelligence reports and uncover
                actionable growth opportunities in minutes.
              </p>

            </div>

          </section>

        </div>
      </section>
    </div>
  );
}

export default PricingPage;