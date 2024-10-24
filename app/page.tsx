import React from "react";
import Hero from "@lib/components/hero/hero";
import AboutUs from "@lib/components/about-us/about-us";
import ContactUs from "@lib/components/contact-us/contact-us";
import KeyServices from "@lib/components/key-services/key-services";
import OurPartners from "@lib/components/our-partners/our-partners";
import Testimonials from "@lib/components/testimonials/testimonials";
import Newsletter from "@lib/components/newsletter/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <KeyServices />
      <Testimonials />
      <ContactUs />
      <Newsletter />
      <OurPartners />
    </>
  );
}
