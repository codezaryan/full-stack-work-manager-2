import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="flex-grow mt-20">
            {children}
          </div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
