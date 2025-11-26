import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Shield, BadgeCheck, TrendingUp, Car, Truck, Calculator, Tag } from "lucide-react";

const Home = () => {
  const featuredVehicles = [
    {
      id: 1,
      name: "BMW 3 Series",
      year: 2021,
      price: "£28,995",
      mileage: "15,000 mi",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Mercedes-Benz Sprinter",
      year: 2020,
      price: "£32,450",
      mileage: "28,000 mi",
      fuel: "Diesel",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Audi A4",
      year: 2022,
      price: "£31,995",
      mileage: "8,500 mi",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in slide-in-from-left duration-700">
              Find Your Perfect{" "}
              <span className="text-gradient">Vehicle</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-in slide-in-from-left duration-700 delay-100">
              Premium quality cars and vans at unbeatable prices. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-200">
              <Link to="/cars">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/95 hover:text-accent-foreground text-accent-foreground shadow-accent text-lg px-8 py-6">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Cars
                </Button>
              </Link>
              <Link to="/vans">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-accent/20 hover:bg-accent/20 text-foreground hover:text-foreground text-lg px-8 py-6">
                  Browse Vans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Quality Assured", desc: "Every vehicle inspected" },
              { icon: BadgeCheck, title: "Verified Dealers", desc: "Trusted sellers only" },
              { icon: TrendingUp, title: "Best Prices", desc: "Competitive market rates" },
              { icon: Calculator, title: "Easy Finance", desc: "Flexible payment plans" },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-medium transition-shadow bg-card border-border">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-xl text-muted-foreground">Handpicked premium selections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden group hover:shadow-strong transition-all duration-300 border-border">
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-3xl font-bold text-accent mb-4">{vehicle.price}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{vehicle.year}</span>
                    <span>•</span>
                    <span>{vehicle.mileage}</span>
                    <span>•</span>
                    <span>{vehicle.fuel}</span>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/95 hover:text-accent-foreground text-accent-foreground">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
              <Link to="/cars">
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/95 hover:text-accent-foreground">
                View All Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-medium transition-shadow bg-card border-border">
              <Car className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Browse Cars</h3>
              <p className="text-muted-foreground mb-6">
                Explore our extensive collection of quality used cars
              </p>
                <Link to="/cars">
                <Button className="w-full bg-accent hover:bg-accent/95 hover:text-accent-foreground text-accent-foreground">
                  View Cars
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-shadow bg-card border-border">
              <Truck className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Browse Vans</h3>
              <p className="text-muted-foreground mb-6">
                Find the perfect commercial vehicle for your business
              </p>
                <Link to="/vans">
                <Button className="w-full bg-accent hover:bg-accent/95 hover:text-accent-foreground text-accent-foreground">
                  View Vans
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-shadow bg-card border-border">
              <Tag className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Sell Your Car</h3>
              <p className="text-muted-foreground mb-6">
                Get the best value for your vehicle in minutes
              </p>
                <Link to="/sell">
                <Button className="w-full bg-accent hover:bg-accent/95 hover:text-accent-foreground text-accent-foreground">
                  Get Started
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
