import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Pilates | Premium Reformer Pilates, EMS Training & Physiotherapy Bangalore",
  description: "Experience Kalyan Nagar's premium wellness studio. Expert-led Reformer Pilates, EMS Training, and Physiotherapy programs designed by Dr. Govinda Raju S to improve posture, mobility, strength, and recovery.",
  keywords: [
    "Dr Pilates Kalyan Nagar",
    "Reformer Pilates Kalyan Nagar",
    "Pilates Studio Bangalore",
    "EMS Training Bangalore",
    "Physiotherapy Kalyan Nagar",
    "Reformer Pilates Bangalore",
    "Pilates Classes Near Me",
    "Dr Govinda Raju S",
    "Clinical Pilates Bangalore"
  ],
  authors: [{ name: "Dr. Govinda Raju S" }],
  openGraph: {
    title: "Dr Pilates | Luxury Reformer Pilates, EMS & Physiotherapy Studio",
    description: "Expert-led clinical wellness studio in Kalyan Nagar, Bangalore. Transform your posture, strength, and recovery.",
    url: "https://drpilates.in",
    siteName: "Dr Pilates",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Pilates | Luxury Wellness & Clinical Movement Studio",
    description: "Expert-led Reformer Pilates, EMS Training, and Physiotherapy in Kalyan Nagar, Bangalore.",
  },
  alternates: {
    canonical: "https://drpilates.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Dr Pilates - Kalyan Nagar",
                "image": "https://drpilates.in/images/reformer_studio.png",
                "telephone": "+91 88922 36442",
                "url": "https://drpilates.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3rd Floor, Y4 Heights Building, 6th Main Rd, Above Starbucks Coffee, HRBR Layout 2nd Block, Kalyan Nagar",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560043",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 13.019438,
                  "longitude": 77.640994
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "06:00",
                  "closes": "20:00"
                },
                "priceRange": "$$$"
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Dr Pilates - Doddagubbi",
                "image": "https://drpilates.in/images/reformer_studio.png",
                "telephone": "+91 88922 36442",
                "url": "https://drpilates.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ANR Arcade, 2nd floor, Doddagubbi Main Road, Opposite Medi Derma Hospital, Near Legacy School",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560077",
                  "addressCountry": "IN"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "06:00",
                  "closes": "20:00"
                },
                "priceRange": "$$$"
              }
            ])
          }}
        />

        {/* Decorative Global Background Glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="glow-orb glow-orb-primary -top-40 -left-40 animate-pulse-slow"></div>
          <div className="glow-orb glow-orb-coral top-1/2 -right-40 animate-pulse-slow" style={{ animationDelay: "-3s" }}></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow pb-16 md:pb-0">{children}</main>
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
