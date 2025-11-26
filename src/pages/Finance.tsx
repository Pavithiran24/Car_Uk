import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown, Shield, Clock } from "lucide-react";

const Finance = () => {
  const [vehiclePrice, setVehiclePrice] = useState("25000");
  const [deposit, setDeposit] = useState("5000");
  const [term, setTerm] = useState("48");
  const [interestRate] = useState(6.9);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(vehiclePrice) - parseFloat(deposit);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = parseInt(term);
    
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return isNaN(monthlyPayment) ? "0.00" : monthlyPayment.toFixed(2);
  };

  const totalAmount = (parseFloat(calculateMonthlyPayment()) * parseInt(term) + parseFloat(deposit)).toFixed(2);
  const totalInterest = (parseFloat(totalAmount) - parseFloat(vehiclePrice)).toFixed(2);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Finance Options</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible payment plans to help you drive away in your dream vehicle
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: TrendingDown, title: "Low Rates", desc: "Competitive APR from 6.9%" },
            { icon: Shield, title: "Secure", desc: "FCA regulated finance" },
            { icon: Clock, title: "Quick Approval", desc: "Decision in minutes" },
            { icon: Calculator, title: "Flexible Terms", desc: "12-60 month options" },
          ].map((feature, idx) => (
            <Card key={idx} className="p-6 text-center hover:shadow-medium transition-shadow border-border">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="p-8 border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Finance Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="price" className="text-base font-semibold">Vehicle Price (£)</Label>
                <Input
                  id="price"
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="deposit" className="text-base font-semibold">Deposit (£)</Label>
                <Input
                  id="deposit"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="term" className="text-base font-semibold">Term (months)</Label>
                <Input
                  id="term"
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  min="12"
                  max="60"
                  className="mt-2 text-lg"
                />
              </div>

              <div className="pt-4">
                <Label className="text-base font-semibold">Representative APR</Label>
                <p className="text-2xl font-bold text-accent mt-2">{interestRate}%</p>
              </div>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-soft">
            <h2 className="text-3xl font-bold mb-8">Your Estimate</h2>

            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur p-6 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2">Monthly Payment</p>
                <p className="text-5xl font-bold text-accent">£{calculateMonthlyPayment()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl font-bold">£{totalAmount}</p>
                </div>
                <div className="bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                  <p className="text-2xl font-bold">£{totalInterest}</p>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-1">Amount Financed</p>
                <p className="text-2xl font-bold">£{(parseFloat(vehiclePrice) - parseFloat(deposit)).toFixed(2)}</p>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-accent">
                Apply for Finance
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This is an illustrative example only. Your actual rate may vary based on your circumstances.
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-12 p-8 bg-secondary/30 border-border">
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Finance?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Flexible Terms</h4>
              <p className="text-muted-foreground">
                Choose from 12 to 60-month repayment periods to suit your budget.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">No Hidden Fees</h4>
              <p className="text-muted-foreground">
                Transparent pricing with no surprise charges. What you see is what you pay.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Part Exchange Welcome</h4>
              <p className="text-muted-foreground">
                Use your current vehicle as part of your deposit to reduce monthly payments.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Finance;
