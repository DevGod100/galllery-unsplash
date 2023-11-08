import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connectDB from "@/utils/database";
import Nav from "@/components/UI/NavBar/Nav";
import AuthProvider from "@/provider/AuthProvider";

connectDB();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Unsplash",
  description: "Upload and share images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
          <main>{children}</main>
          <ToastContainer position="bottom right" />
        </AuthProvider>
      </body>
    </html>
  );
}
