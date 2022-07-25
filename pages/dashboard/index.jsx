/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Form, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import styles from "./style.module.css";
import Layout from "../../components/general/Layout";
// import ListProduct from "../../components/home/ListProduct";
import ProdukCard from "../../components/produkcard/ProdukCard";
import {
  Box,
  Heart,
  CurrencyDollar,
  ChevronRight,
} from "react-bootstrap-icons";
import Link from "next/link";
import axios from '../api/axios'

export default function Seller() {
  const [namaPenjual, setNamaPenjual] = useState('');
  const [kotaPenjual, setKotaPenjual] = useState('');
  const [gambarPenjual, setGambarPenjual] = useState('');
  const [buku, setBuku] = useState([]);

  const getData = async () => {
    const token = window.localStorage.getItem('token')
    try {
      const data = await axios.get('/seller/buku', {
        withCredentials: true,
        headers: {
          Token: token
        }
      });
      const user = data.data.data[0]

      setBuku(data.data.data[0].buku)
      setNamaPenjual(user.nama)
      setKotaPenjual(user.kota)
      setGambarPenjual(user.foto)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <Container className={styles.allSeller}>
        {/* container dua */}
        <h3 className={styles.wordOne}>Daftar Jual Saya</h3>
        <Card className={styles.cardOneBorder}>
          <Card.Body className={styles.cardOne}>
            <img src={gambarPenjual !== null
              ? gambarPenjual
              : "/assets/img/pict.png"} alt="picture_user" />
            <div className={styles.fillCard}>
              <p className={styles.namaPenjual}>{namaPenjual}</p>
              <h6 className={styles.address}>{kotaPenjual}</h6>
            </div>
            <Link href="/profile">
              <div className={styles.btnCard}>
                <Button className={styles.btnEdit}>Edit</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>
        {/* card two */}
        <div className={styles.containerTwo}>
          <div className={styles.cardTwo}>
            <p className={styles.header}>Kategori</p>
            <Link href="/dashboard">
              <a className={styles.headerLink}>
                <div className={styles.item}>
                  <Box className={styles.icon} />
                  <p className={styles.itemText}>Semua Produk</p>
                  <ChevronRight className={styles.icon} />
                </div>
              </a>
            </Link>
            <hr />
            <Link href="/dashboard/diminati">
              <a className={styles.headerLink}>
                <div className={styles.item}>
                  <Heart className={styles.icon} />
                  <p className={styles.itemText}>Diminati</p>
                  <ChevronRight className={styles.icon} />
                </div>
              </a>
            </Link>
            <hr />
            <Link href="/dashboard/terjual">
              <a className={styles.headerLink}>
                <div className={styles.item}>
                  <CurrencyDollar className={styles.icon} />
                  <p className={styles.itemText}>Terjual</p>
                  <ChevronRight className={styles.icon} />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.produkContainer}>
            <div className={styles.cardPlus}>
              <Link href="/dashboard/book/add">
                <a className={styles.headerLink}>
                  <p className={styles.txtCardPlus}>
                    +
                    <br />
                    Tambah Produk
                  </p>
                </a>
              </Link>
            </div>
            {buku
              ? buku.map((buku, i) => (
                <ProdukCard buku={buku} key={i} />
              ))
              : "It's empty..."}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
