import Footer from "../footer/Footer"
import { NavigationBar } from "../navbar/NavigationBar"


export default function Layout({ children }) {
  return (
    <>
      <NavigationBar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
