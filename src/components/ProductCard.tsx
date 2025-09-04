import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  flavor: string;
}

const ProductCard = ({ name, price, originalPrice, discount, image, flavor }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <div className="aspect-square overflow-hidden rounded-xl bg-background/50">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <Badge 
            variant="destructive" 
            className="absolute top-3 left-3 font-bold"
          >
            {discount}
          </Badge>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background group-hover:scale-110 transition-all duration-200"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{name}</h3>
            <p className="text-sm text-muted-foreground">Sabor {flavor}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
            <Button variant="outline" size="sm">
              Detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;