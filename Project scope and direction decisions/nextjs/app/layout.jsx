import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nathanfang.com"),
  title: {
    default: "Nathan Fang — Narrative · Systems · Distribution",
    template: "%s",
  },
  description:
    "I figure out why content works, then build the systems and coach the people that make it work again. Usually for startups who need attention and don't have a budget for it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        />
      </head>
      <body>
        <div style={{ minHeight: "100vh", background: "#f5f4f0" }}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
