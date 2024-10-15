import type { Metadata } from "next";
import "./globals.css";
import "icons/icomoon/style.css"
import Header from "components/Layout/Header";
import RecoilWrapper from 'components/Layout/RecoilWrapper'

export const metadata: Metadata = {
  title: "BMW | Participa en el sorteo exclusivo de BMW",
  description: "Regístrate y recibe tu código de participación para el sorteo exclusivo de BMW. ¡Es tu momento para ganar algo increíble!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body className={"antialiased"}>
        <Header/>
        <RecoilWrapper>
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
