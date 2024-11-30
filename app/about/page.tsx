"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, Users, Award, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              About Acme Real Estate
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-12">
              We're more than just a real estate company. We're your partners in
              finding the perfect home or investment property.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Users className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our experienced team of real estate professionals is
                    dedicated to providing exceptional service to our clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Award className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Our Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    With years of experience in the local market, we have the
                    knowledge and skills to help you achieve your real estate
                    goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Target className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We strive to exceed our clients' expectations by providing
                    personalized service and expert guidance throughout the real
                    estate process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Story
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p className="text-gray-500 md:text-xl/relaxed mb-4">
                  Founded in 1995, Acme Real Estate has been serving our
                  community for over 25 years. What started as a small family
                  business has grown into one of the most trusted names in real
                  estate in our area.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed mb-4">
                  Our success is built on a foundation of integrity,
                  professionalism, and a deep understanding of the local real
                  estate market. We've helped thousands of families find their
                  dream homes and assisted countless investors in building their
                  real estate portfolios.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Today, we continue to evolve and adapt to the changing real
                  estate landscape, always keeping our clients' best interests
                  at heart. Whether you're a first-time homebuyer or a seasoned
                  investor, we're here to guide you every step of the way.
                </p>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="\images\out history houses.webp"
                  alt="Acme Real Estate office"
                  className="absolute inset-0 object-contain w-full h-full rounded-lg  "
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Values
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We believe in honesty and transparency in all our dealings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We strive for excellence in every aspect of our service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client-Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our clients' needs and goals are at the center of everything
                    we do.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We are committed to giving back and supporting our local
                    community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 Acme Real Estate. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
