import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Yeabsira Dereje - Software Engineer",
  description:
    "I am a versatile and strategic Software Engineer with expertise in both frontend and backend development, specializing in React, Next.js, Vue.js, Spring Boot, Nest.js, FastAPI, and GraphQL. I excel in building scalable, high-performance systems while maintaining clean code principles and industry best practices. With experience in designing e-commerce platforms, optimizing databases, implementing OAuth authentication, and creating robust APIs, I deliver solutions that are efficient, maintainable, and secure. My approach combines strong technical proficiency with a focus on structured workflows and intelligent system design.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#121212] to-[#090909] border-[#1b2c68a0]`}>

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        
        {/* Toast Notification */}
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

        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {/* Navbar */}
          <Navbar />

          {/* Dynamic Content */}
          <div className="transition-all duration-300 ease-in-out">{children}</div>
          
          {/* Scroll-to-Top */}
          <ScrollToTop />

        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
