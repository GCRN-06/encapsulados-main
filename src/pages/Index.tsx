import { PromoBanner } from "@/components/PromoBanner";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <CategoryBar />
      <Hero />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
