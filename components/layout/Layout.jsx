import Footer from "./Footer";
import { NavigationBar } from "./navbar/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
