import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archit Kumar Raul Portfolio",
  description:
    "A portfolio website showcasing the work and projects of Archit Kumar Raul.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${font.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav/>
          {children}
          <Footer/>
          <ScrollToTop/>
        </Provider>
      </body>
    </html>
  );
}
