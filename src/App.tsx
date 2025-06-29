import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ConsultationForm from "@/pages/consultation";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/consultation" component={ConsultationForm} />
      <Route component={NotFound} />

    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
  );
}

export default App;
