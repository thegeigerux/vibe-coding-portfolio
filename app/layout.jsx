import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jamesgeiger.dev"),
  title: {
    default: "James Geiger | Developer Portfolio",
    template: "%s | James Geiger"
  },
  description:
    "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences.",
  keywords: [
    "developer portfolio",
    "next.js portfolio",
    "frontend developer",
    "ui engineer",
    "web performance"
  ],
  openGraph: {
    title: "James Geiger | Developer Portfolio",
    description:
      "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "James Geiger | Developer Portfolio",
    description:
      "Modern developer portfolio showcasing frontend engineering, product thinking, and immersive web experiences."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
            `
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
