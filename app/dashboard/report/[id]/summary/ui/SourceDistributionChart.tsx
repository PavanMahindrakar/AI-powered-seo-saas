"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";
import { Globe } from "lucide-react";
import { SeoReport } from "@/lib/seo-schema";

interface SourceDistributionChartProps {
  seoReport: SeoReport;
}

export function SourceDistributionChart({
  seoReport,
}: SourceDistributionChartProps) {
  // Processes the source type data from the SEO report into a format suitable for the pie chart
  const sourceTypeEntries = (() => {
    const st = seoReport?.inventory?.source_types as
      | Record<string, Array<unknown>>
      | undefined;

    if (!st) {
      return [] as Array<{
        name: string;
        value: number;
        color: string;
      }>;
    }

    const palette = [
      "#3b82f6",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#8b5cf6",
      "#06b6d4",
      "#22c55e",
      "#a855f7",
      "#f97316",
    ];

    return Object.entries(st)
      .filter(([, arr]) => Array.isArray(arr) && arr.length > 0)
      .map(([name, arr], idx) => ({
        name,
        value: (arr as Array<unknown>).length,
        color: palette[idx % palette.length],
      }));
  })();

  if (sourceTypeEntries.length === 0) {
    return null;
  }

  const totalSources = sourceTypeEntries.reduce(
    (sum, e) => sum + e.value,
    0
  );

  return (
    <Card className="xl:col-span-2 border bg-gradient-to-br from-card to-card/95 overflow-hidden">
      <CardHeader className="pb-4 sm:pb-6">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10 shrink-0">
            <Globe className="h-5 w-5 text-primary" />
          </div>

          <div className="min-w-0">
            <CardTitle className="text-lg sm:text-xl leading-tight">
              Source Types Distribution
            </CardTitle>

            <CardDescription className="text-sm sm:text-base mt-1">
              Breakdown of data sources by type and volume
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Chart */}
          <ChartContainer
            config={Object.fromEntries(
              sourceTypeEntries.map((e) => [
                e.name,
                {
                  label: e.name,
                  color: e.color,
                },
              ])
            )}
            className="h-[240px] sm:h-[300px] lg:h-[350px] w-full"
          >
            <PieChart>
              <Pie
                data={sourceTypeEntries}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={6}
                strokeWidth={2}
                stroke="hsl(var(--background))"
              >
                {sourceTypeEntries.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>

          {/* Breakdown */}
          <div className="space-y-3 sm:space-y-4">

            <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              Source Breakdown
            </h4>

            {sourceTypeEntries.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-muted/30"
              >
                <div className="flex items-center gap-3 min-w-0">

                  <div
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: entry.color,
                    }}
                  />

                  <span className="font-medium capitalize text-sm sm:text-base truncate">
                    {entry.name.replace(/_/g, " ")}
                  </span>
                </div>

                <div className="text-right shrink-0 ml-3">

                  <div className="font-bold text-base sm:text-lg">
                    {entry.value}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {Math.round(
                      (entry.value / totalSources) * 100
                    )}
                    %
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </CardContent>
    </Card>
  );
}