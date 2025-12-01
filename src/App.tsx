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
import ShannonCold from "./pages/ShannonCold";
import ShannonHot from "./pages/ShannonHot";
import ShannonNormal from "./pages/ShannonNormal";
import ShannonHotCavity from "./pages/ShannonHotCavity";
import ShannonCashCounter from "./pages/ShannonCashCounter";
import ShannonPickUpDeliveryCounter from "./pages/ShannonPickUpDeliveryCounter";
import ShannonCornerCounter from "./pages/ShannonCornerCounter";
import SilyaCold3 from "./pages/SilyaCold3";
import SilyaHot3 from "./pages/SilyaHot3";
import SilyaNormal3 from "./pages/SilyaNormal3";
import SilyaHotCavity3 from "./pages/SilyaHotCavity3";
import SilyaCold4 from "./pages/SilyaCold4";
import SilyaHot4 from "./pages/SilyaHot4";
import SilyaNormal4 from "./pages/SilyaNormal4";
import SilyaCornerCounter from "./pages/SilyaCornerCounter";
import SilyaCashCounter from "./pages/SilyaCashCounter";
import SilyaPickUpDeliveryCounter from "./pages/SilyaPickUpDeliveryCounter";
import ShannonLowBaseHot from "./pages/ShannonLowBaseHot";
import ShannonLowBaseNormal from "./pages/ShannonLowBaseNormal";
import ShannonLowBaseHotCavity from "./pages/ShannonLowBaseHotCavity";

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
          <Route path="/ShannonCold" element={<ShannonCold />} />
          <Route path="/ShannonHot" element={<ShannonHot />} />
          <Route path="/ShannonNormal" element={<ShannonNormal />} />
          <Route path="/ShannonHotCavity" element={<ShannonHotCavity />} />
          <Route path="/ShannonCashCounter" element={<ShannonCashCounter />} />
          <Route path="/ShannonPickUpDeliveryCounter" element={<ShannonPickUpDeliveryCounter />} />
          <Route path="/ShannonCornerCounter" element={<ShannonCornerCounter/>} />
          <Route path="/SilyaCold3" element={<SilyaCold3/>} />
          <Route path="/SilyaHot3" element={<SilyaHot3/>} />
          <Route path="/SilyaNormal3" element={<SilyaNormal3/>} />
          <Route path="/SilyaHotCavity3" element={<SilyaHotCavity3/>} />
          <Route path="/SilyaCold4" element={<SilyaCold4/>} />
          <Route path="/SilyaHot4" element={<SilyaHot4/>} />
          <Route path="/SilyaNormal4" element={<SilyaNormal4/>} />
          <Route path="/SilyaCornerCounter" element={<SilyaCornerCounter/>} />
          <Route path="/SilyaCashCounter" element={<SilyaCashCounter/>} />
          <Route path="/SilyaPickUpDeliveryCounter" element={<SilyaPickUpDeliveryCounter/>} />
          <Route path="/ShannonLowBaseHot" element={<ShannonLowBaseHot/>} />
          <Route path="/ShannonLowBaseNormal" element={<ShannonLowBaseNormal/>} />
          <Route path="/ShannonLowBaseHotCavity" element={<ShannonLowBaseHotCavity/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
