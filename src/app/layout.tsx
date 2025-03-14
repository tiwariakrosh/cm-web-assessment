// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Code Mantra",
//   description: "Code Mantra Web Assessment",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} antialiased`}>{children}</body>
//     </html>
//   );
// }
//

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Mantra - Empowering Young Minds",
  description:
    "Help your children develop essential skills for the digital age.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
