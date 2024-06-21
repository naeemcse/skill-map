import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import NextTopLoader from 'nextjs-toploader';
import PlainLayout from "@/components/master/PlainLayout";
import  { Toaster } from 'react-hot-toast';
import  {AppWrapper} from "@/contex/contex"

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Skill Map",
  description: "Developed by Najmul Islam Naeem and Belal Uddin",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <AppWrapper>
      <NextTopLoader
       color="#4CCD99"
       initialPosition={0.08}
       crawlSpeed={200}
       height={3}
       crawl={true}
       showSpinner={true}
       easing="ease"
       speed={200}
       shadow="0 0 10px #2299DD,0 0 5px #2299DD"
       template='<div class="bar" role="bar"><div class="peg"></div></div> 
       <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
       zIndex={1600}
       showAtBottom={false}
      />
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
           <PlainLayout>
            {children}
            </PlainLayout>
          </ThemeProvider>
        <Toaster  position="bottom-center"/>
      </AppWrapper>
        </body>
    </html>
  );
}
