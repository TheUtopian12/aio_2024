import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/ui/NavBar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "AiO",
  description: "AiO",
  icons: {
    icon: "/aio-logo_v2.svg", // Asegúrate de que el favicon esté en la carpeta public
    shortcut: "/aio-logo_v2.svg", // Para un favicon adicional
    apple: "/aio-logo_v2.svg", // Para dispositivos Apple, si lo deseas
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black ">
        <header className="text-white">
          <NavBar />
        </header>

        <Providers>
          {children}
        </Providers>

        <footer className="text-white">Footer</footer>
      </body>
    </html>
  );
}
