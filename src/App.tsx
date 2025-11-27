import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StellarCold from "./pages/StellarCold";
import StellarHot from "./pages/StellarHot";
import StellarNormal from "./pages/StellarNormal";
import StellarHotCAVITY from "./pages/StellarHotCavity";
import StellarSpireHot from "./pages/StellarSpireHot";
import StellarSpireNormal from "./pages/StellarSpireNormal";
import StellarSpireCold from "./pages/StellarSpireCold";
import StellarCashCounter from "./pages/StellarCashCounter";
import StellarPickUpandDeliveryCounter from "./pages/StellarPickUpandDeliveryCounter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/StellarCold" element={<StellarCold />} />
          <Route path="/StellarHot" element={<StellarHot />} />
          <Route path="/StellarNormal" element={<StellarNormal />} />
          <Route path="/StellarHotCavity" element={<StellarHotCAVITY />} />
          <Route path="/StellarSpireHot" element={<StellarSpireHot />} />
          <Route path="/StellarSpireNormal" element={<StellarSpireNormal />} />
          <Route path="/StellarSpireCold" element={<StellarSpireCold />} />
          <Route path="/StellarCashCounter" element={<StellarCashCounter />} />
          <Route path="/StellarPickUpandDeliveryCounter" element={<StellarPickUpandDeliveryCounter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
