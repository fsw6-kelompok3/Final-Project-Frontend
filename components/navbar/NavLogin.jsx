/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import Image from 'next/image'
import styles from "./css/NavLogin.module.css";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
  Modal,
} from "react-bootstrap";
import { Bell, ListUl, Person, Search } from "react-bootstrap-icons";
import Link from "next/link";
// import { CheckLg } from "react-bootstrap-icons";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const NavLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Link href="/">
              <a>
                <ListUl className={styles.btnIcon} />
              </a>
            </Link>

            <Link href="/offer-info">
              <a>
                <Bell className={styles.btnIcon} />
              </a>
            </Link>

            <Dropdown align="end">
              <Dropdown.Toggle className={styles.btnDropdown}>
                <Person className={styles.btnIconDropdown} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <p className={styles.brand}>SECOND HAND BOOK</p>
                <Dropdown.Item href="/profile" className={styles.itemDropdown}>
                  <Person className={styles.subIcon} />
                  Profil
                </Dropdown.Item>
                <Dropdown.Item href="/" className={styles.itemLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
