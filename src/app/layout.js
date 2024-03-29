import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Tours and travel",
  description: "Lets travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <nav className="bg-blue-500">
          <div className="relative top-[6px] bg-white">
            <div className="px-2 w-full">
              <Navbar />
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
