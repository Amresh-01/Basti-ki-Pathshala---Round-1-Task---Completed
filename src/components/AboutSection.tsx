import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Globe, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Working hand-in-hand with local communities to understand their unique needs."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality education accessible to children in every corner of society."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Using creative teaching methods and technology to enhance learning outcomes."
    }
  ];

  const milestones = [
    { year: "2018", event: "Started with teaching 10 children under a bridge in Delhi" },
    { year: "2019", event: "Established our first community learning center" },
    { year: "2020", event: "Adapted to digital learning during pandemic challenges" },
    { year: "2021", event: "Expanded to serve 25 communities across North India" },
    { year: "2022", event: "Launched vocational training programs for adults" },
    { year: "2023", event: "Reached 5,000 children with regular education support" },
    { year: "2024", event: "Growing to impact 50+ communities nationwide" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            About Basti ki Pathshala
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to transforming lives through education in underserved communities. 
            Our grassroots approach focuses on providing quality learning opportunities, 
            skill development, and educational resources where they're needed most.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-trust hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge educational gaps in underserved communities by providing 
                accessible, quality education and skill development programs that 
                empower children and families to break the cycle of poverty and 
                build sustainable futures.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-trust hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A society where every child, regardless of their background or 
                circumstances, has access to quality education and the opportunity 
                to realize their full potential, creating educated and empowered 
                communities across India.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center shadow-trust hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Story */}
        <div className="gap-8 mb-16 flex justify-center items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6 flex justify-center items-center">Our Impact Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem optio cupiditate nemo vel. Consectetur, sunt cumque in neque culpa necessitatibus quas placeat cupiditate autem dolorum temporibus, minus ullam laudantium ex.
              </p>
              <p>
                Our approach is deeply rooted in community engagement. We work directly with 
                families and local leaders to understand the unique challenges each community 
                faces, from lack of resources to social barriers that prevent children from 
                attending school.
              </p>
              <p>
                Through our network of dedicated volunteers and educators, we've established 
                learning centers, mobile education units, and digital learning programs that 
                bring quality education directly to underserved communities across India.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-impact-gradient rounded-lg p-8 text-accent-foreground">
          <h3 className="text-2xl font-bold mb-4">Join Our Educational Mission</h3>
          <p className="text-lg mb-6 opacity-90">
            Every volunteer, donor, and supporter helps us bring quality education 
            to more children. Together, we can ensure no child is left behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">1,900+</div>
              <div className="text-sm opacity-80">Interns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">30,000+</div>
              <div className="text-sm opacity-80">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">Supporters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;