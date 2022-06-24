import Footer from "../footer/Footer"
import { NavigationBar } from "../navbar/NavigationBar"
import { NavLogin } from "../navbar/NavLogin"


export default function Layout({ children }) {
  return (
    <>
      {/* <NavigationBar/> */}
      <NavLogin/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
