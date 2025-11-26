import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import vans from "@/lib/vans";

const VanDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const van = vans.find((v) => String(v.id) === String(id));

  if (!van) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Van not found.</p>
          <Button className="mt-4" onClick={() => navigate('/vans')}>
            Back to listings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-slate-100 p-8 rounded-lg shadow-md">
          <div className="flex justify-end mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              aria-label="Close details"
              className="p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img
                src={van.image}
                alt={van.name}
                onError={(e) => (e.currentTarget.src = '/car.png')}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{van.name}</h1>
              <p className="text-accent text-2xl font-bold mb-4">{van.price}</p>
              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                <li><strong>Year:</strong> {van.year}</li>
                <li><strong>Mileage:</strong> {van.mileage}</li>
                <li><strong>Fuel:</strong> {van.fuel}</li>
                <li><strong>Payload:</strong> {van.payload}</li>
              </ul>
              <p className="text-sm text-primary-foreground/80 mb-6">{van.description}</p>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanDetails;
