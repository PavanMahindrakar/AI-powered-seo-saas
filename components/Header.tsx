"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import {
  LogIn,
  Loader2,
  BarChart3,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
} from "convex/react";

import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const pathname = usePathname();

  const isTransparentHeader =
    pathname.startsWith("/pricing") ||
    pathname.startsWith("/features");

  return (
    <header
      className={`sticky top-0 w-full border-b border-border/50 supports-[backdrop-filter]:backdrop-blur-xl ${
        isTransparentHeader
          ? "bg-background/70 z-0"
          : "bg-background/80 z-50"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side */}
        <div className="flex items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-sm font-bold text-white shadow-lg">
              B
            </span>

            <span className="text-sm font-semibold tracking-tight">
              BrightSEO AI
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 mr-2">

          <Link href="/features">
            <Button
              size="sm"
              variant="outline"
              className={`border-border/50 bg-background/60 backdrop-blur hover:bg-muted ${
                pathname.startsWith("/features")
                  ? "bg-muted"
                  : ""
              }`}
            >
              <Sparkles className="size-4" />

              <span className="ml-2">
                Features
              </span>
            </Button>
          </Link>

          <Link href="/pricing">
            <Button
              size="sm"
              variant="outline"
              className={`border-border/50 bg-background/60 backdrop-blur hover:bg-muted ${
                pathname.startsWith("/pricing")
                  ? "bg-muted"
                  : ""
              }`}
            >
              <BadgeDollarSign className="size-4" />

              <span className="ml-2">
                Pricing
              </span>
            </Button>
          </Link>

        </nav>

          {/* Dashboard */}
          <Link href="/dashboard">
            <Button
              size="sm"
              variant="outline"
              className="border-border/50 bg-background/60 backdrop-blur hover:bg-muted"
            >
              <BarChart3 className="size-4" />

              <span className="hidden md:inline ml-2">
                Dashboard
              </span>
            </Button>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Loading State */}
          <AuthLoading>
            <Button
              size="sm"
              variant="outline"
              className="border-border/50 bg-background/60 backdrop-blur"
            >
              <Loader2 className="size-4 animate-spin text-muted-foreground" />

              <span className="sr-only">
                Loading...
              </span>
            </Button>
          </AuthLoading>

          {/* Unauthenticated */}
          <Unauthenticated>
            <SignInButton mode="modal">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
              >
                <LogIn className="size-4" />

                <span className="hidden md:inline ml-2">
                  Sign in
                </span>
              </Button>
            </SignInButton>
          </Unauthenticated>

          {/* Authenticated */}
          <Authenticated>
            <div className="ml-1">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "size-8 ring-2 ring-primary/10",
                  },
                }}
              />
            </div>
          </Authenticated>

        </div>
      </div>
    </header>
  );
}

export default Header;