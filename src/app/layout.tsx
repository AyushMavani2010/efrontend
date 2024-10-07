import { CartProvider } from "../componets/CartContext"; // Import CartProvider
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {" "}
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
