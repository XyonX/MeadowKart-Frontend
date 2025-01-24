import { Architects_Daughter, Nunito, Poppins } from "next/font/google";
import "./globals.css";

// Configure Fonts with CSS Variables
const architectsDaughter = Architects_Daughter({
  variable: "--font-architects-daughter",
  subsets: ["latin"],
  weight: ["400"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

// Combine font configurations in a `className`
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${architectsDaughter.variable} ${nunito.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
