import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stellar_Cold from "./pages/Stellar_Cold";
import Stellar_Hot from "./pages/Stellar_Hot";
import Stellar_NORMAL from "./pages/Stellar_Normal";
import Stellar_Hot_CAVITY from "./pages/Stellar_Hot_CAVITY";
import Stellar_Spire_Hot from "./pages/Stellar_Spire_Hot";
import Stellar_Spire_Normal from "./pages/Stellar_Spire_Normal";
import Stellar_Spire_Cold from "./pages/Stellar_Spire_Cold";
import Stellar_Cash_Counter from "./pages/Stellar_Cash_Counter";

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
          <Route path="/Stellar_Hot_CAVITY" element={<Stellar_Hot_CAVITY />} />
          <Route path="/Stellar_Spire_Hot" element={<Stellar_Spire_Hot />} />
          <Route path="/Stellar_Spire_Normal" element={<Stellar_Spire_Normal />} />
          <Route path="/Stellar_Spire_Cold" element={<Stellar_Spire_Cold />} />
          <Route path="/Stellar_Cash_Counter" element={<Stellar_Cash_Counter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
