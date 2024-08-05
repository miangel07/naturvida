import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { RefreshProvider } from "@/context";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaturVida",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>

          <RefreshProvider>
            <Provider>{children}</Provider>
          </RefreshProvider>

        </PrimeReactProvider>
      </body>
    </html>
  );
}
