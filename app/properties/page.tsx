"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Home, Menu, Bed, Bath, Square, DollarSign } from "lucide-react";
import Link from "next/link";

export default function PropertiesPage() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 350000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image:
        "https://www.hotels-newyorkcity.org/data/Pics/OriginalPhoto/16034/1603407/1603407456/pic-new-york-8.JPEG",
      type: "Apartment",
    },
    {
      id: 2,
      title: "Spacious Suburban House",
      price: 550000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2500,
      image:
        "https://southfloridaagentmagazine.com/wp-content/uploads/sites/4/2017/04/Suburban-House-Resized.jpeg",
      type: "House",
    },
    {
      id: 3,
      title: "Cozy Studio in the City Center",
      price: 200000,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447458599.jpg?k=4424352415d8b988bf91203abd5ee1383c6659db0f293dd64241ee28d80e5ccd&o=&hp=1",
      type: "Studio",
    },
    {
      id: 4,
      title: "Luxury Penthouse with Ocean View",
      price: 1200000,
      bedrooms: 3,
      bathrooms: 3,
      sqft: 3000,
      image:
        "https://media.vrbo.com/lodging/38000000/37810000/37807500/37807424/6ec9b617.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill0",
      type: "Penthouse",
    },
    {
      id: 5,
      title: "Charming Cottage in the Countryside",
      price: 300000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1000,
      image:
        "https://img.freepik.com/premium-photo/charming-cottage-countryside-surrounded-by-colorful-garden_604472-60798.jpg",
      type: "House",
    },
    {
      id: 6,
      title: "Modern Loft in Arts District",
      price: 450000,
      bedrooms: 1,
      bathrooms: 2,
      sqft: 1500,
      image:
        "https://www.marmol-radziner.com/wp-content/uploads/2017/02/arts-district-loft-interiors-1-1920x1280.jpg",
      type: "Loft",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Available Properties
            </h1>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="property-type"
                    >
                      Property Type
                    </label>
                    <Select>
                      <SelectTrigger id="property-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="bedrooms">
                      Bedrooms
                    </label>
                    <Select>
                      <SelectTrigger id="bedrooms">
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="bathrooms">
                      Bathrooms
                    </label>
                    <Select>
                      <SelectTrigger id="bathrooms">
                        <SelectValue placeholder="Select bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <Slider
                      defaultValue={[0, 1000000]}
                      max={1000000}
                      step={10000}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply Filters</Button>
                </CardFooter>
              </Card>
              <div className="lg:col-span-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                  <Card key={property.id} className="flex flex-col">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="object-cover h-48 w-full"
                    />
                    <CardHeader>
                      <CardTitle>{property.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">
                        ${property.price.toLocaleString()}
                      </p>
                      <div className="flex justify-between mt-2">
                        <span className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {property.bedrooms} beds
                        </span>
                        <span className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.bathrooms} baths
                        </span>
                        <span className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          {property.sqft} sqft
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
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
