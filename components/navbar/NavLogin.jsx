/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from 'next/image'
import styles from "./css/NavLogin.module.css";
import {
  Button,
  Container,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
} from "react-bootstrap";
import { Bell, ListUl, Person, Search } from "react-bootstrap-icons";
import Link from "next/link";
// import { CheckLg } from "react-bootstrap-icons";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const NavLogin = () => {
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
          <div>
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

            <Link href="/profile">
              <a>
                <Person className={styles.btnIcon} />
              </a>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
