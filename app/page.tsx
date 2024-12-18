"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Search, Key, DollarSign, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { CardFooterButton } from "@/components/ui/CardFooterButton";
import PropertyCard from "@/components/ui/PropertyCard";

export default function RealEstateLandingPage() {
  const [Title, setTitle] = useState("RS || Arcodez");

  const PropertiesCardList = [
    {
      title: "House on the Lake",
      altImage: "House exterior",
      image:
        "https://cdn.prod.website-files.com/5fcff9094e6ad8e939c7fa3a/641b657d3b01f349c8a72879_Blog%20Header%20Image-16.30.48.png ",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
    {
      title: "Beautiful Family home",
      altImage: "House exterior",
      image:
        "https://images.adsttc.com/media/images/5735/0b41/e58e/ce99/da00/004f/newsletter/IMG_0208_copy.jpg?1463094074g",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
    {
      title: "Modern Apartment in New York",
      altImage: "House exterior",
      image:
        "https://zillowstatic.com/bedrock/app/uploads/sites/15/Insane-Apartment-Amenities-That-Celebs-Love-1-4-HERO.jpg",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
    {
      title: "Modern House in the Beach",
      altImage: "House exterior",
      image:
        "https://kathryninteriors.com/wp-content/uploads/2022/03/0_2-14.jpg",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
    {
      title: "Amazing Family Home",
      altImage: "House exterior",
      image:
        "https://www.marketingresultsatlanta.com/wp-content/uploads/2015/06/Winward-Lot2.jpg",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
    {
      title: "Dark House to Hallowen",
      altImage: "Hallowen House",
      image:
        "https://imgcdn.stablediffusionweb.com/2024/9/5/4496657e-28fc-4d9d-928f-a64d40c424f0.jpg ",
      description: "3 beds • 2 baths • 1,500 sqft",
      address: "123 Main St, Anytown, USA",
    },
  ];

  return (
    <>
      <Head>
        <title>{Title}</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
            <div className="absolute inset-0 z-0">
              <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0?height=400&width=600')`,
                  }}
                ></div>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg?height=400&width=600')`,
                  }}
                ></div>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://i.blogs.es/c68014/casa-3d/840_560.jpeg?height=400&width=600')`,
                  }}
                ></div>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://s1.elespanol.com/2019/08/09/omicrono/omicrono_420219253_131917136_1706x960.jpg?height=400&width=600')`,
                  }}
                ></div>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://content.elmueble.com/medio/2024/07/18/casas-em-737_0b7cc217_FER4708d_240718165342_600x600.jpg?height=400&width=600')`,
                  }}
                ></div>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://dossierdearquitectura.com/imgPosts/628dbb7608019.jpg?height=400&width=600')`,
                  }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Find Your Dream
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    Discover the perfect property with our extensive listings
                    and expert guidance.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter location, property type, or keywords"
                      type="text"
                    />
                    <Button type="submit">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section
            id="properties"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                Featured Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PropertiesCardList.map((property, i) => (
                  /* Aqui ira el component De property Card */
                  <PropertyCard key={i} {...property} />
                ))}
              </div>
            </div>
          </section>
          <section id="agents" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                Nuestros servicios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Key className="w-8 h-8 mb-2" />
                    <CardTitle>Property Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We offer comprehensive property management services to
                      help you maximize your investment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Home className="w-8 h-8 mb-2" />
                    <CardTitle>Real Estate Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our expert consultants provide valuable insights to guide
                      your real estate decisions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <DollarSign className="w-8 h-8 mb-2" />
                    <CardTitle>Investment Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Discover lucrative investment opportunities in prime real
                      estate markets.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-6 h-6 text-yellow-400"
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">
                        "Acme Real Estate made finding our dream home a breeze.
                        Their expertise and dedication are unmatched!"
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="font-semibold">- John Doe</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Find Your Perfect Home?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                    Let our expert agents guide you through the process. Contact
                    us today
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full" size="lg">
                    Contact an Agent
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
