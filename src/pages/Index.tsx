import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import williamsLogo from "@/assets/williams-logo.png";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={williamsLogo} alt="Williams Refrigeration" className="h-16" />
              <h1 className="text-xl font-semibold text-foreground">Product Approval System</h1>
            </div>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-6 py-12 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                thumbnail={product.thumbnail}
                route={product.route}
                description={product.description}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-card">
        <div className="container mx-auto px-6 py-4 text-center text-muted-foreground">
          Created By Shashank H.P
        </div>
      </footer>
    </div>
  );
};

export default Index;
