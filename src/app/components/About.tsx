import { Heart, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description:
        "Every decision we make is guided by what's best for the puppies in our care.",
    },
    {
      icon: Target,
      title: "Focused Mission",
      description:
        "We specialize in disabled puppies, ensuring they get the expert care they deserve.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our volunteers, donors, and partners make our work possible every single day.",
    },
    {
      icon: Award,
      title: "Excellence in Care",
      description:
        "We maintain the highest standards of veterinary and rehabilitative care.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Founder & Veterinarian",
      description:
        "With 15 years of veterinary experience, Sarah started this organization after falling in love with special needs puppies.",
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      description:
        "Michael ensures our facilities run smoothly and our puppies receive round-the-clock care.",
    },
    {
      name: "Emily Rodriguez",
      role: "Adoption Coordinator",
      description:
        "Emily matches our puppies with perfect families and provides ongoing support to adopters.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Our Mission: Hope for Every Paw
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Pennies for Disabled Puppies was founded on the belief that every
              puppy, regardless of their physical challenges, deserves a chance
              at a happy, healthy life filled with love.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  It all started in 2018 when our founder, Dr. Sarah Martinez,
                  encountered a puppy with severe mobility issues at a rural
                  shelter. Despite the puppy's challenges, its spirit was
                  unbreakable. That moment changed everything.
                </p>
                <p>
                  Sarah realized that disabled puppies were often overlooked,
                  with many shelters lacking the resources to provide the
                  specialized care they needed. She knew she had to do
                  something.
                </p>
                <p>
                  What began as a small operation in her garage has grown into a
                  nationally recognized organization that has helped over 500
                  disabled puppies find their forever homes. We've built
                  state-of-the-art facilities, partnered with leading veterinary
                  specialists, and created a community of supporters who believe
                  in our mission.
                </p>
                <p>
                  Today, we're proud to be at the forefront of disabled puppy
                  care, developing new rehabilitation techniques and advocating
                  for special needs animals everywhere.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649609152484-970b013af72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2FyZSUyMHB1cHB5fGVufDF8fHx8MTc3MjAzODEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Veterinary care for puppies"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to our cause
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="h-24 w-24 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-rose-600" />
                  </div>
                  <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-rose-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Our Impact by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">500+</div>
                <div className="opacity-90">Puppies Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">450+</div>
                <div className="opacity-90">Successful Adoptions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">200+</div>
                <div className="opacity-90">Surgeries Performed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">95%</div>
                <div className="opacity-90">Recovery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
