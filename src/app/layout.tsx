import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "@/context/ScrollContext";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Inter } from "next/font/google";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Ensure the system theme is the default
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            {/* Header at the top */}
            <Header />

            {/* Scroll progress */}
            <ScrollProgress />

            {/* Main content area */}
            <main className="flex-grow container w-full mx-auto px-4">
              {children}
            </main>

            {/* Footer at the bottom */}
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
