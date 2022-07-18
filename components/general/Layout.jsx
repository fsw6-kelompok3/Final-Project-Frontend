import Footer from "../footer/Footer"
import { useEffect, useState } from "react"
import { NavigationBar } from "../navbar/NavigationBar"
import { NavNoLogin } from "../navbar/NavNoLogin"
import { NavLogin } from "../navbar/NavLogin"


export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(<NavNoLogin />)

  const getNavbar = async () => {
    const token = await window.localStorage.getItem('token')

    if (token) {
      console.log('This means you have a token!')
      setNavbar(<NavLogin />)
    } else {
      console.log('Your token is not here. Login first')
      setNavbar(<NavNoLogin />)
    }

  }

  useEffect(() => {
    getNavbar()
  }, [])

  return (
    <>
      {navbar}
      <main>{children}</main>
      <Footer />
    </>
  );
}
