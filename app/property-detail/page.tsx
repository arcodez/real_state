import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Bed,
  Bath,
  Square,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Detalle del producto",
  description: "Product Detail Page",
};

export default function PropertyDetailPage() {
  // This would typically come from a database or API
  const property = {
    id: 1,
    title: "Luxurious Family Home",
    address: "123 Maple Street, Anytown, USA",
    price: "$750,000",
    description:
      "This stunning family home offers spacious living areas, a modern kitchen, and a beautiful backyard perfect for entertaining. Located in a quiet neighborhood with excellent schools nearby.",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    yearBuilt: 2015,
    /* the height is 400 and the width is 600 just in case  */
    images: [
      "https://usvintagewood.com/wp-content/uploads/2021/05/image1.jpg",
      "https://housing.com/news/wp-content/uploads/2023/02/house-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=1.00xw:0.731xh;0,0.136xh&resize=1200:*",
      "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65fa6463e9fd22fb37cf68c9_modern%20house%20ideas.webp",
    ],
    features: [
      "Open floor plan",
      "Hardwood floors",
      "Gourmet kitchen",
      "Master suite with walk-in closet",
      "Large backyard with patio",
      "Two-car garage",
    ],
    agent: {
      name: "Jane Doe",
      phone: "(123) 456-7890",
      email: "jane.doe@acmerealestate.com",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-background z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <Home className="h-6 w-6" />
          <span className="ml-2 font-bold text-lg">Acme Real Estate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/properties"
          >
            Properties
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {property.title}
                </h1>
                <p className="text-gray-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.address}
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {property.price}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="w-4 h-4" />
                    <span>{property.squareFeet} sqft</span>
                  </div>
                </div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          style={{ objectFit: "cover" }}
                          src={image}
                          alt={`Property image ${index + 1}`}
                          className="w-full h-[400px] object-cover rounded-lg"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{property.description}</p>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Year Built: {property.yearBuilt}</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <h3 className="font-semibold mb-2">Features:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {property.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Agent</CardTitle>
                    <CardDescription>
                      Get in touch with our agent for more information or to
                      schedule a viewing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">{property.agent.name}</p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {property.agent.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {property.agent.email}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Contact Agent</Button>
                  </CardFooter>
                </Card>
              </div>
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
