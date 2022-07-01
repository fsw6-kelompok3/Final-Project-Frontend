import Footer from "../footer/Footer"
import { NavigationBar } from "../navbar/NavigationBar"
import { NavNoLogin } from "../navbar/NavNoLogin"


export default function Layout({ children }) {
  return (
    <>
      {/* <NavigationBar/> */}
      <NavNoLogin/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
