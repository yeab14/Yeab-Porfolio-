import { GoogleTagManager } from "@next/third-parties/google";
import { Fraunces, Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Yeabsira Dereje Alemayhu — Backend Software Engineer",
  description:
    "Backend Software Engineer specializing in Spring Boot and NestJS. I build scalable, secure APIs and backend systems with a strong focus on clean architecture, performance, and maintainability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${serif.variable}`}>
      <body className={`${outfit.className} bg-[#090b0a] text-[#f4efe6] antialiased`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="h-px w-full bg-[#d6b48a]" />

        <main className="relative mx-auto min-h-screen max-w-[76rem] px-6 sm:px-10 lg:px-12">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}
