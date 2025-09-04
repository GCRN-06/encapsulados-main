import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const CategoryBar = () => {
  const categories = [
    { name: "Todas", icon: "🏠" },
    { name: "Vitamina C", icon: "🍊" },
    { name: "Multivitamínicos", icon: "💊" },
    { name: "Ômega 3", icon: "🐟" },
    { name: "Infantil", icon: "👶" },
    { name: "Imunidade", icon: "🛡️" },
    { name: "Energia", icon: "⚡" },
    { name: "Beleza", icon: "✨" },
    { name: "Sono", icon: "😴" },
    { name: "Digestão", icon: "🌿" }
  ];

  return (
    <section className="py-8 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {categories.map((category, index) => (
              <Button
                key={category.name}
                variant={index === 0 ? "default" : "ghost"}
                className="shrink-0 gap-2 text-sm font-medium h-12 px-6 rounded-full"
              >
                <span className="text-base">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategoryBar;