import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import vehicles from "@/lib/vehicles";

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = vehicles.find((v) => String(v.id) === String(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Car not found.</p>
          <Button className="mt-4" onClick={() => navigate('/cars')}>
            Back to listings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          Close
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img src={car.image} alt={car.name} className="w-full h-96 object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-accent text-2xl font-bold mb-4">{car.price}</p>
            <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
              <li><strong>Year:</strong> {car.year}</li>
              <li><strong>Mileage:</strong> {car.mileage}</li>
              <li><strong>Fuel:</strong> {car.fuel}</li>
              <li><strong>Transmission:</strong> {car.transmission}</li>
            </ul>
            <p className="text-sm text-primary-foreground/80 mb-6">{car.description}</p>

            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Seller
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
