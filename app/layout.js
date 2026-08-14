import { Oswald, Roboto_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Coronavirus Covid-19 Virus Data — Global Data Dashboard",
  description: "Data visualisation of the Covid-19 Pandemic",
  openGraph: {
    title: "Coronavirus Covid-19 Data Dashboard",
    description: "Visualising the global pandemic",
    type: "article",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
