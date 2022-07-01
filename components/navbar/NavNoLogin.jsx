/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from 'next/image'
import styles from "./css/NavNoLogin.module.css";
import {
  Button,
  Container,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
// import { CheckLg } from "react-bootstrap-icons";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const NavNoLogin = () => {
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
                <Search className={styles.iconsearch}/>
              </button>
            </Form.Group>

            {/* <NavbarToggle aria-controls="basic-navbar-nav" /> */}
          </div>
          <div>
            <Button href="/register" className={styles.btn}>
              <img src="/assets/img/fi_log-in.png" alt="icon" width="20px" height="20px"/>
              <p className={styles.txt}>Register</p>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
