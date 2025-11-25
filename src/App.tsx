import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ShannonCold from "./pages/ShannonCold";
import ShannonHot from "./pages/ShannonHot";
import Product3 from "./pages/Product3";
import Product4 from "./pages/Product4";
import Product5 from "./pages/Product5";
import NotFound from "./pages/NotFound";
import Stellar_Cold from "./pages/Stellar_Cold";
import Stellar_Hot from "./pages/Stellar_Hot";
import Stellar_NORMAL from "./pages/Stellar_NORMAL";
import Stellar_CAVITY from "./pages/Stellar_CAVITY";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Stellar_Cold" element={<Stellar_Cold />} />
          <Route path="/Stellar_Hot" element={<Stellar_Hot />} />
          <Route path="/Stellar_NORMAL" element={<Stellar_NORMAL />} />
          <Route path="/Stellar_CAVITY" element={<Stellar_CAVITY />} />
          <Route path="/shannon-cold" element={<ShannonCold />} />
          <Route path="/shannon-hot" element={<ShannonHot />} />
          <Route path="/product-3" element={<Product3 />} />
          <Route path="/product-4" element={<Product4 />} />
          <Route path="/product-5" element={<Product5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
