import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation Agency | Pakistan's Premier AI Growth Systems",
  description:
    "Zapioai helps businesses in United States, Canada, UK, UAE, Australia automate lead generation, follow-ups, customer support, and operations — so they grow faster with less effort.",
  keywords: "AI automation, lead generation, sales automation, Pakistan, WhatsApp automation, chatbot",
  authors: [{ name: "Zapioai" }],
  openGraph: {
    title: "Zapioai — AI Automation Agency",
    description: "We Help Businesses Automate Sales, Marketing & Operations Using AI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: "#050b14" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
