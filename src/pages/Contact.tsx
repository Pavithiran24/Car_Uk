import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our showroom or send us a message. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-border hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Auto Street<br />
                    London, UK<br />
                    EC1A 1BB
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-1">+44 20 1234 5678</p>
                  <p className="text-muted-foreground text-sm">Mon-Sat: 9am - 6pm</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-1">info@carvault.com</p>
                  <p className="text-muted-foreground text-sm">We'll respond within 24hrs</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Monday - Friday: 9am - 6pm</p>
                    <p>Saturday: 9am - 5pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 border-border shadow-soft">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                  <Input id="firstName" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                  <Input id="lastName" required className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">Phone</Label>
                  <Input id="phone" type="tel" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-base font-semibold">Subject *</Label>
                <Input id="subject" required className="mt-2" />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                <Textarea
                  id="message"
                  required
                  className="mt-2 min-h-40"
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-accent">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map */}
        <Card className="mt-12 overflow-hidden border-border shadow-soft">
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.997739388845!2d-0.09178668422947334!3d51.51737967963716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5e8e7d7d7d%3A0x7e7e7e7e7e7e7e7e!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
