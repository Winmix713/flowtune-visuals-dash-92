
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Dashboard } from "@/pages/dashboard";
import { StarfieldBackground } from "@/components/ui/starfield-background";
import { useTheme } from "@/components/theme-provider";

function StarfieldWrapper() {
  const { theme } = useTheme();
  return theme === 'dark' ? <StarfieldBackground /> : null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="flowtune-theme">
      <StarfieldWrapper />
      <Dashboard />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
