import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroModel from "@/assets/hero-model.jpg";
import gummyTeste from "@/assets/gummy-teste.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const Hero = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Vitamina C Gummies",
      price: "€ 89,90",
      originalPrice: "€ 129,90",
      discount: "31% OFF",
      image: gummyTeste,
      flavor: "Laranja",
    },
    {
      id: 2,
      name: "Multivitamínico Kids",
      price: "€ 79,90",
      originalPrice: "€ 119,90",
      discount: "33% OFF",
      image: gummyTeste,
      flavor: "Frutas Vermelhas",
    },
    {
      id: 3,
      name: "Ômega 3 Gummies",
      price: "€ 99,90",
      originalPrice: "€ 149,90",
      discount: "33% OFF",
      image: gummyTeste,
      flavor: "Limão",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                🎯 Mais vendido
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Vitaminas que
                <span className="block text-primary">fazem a diferença</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubra nossa linha premium de suplementos em formato de gomas.
                Sabor incrível, qualidade garantida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Ver Produtos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Saber Mais
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                <span>Frete grátis acima de € 199</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>Mais de 10.000 avaliações</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroModel}
                alt="Vitaminas premium em gomas"
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Featured Products Carousel */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground text-lg">
              Os mais amados pelos nossos clientes
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
