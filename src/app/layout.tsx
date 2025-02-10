import "./globals.css";
import localFont from "next/font/local"

const borela = localFont({
  src:[
    {
      path: "../fonts/borela/BORELA.ttf",
      style: "normal",
    },
  ],
  variable: "--borela",
})

const montserrat = localFont({
  src: [
    { path: "../fonts/static/Montserrat-Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/static/Montserrat-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../fonts/static/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/static/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/static/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/static/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/static/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/static/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/static/Montserrat-Black.ttf", weight: "900", style: "normal" },
    { path: "../fonts/static/Montserrat-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../fonts/static/Montserrat-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../fonts/static/Montserrat-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/static/Montserrat-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/static/Montserrat-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../fonts/static/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../fonts/static/Montserrat-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/static/Montserrat-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../fonts/static/Montserrat-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--montserrat",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
