import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Tecsup Bus - Sistema de Transporte Universitario",
    description: "Sistema de rastreo y gestión de transporte universitario de Tecsup",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} antialiased`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
