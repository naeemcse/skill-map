import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/master/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skill Map",
  description: "Developed by Najmul Islam Naeem and Belal Uddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
        
        </body>
    </html>
  );
}
