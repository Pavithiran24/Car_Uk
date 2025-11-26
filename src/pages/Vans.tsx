import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

import vans from "@/lib/vans"; // ✅ FIXED

const Vans = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Used Vans</h1>
          <p className="text-xl text-muted-foreground">Professional commercial vehicles for your business</p>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8 shadow-soft border-border">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by make, model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-25000">Under £25,000</SelectItem>
                <SelectItem value="25000-30000">£25,000 - £30,000</SelectItem>
                <SelectItem value="30000-35000">£30,000 - £35,000</SelectItem>
                <SelectItem value="35000+">£35,000+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Payload" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000">Up to 1,000 kg</SelectItem>
                <SelectItem value="1000-1250">1,000 - 1,250 kg</SelectItem>
                <SelectItem value="1250-1500">1,250 - 1,500 kg</SelectItem>
                <SelectItem value="1500+">1,500+ kg</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{vans.length}</span> vehicles
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="mileage">Lowest Mileage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vans.map((van) => (
            <Card key={van.id} className="overflow-hidden group hover:shadow-strong transition-all duration-300 border-border">
              <div className="relative overflow-hidden">
                <img
                  src={van.image}
                  alt={van.name}
                  onError={(e) => (e.currentTarget.src = '/car.png')}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{van.name}</h3>
                <p className="text-3xl font-bold text-accent mb-4">{van.price}</p>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground mb-4">
                  <span>Year: {van.year}</span>
                  <span>Mileage: {van.mileage}</span>
                  <span>Fuel: {van.fuel}</span>
                  <span>Payload: {van.payload}</span>
                </div>
                <Link to={`/vans/${van.id}`}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vans;
