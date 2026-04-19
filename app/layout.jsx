import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jamesgeiger.dev"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "James Geiger | Developer Portfolio",
    template: "%s | James Geiger",
  },
  description:
    "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences.",
  keywords: [
    "developer portfolio",
    "next.js portfolio",
    "frontend developer",
    "ui engineer",
    "web performance",
  ],
  openGraph: {
    title: "James Geiger | Developer Portfolio",
    description:
      "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Geiger | Developer Portfolio",
    description:
      "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b17" },
    { media: "(prefers-color-scheme: light)", color: "#eef4ff" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var theme = stored || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                  document.documentElement.dataset.theme = theme;
                } catch (e) {
                  document.documentElement.dataset.theme = "dark";
                }
              })();
            `,
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
