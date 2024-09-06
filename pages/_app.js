import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <>
  <Navbar />

  <Component {...pageProps} />
  <Footer />
  <Cart />
  </>
}
