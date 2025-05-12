import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Dashboard } from "@/pages/dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="flowtune-theme">
      <Dashboard />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;