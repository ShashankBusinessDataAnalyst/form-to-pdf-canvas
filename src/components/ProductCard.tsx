import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  thumbnail: string;
  route: string;
  description?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  thumbnail, 
  route, 
  description 
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-border bg-card"
      onClick={() => navigate(route)}
    >
      <div className="aspect-[1.5/1] bg-muted relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-base font-semibold text-card-foreground">{name}</CardTitle>
        {description && (
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};
