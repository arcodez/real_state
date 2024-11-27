"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, Key, DollarSign, Star, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function RealEstateLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Properties', href: '#properties' },
    { name: 'Agents', href: '#agents' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (pageName: string) => {
    setActivePage(pageName.toLowerCase())
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-background z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="ml-2 font-bold text-lg">Acme Real Estate</span>
        </Link>
        <nav className="ml-auto flex items-center">
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 md:left-auto w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 gap-4 border-b md:border-0 shadow-md md:shadow-none`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`text-sm font-medium hover:text-primary transition-colors ${activePage === item.name.toLowerCase() ? 'text-primary' : ''}`}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0?height=400&width=600')`}}></div>
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg?height=400&width=600')`}}></div>
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://i.blogs.es/c68014/casa-3d/840_560.jpeg?height=400&width=600')`}}></div>
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://s1.elespanol.com/2019/08/09/omicrono/omicrono_420219253_131917136_1706x960.jpg?height=400&width=600')`}}></div>
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://content.elmueble.com/medio/2024/07/18/casas-em-737_0b7cc217_FER4708d_240718165342_600x600.jpg?height=400&width=600')`}}></div>
              <div className="bg-cover bg-center" style={{backgroundImage: `url('https://dossierdearquitectura.com/imgPosts/628dbb7608019.jpg?height=400&width=600')`}}></div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Your Dream Home
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Discover the perfect property with our extensive listings and expert guidance.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter location, property type, or keywords" type="text" />
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="properties" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Beautiful Family Home</CardTitle>
                    <CardDescription>123 Main St, Anytown, USA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="House exterior"
                      className="w-full h-48 object-cover rounded-md"
                      height="200"
                      src="https://res.cloudinary.com/perryhomes/image/upload/v1706913631/PerryHomes/Blog/The%20Ultimate%20Guide%20to%20Home%20Exterior%20Design/ultimate-guide-to-home-exterior-design.jpg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <p className="mt-2">3 beds • 2 baths • 1,500 sqft</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="agents" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Key className="w-8 h-8 mb-2" />
                  <CardTitle>Property Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We offer comprehensive property management services to help you maximize your investment.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Home className="w-8 h-8 mb-2" />
                  <CardTitle>Real Estate Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our expert consultants provide valuable insights to guide your real estate decisions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="w-8 h-8 mb-2" />
                  <CardTitle>Investment Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover lucrative investment opportunities in prime real estate markets.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"Acme Real Estate made finding our dream home a breeze. Their expertise and dedication are unmatched!"</p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-semibold">- John Doe</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Perfect Home?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Let our expert agents guide you through the process. Contact us today!
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Acme Real Estate. All rights reserved.</p>
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
  )
}