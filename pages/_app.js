import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <>
  <Navbar />

  <Component {...pageProps} />
  <Footer />
  <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </>
}
