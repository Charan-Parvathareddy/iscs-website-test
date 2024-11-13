import { Check, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useScroll } from '@/contexts/ScrollContext';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "sonner";

// Replace these with your actual IDs
const EMAILJS_SERVICE_ID = "service_059k85f";
const EMAILJS_TEMPLATE_ID = "template_wf9oi3u";
const EMAILJS_PUBLIC_KEY = "t0rP_-Ea-HJvENzgw"; // Optional

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const refs = useScroll();

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: firstName,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      // Clear form
      setFirstName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <Toaster position="top-right" />
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-8 md:py-12"
        style={{
          backgroundImage: "url('/background-3.png')"
        }}
        ref={refs.contact}
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter font-regular">
                  Get in touch
                </h4>
                <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm">
                  We are here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>
              {['Easy to reach', 'Fast response', 'Expert support'].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">{item}</p>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "We are always available to assist you."}
                      {index === 1 && "We aim to respond to all inquiries within 24 hours."}
                      {index === 2 && "Our team of experts is ready to assist you with any questions."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="w-full max-w-md mx-auto">
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>

                  <div className="space-y-2">
                    <Label htmlFor="firstName">Name</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <MoveRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;