"use client";

import { JSX, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactData } from "@/assets/data/contactData";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  contactMethod: z.enum(["email", "phone", "social"]),
  socialHandle: z.string().optional(),
  preferredTime: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSocialHandle, setShowSocialHandle] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      contactMethod: "email",
      socialHandle: "",
      preferredTime: "",
    },
  });

  const onContactMethodChange = (value: string) => {
    setShowSocialHandle(value === "social");
    form.setValue("contactMethod", value as "email" | "phone" | "social");
  };

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success(contactData.successMessage);
      form.reset();
    } catch (error) {
      toast.error(contactData.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-[2%]">
      <div className="max-w-7xl mx-auto">
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <TextGenerateEffect
                  words={contactData.title}
                  className="text-4xl font-bold"
                />
                <p className="text-muted-foreground">{contactData.subtitle}</p>
              </div>
              {/* Contact Details */}
              <div className="space-y-4">
                {Object.entries(contactData.contactInfo).map(([key, info]) => (
                  <Card key={key} className="p-4 relative group">
                    <BorderBeam />
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{info.label}</h3>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 relative">
              <BorderBeam />
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your message"
                            className="h-32 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Contact Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={onContactMethodChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone">Phone</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="social" id="social" />
                              <Label htmlFor="social">Social Media</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {showSocialHandle && (
                    <FormField
                      control={form.control}
                      name="socialHandle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Social Media Handle</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="@username"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
      </div>
    </section>
  );
}