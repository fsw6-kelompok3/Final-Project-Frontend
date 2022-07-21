import Footer from "../footer/Footer"
import { useEffect, useState } from "react"
import { NavigationBar } from "../navbar/NavigationBar"
import { NavNoLogin } from "../navbar/NavNoLogin"
import { NavLogin } from "../navbar/NavLogin"
import { NavLoginAdmin } from "../navbar/NavLoginAdmin"


export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(<NavNoLogin />)

  const getNavbar = async () => {
    const token = await window.localStorage.getItem('token')
    const user = await window.localStorage.getItem('user')

    if (token) {
      console.log('This means you have a token!')
      if (JSON.parse(user).user.level === 'admin') {
        console.log('This means you are authorized, you are an admin')
        setNavbar(<NavLoginAdmin />)
      } else if (JSON.parse(user).user.level === 'user') {
        console.log('This means you are authorized, you are a user')
        setNavbar(<NavLogin />)
      } else {
        console.log('You are neither. What are you?')
      }
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
