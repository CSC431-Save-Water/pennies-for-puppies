import { Link } from "react-router";
import { Heart, Stethoscope, Home as HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const stats = [
    { number: "500+", label: "Puppies Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "$250K", label: "Raised This Year" },
    { number: "1000+", label: "Active Supporters" },
  ];

  const impactAreas = [
    {
      icon: Stethoscope,
      title: "Medical Care",
      description:
        "Providing essential surgeries, treatments, and ongoing veterinary care for disabled puppies.",
    },
    {
      icon: HomeIcon,
      title: "Safe Housing",
      description:
        "Creating accessible shelters with specialized equipment to support puppies with mobility challenges.",
    },
    {
      icon: Heart,
      title: "Loving Homes",
      description:
        "Connecting our rescued puppies with caring families who understand their special needs.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
                Every Puppy Deserves a Chance
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We rescue, rehabilitate, and rehome disabled puppies, giving
                them the love and care they need to thrive. Your pennies make a
                world of difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/donate">Make a Donation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716399086783-c08eb832a67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhYmxlZCUyMHB1cHB5JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NzIwMzgxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Disabled puppy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-rose-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              How We Make an Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donations directly support our three core programs designed
              to give disabled puppies the best possible life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Meet some of the amazing puppies we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641349067134-245df2efdc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJlc2N1ZWQlMjBwdXBweXxlbnwxfHx8fDE3NzIwMzgxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rescued puppy"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">Max's Journey</h3>
                <p className="text-gray-600">
                  Born with hip dysplasia, Max received life-changing surgery
                  and now runs and plays like any other puppy. He found his
                  forever home last month!
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764377847000-46d0da2b91f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHNoZWx0ZXIlMjBjYXJlfGVufDF8fHx8MTc3MjAzODEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Puppy in care"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">Bella's Recovery</h3>
                <p className="text-gray-600">
                  After losing her front leg, Bella learned to adapt with our
                  specialized rehabilitation program. She's now training to be a
                  therapy dog!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 fill-white" />
          <h2 className="text-3xl md:text-4xl mb-4">
            Your Support Changes Lives
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Even the smallest donation helps us provide medical care, shelter,
            and love to puppies who need it most.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/donate">Donate Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
