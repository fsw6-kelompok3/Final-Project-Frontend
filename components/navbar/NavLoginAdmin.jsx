/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
// import Image from 'next/image'
import styles from "./css/NavLogin.module.css";
import {
  Button,
  Badge,
  Container,
  Dropdown,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
  Modal,
} from "react-bootstrap";
import { Bell, Dot, ListUl, Person, Search } from "react-bootstrap-icons";
import Link from "next/link";
// import { CheckLg } from "react-bootstrap-icons";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useRouter } from "next/router";
import axios from "axios"

export const NavLoginAdmin = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('')
  const [transaksi, setTransaksi] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter()

  const redirect = async () => {
    const data = window.localStorage.getItem('user')
    setUser(data)
    console.log(data)
  }

  const logout = async () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    router.push('/login')
  }

  const getTransaksi = async () => {
    const token = window.localStorage.getItem('token')
    try {
      const response = await axios.get('https://secondhand-6-3-staging.herokuapp.com/transaksi/seller', {
        headers: {
          Token: token
        }
      })

      console.log(response.data.data)
      setTransaksi(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTransaksi()
  }, [])


  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div className={styles.box1}>
            <NavbarBrand href="/">
              <img
                src="/assets/img/logo.png"
                alt="logo"
                width="100px"
                height="34px"
              />
            </NavbarBrand>

            <Form.Group className={styles.search}>
              <input
                type="search"
                placeholder="Cari di sini.."
                aria-label="Search"
                className={styles.formsearch}
              />
              <button type="search" className={styles.btnsearch}>
                <Search className={styles.iconsearch} />
              </button>
            </Form.Group>

            {/* <NavbarToggle aria-controls="basic-navbar-nav" /> */}
          </div>
          <div className="d-flex">
            <Link href="/dashboard">
              <a>
                <ListUl
                  className={styles.btnIcon}
                  onClick={() => {
                  }}
                />
              </a>
            </Link>

            {/**
            <Link href="/offer-info">
              <a>
                <Bell className={styles.btnIcon} />
              </a>
            </Link>
            */ }
            <Dropdown align="end">
              <Dropdown.Toggle className={styles.btnDropdown}>
                <Bell className={styles.btnIconDropdown} />
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.menuNotif}>
                {transaksi.map((a, i) => {
                  return (
                    <div key={i}>
                      <Dropdown.Item
                        className={styles.boxAttributeProduct}
                        onClick={() => router.push(`/offer-info`)}>
                        <img
                          src={a.nama_buku.gambar[0]}
                          alt="product"
                          className={styles.imgProduct}
                        />

                        <div className={styles.boxDetailProduct}>
                          <div className={styles.boxDetailTop}>
                            <p className={styles.subTitle}>Penawaran produk</p>
                            <p className={styles.dateTime}>
                              {Date(a.updatedAt)}<Dot className={styles.dot} />
                            </p>
                          </div>
                          <div className={styles.boxDetailBottom}>
                            <p className={styles.productName}>{a.nama_buku.nama}</p>
                            <p className={styles.price}>Rp {a.nama_buku.harga}</p>
                            <p className={styles.offer}>Ditawar Rp {a.harga_tawar}</p>
                            <p className={styles.offer}>Status Transaksi :{a.status_penjualan== null?' Belum Terkonfirmasi' :a.status_penjualan== true?' Berhasil' : ' Gagal'} </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </div>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown align="end">
              <Dropdown.Toggle className={styles.btnDropdown}>
                <Person className={styles.btnIconDropdown} />
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.menuProfil}>
                <p className={styles.brand}>SECOND HAND BOOK</p>
                <Dropdown.Item href="/profile" className={styles.itemDropdown}>
                  <Person className={styles.subIcon} />
                  Edit Profil
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemLogout} onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
