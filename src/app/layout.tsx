import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const borela = localFont({
  src: [
    {
      path: "../fonts/borela/BORELA.ttf",
      style: "normal",
    },
  ],
  variable: "--borela",
});

export const mombay = localFont({
  src: [
    {
      path: "../fonts/mombay/Thorce.ttf",
      style: "normal",
    },
  ],
  variable: "--mombay",
});

export const montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat/static/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat/static/Montserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${borela.variable} ${montserrat.variable} ${mombay.variable}`}
    >
      <body className="bg-foreground antialiased">
        <Navbar />
        <div
          className={`relative flex min-h-screen items-center mx-auto flex-col`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
