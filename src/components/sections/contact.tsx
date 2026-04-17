"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Image from "next/image";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function Contact() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: state.message,
        });
      }
    }
  }, [state, toast]);
  
  const contactDetails = [
    { icon: MapPin, label: "Address", value: ["17/12 หมู่ 9 ถนนเลียบคลองสี่ ตำบลคลองสี่ อำเภอคลองหลวง จังหวัดปทุมธานี 12120"] },
    { icon: Phone, label: "Phone", value: ["02-902-7983", "02-157-0894"] },
    { icon: Printer, label: "Fax", value: ["02-902-7985"] },
    { icon: Mail, label: "Email", value: ["lotus_eme@hotmail.com"] },
  ];

  return (
    <section id="contact" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Have a project in mind or need a quote? We're here to help. Reach out to us through any of the channels below or use the contact form.
          </p>
          <div className="space-y-4">
            {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                    <detail.icon className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="font-semibold text-foreground">{detail.label}</h3>
                        <div className="text-muted-foreground space-y-1">
                          {detail.value.map((line, index) => <p key={index}>{line}</p>)}
                        </div>
                    </div>
                </div>
            ))}
          </div>
          <div className="space-y-4 pt-4">
            <h3 className="font-semibold text-foreground">Our Location Map</h3>
            <Image
                src="https://img2.pic.in.th/1776412099883.jpg"
                alt="Company Location QR Code"
                width={192}
                height={192}
                className="rounded-md"
            />
          </div>
        </div>
        <form action={dispatch} className="space-y-4">
          <Input name="name" placeholder="Your Name" required aria-label="Your Name" />
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
          
          <Input name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
          {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}

          <Input name="subject" placeholder="Subject" required aria-label="Subject" />
          {state.errors?.subject && <p className="text-sm text-destructive">{state.errors.subject.join(", ")}</p>}

          <Textarea name="message" placeholder="Your Message" rows={5} required aria-label="Your Message" />
          {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
          
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
