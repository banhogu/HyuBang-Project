import { Inter } from "next/font/google";
import { GlobalLayout } from '../components/GlobalLayout';
import "./globals.css";
import "./reset.css"
import AuthProvider from "@/context/AuthProvider";
import { SearchContext } from '@/context/SearchContext'; import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { CartToast } from '../components/Toast/CartToast';
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}


