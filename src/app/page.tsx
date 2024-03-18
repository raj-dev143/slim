import HeroBanner from "@/components/heroBanner/HeroBanner";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Section5 from "@/components/section5/Section5";
import Section6 from "@/components/section6/Section6";
import Section7 from "@/components/section7/Section7";
import BuyNow from "@/components/buynow/BuyNow";
import Videos from "@/components/videos/Videos";
import TestimonialSection from "@/components/testimonialSection/TestimonialSection";
import Faqs from "@/components/faqs/Faqs";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <BuyNow />
      <Videos />
      <TestimonialSection />
      <Faqs />
      <Contact />
    </main>
  );
}
