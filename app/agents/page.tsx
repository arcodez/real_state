"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
} from "lucide-react";
import Link from "next/link";

export default function AgentsPage() {
  const agents = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Senior Real Estate Agent",
      phone: "(123) 456-7890",
      email: "jane.doe@acmerealestate.com",
      bio: "Jane has over 15 years of experience in the real estate market. She specializes in luxury properties and has a keen eye for interior design.",
      image: "/placeholder.svg?height=100&width=100",
      socialMedia: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "John Smith",
      title: "Commercial Real Estate Specialist",
      phone: "(098) 765-4321",
      email: "john.smith@acmerealestate.com",
      bio: "John has been helping businesses find their perfect commercial spaces for over a decade. His knowledge of the local market is unparalleled.",
      image: "/placeholder.svg?height=100&width=100",
      socialMedia: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Emily Brown",
      title: "First-Time Homebuyer Expert",
      phone: "(555) 123-4567",
      email: "emily.brown@acmerealestate.com",
      bio: "Emily is passionate about helping first-time homebuyers navigate the exciting journey of purchasing their dream home. Her patience and attention to detail make her a favorite among clients.",
      image: "/placeholder.svg?height=100&width=100",
      socialMedia: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Our Expert Agents
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-12">
              Meet our team of dedicated real estate professionals. With years
              of experience and in-depth local knowledge, our agents are here to
              help you find your perfect property.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <Card
                  key={agent.id}
                  className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={agent.image} alt={agent.name} />
                        <AvatarFallback>
                          {agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{agent.name}</CardTitle>
                        <CardDescription>{agent.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 mb-4">{agent.bio}</p>
                    <div className="space-y-2">
                      <p className="text-sm flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {agent.phone}
                      </p>
                      <p className="text-sm flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {agent.email}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Link href={agent.socialMedia.facebook}>
                        <Button size="icon" variant="ghost">
                          <Facebook className="w-4 h-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </Link>
                      <Link href={agent.socialMedia.twitter}>
                        <Button size="icon" variant="ghost">
                          <Twitter className="w-4 h-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </Link>
                      <Link href={agent.socialMedia.linkedin}>
                        <Button size="icon" variant="ghost">
                          <Linkedin className="w-4 h-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                    </div>
                    <Button>Contact Agent</Button>
                  </CardFooter>
                </Card>
              ))}
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
