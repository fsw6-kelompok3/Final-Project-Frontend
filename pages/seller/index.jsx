/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
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

const buku = [
  {
    id: 1,
    image: "/assets/img/titik_nol.jpg",
    judul: "Titik Nol",
    pengarang: "Agustinus Wibowo",
    kategori: "Novel",
    deskripsi:
      "Perjalananku bukan perjalananmu Perjalananku adalah perjalananmu Jauh. Mengapa setiap orang terobsesi oleh kata itu? Marco Polo melintasi perjalanan panjang dari Venesia hingga negeri Mongol. Para pengelana lautan mengarungi samudra luas. Para pendaki menyabung nyawa menaklukkan puncak. Juga terpukau pesona kata “jauh”, si musafir menceburkan diri dalam sebuah perjalanan akbar keliling dunia. Menyelundup ke tanah terlarang di Himalaya, mendiami Kashmir yang misterius, hingga menjadi saksi kemelut perang dan pembantaian. Dimulai dari sebuah mimpi, ini adalah perjuangan untuk mencari sebuah makna. Hingga akhirnya setelah mengelana begitu jauh, si musafir pulang, bersujud di samping ranjang ibunya. Dan justru dari ibunya yang tidak pernah ke mana-mana itulah, dia menemukan satu demi satu makna perjalanan yang selama ini terabaikan. 'Agustinus telah menarik cakrawala yang jauh pada penulisan perjalanan (travel writing) di Indonesia. Penulisan yang dalam, pengalaman yang luar biasa, membuat tulisan ini seperti buku kehidupan. Titik Nol merupakan cara bertutur yang benar-benar baru dalam travel writing di negeri ini.' —Qaris Tajudin, editor Tempo dan penulis novel.",
    harga: "104000",
    link: "/book",
  },
  {
    id: 2,
    image: "/assets/img/10_Juta_Pertama_dari_Google_AdSense.jpg",
    judul: "10 Juta Pertama dari Google AdSense",
    pengarang: "Jefferly Helianthusonfri",
    kategori: "Teknologi",
    deskripsi:
      "Mau meraih pendapatan dari Google AdSense? Ingin membangun channel YouTube atau blog yang sukses dan bisa menghasilkan pendapatan dari internet? Jika ya, Google AdSense bisa jadi salah satu solusinya. Melalui Google AdSense, kita bisa menampilkan iklan guna menghasilkan pendapatan dari website/blog/channel YouTube/konten kita di internet. Buku ini adalah panduan lengkap untuk Anda yang ingin belajar tentang Google AdSense. Tak hanya itu, buku ini berisi panduan langkah demi langkah membangun website ataupun channel YouTube yang bisa Anda monetisasi dengan Google AdSense. Inilah berbagai hal menarik yang dibahas dalam buku ini. ● Pengenalan tentang Google AdSense dan cara kerjanya. ● Panduan lengkap membuat website/blog untuk pemula. Mulai dari awal hingga blog siap dipakai untuk Google AdSense. ● Tips dan panduan menulis konten blog yang bagus dan optimal. ● Panduan lengkap pengelolaan blog memakai WordPress. ● Cara, tips, dan panduan lengkap daftar Google AdSense agar lolos review. ● Cara menghasilkan pendapatan dari YouTube dengan Google AdSense. ● Panduan lengkap membuat dan mengedit video YouTube untuk pemula. ● Tips dan strategi jitu mengelola channel YouTube, hingga meningkatkan subscriber dan penonton YouTube. ● Cara-cara inspiratif monetisasi channel YouTube. Tunggu apalagi, segera dapatkan dan pelajari buku ini. Mulailah perjalanan menyenangkan Anda sebagai content creator di internet bersama Google AdSense.",
    harga: "52000",
    link: "",
  },
  {
    id: 3,
    image: "/assets/img/ensiklopedia_tionghoa.jpg",
    judul: "5000 Tahun Ensiklopedia Tionghoa 1",
    pengarang: "Christine Dkk",
    kategori: "",
    harga: "76500",
    link: "",
  },
  {
    id: 4,
    image: "/assets/img/Boruto_12.jpg",
    judul: "Boruto - Naruto Next Generation Vol. 12",
    pengarang: "Masashi Kishimoto",
    kategori: "Fiksi",
    harga: "32000",
    link: "",
  },
  {
    id: 5,
    image: "/assets/img/Konspirasi-Alam-Semesta.jpg",
    judul: "Konspirasi Alam Semesta",
    pengarang: "Fiersa Besari",
    kategori: "Novel",
    harga: "63750",
    link: "",
  },
  {
    id: 6,
    image: "/assets/img/bara.jpg",
    judul: "Bara",
    pengarang: "Febrialdi R.",
    kategori: "Novel",
    harga: "75650",
    link: "/book/buyer",
  },
  {
    id: 7,
    image: "/assets/img/Hujan-Bulan-Juni-Serpihan-Sajak.jpg",
    judul: "Hujan Bulan Juni - Sepilihan Sajak",
    pengarang: "Sapardi Djoko Damono",
    kategori: "",
    harga: "100000",
    link: "",
  },
  {
    id: 8,
    image: "/assets/img/pinkan_melipat_jarak.jpg",
    judul: "Pingkan Melipat Jarak (Novel Kedua Trilogi Hujan Bulan Juni)",
    pengarang: "Sapardi Djoko Damono",
    kategori: "",
    harga: "48000",
    link: "",
  },
];

export default function Seller() {
    return (
    <Layout>
      <Container className={styles.allSeller}>
        {/* container dua */}
        <h3 className={styles.wordOne}>Daftar Jual Saya</h3>
        <Card className={styles.cardOneBorder}>
          <Card.Body className={styles.cardOne}>
            <img src="/assets/png/Rectangle.png" alt="picture_user" />
            <div className={styles.fillCard}>
              <p className={styles.namaPenjual}>Nama Penjual</p>
              <h6 className={styles.address}>Kota</h6>
            </div>
            <div className={styles.btnCard}>
              <Button className={styles.btnEdit}>Edit</Button>
            </div>
          </Card.Body>
        </Card>
        {/* card two */}
        <div className={styles.containerTwo}>
          <div className={styles.cardTwo}>
            <p className={styles.header}>Kategori</p>
            <Link href="/">
              <a>
                <div className={styles.item}>
                  <Box className={styles.icon} />
                  <p className={styles.itemText}>Semua Produk</p>
                  <ChevronRight className={styles.icon} />
                </div>
              </a>
            </Link>
            <hr />
            <Link href="/">
              <a>
                <div className={styles.item}>
                  <Heart className={styles.icon} />
                  <p className={styles.itemText}>Diminati</p>
                  <ChevronRight className={styles.icon} />
                </div>
              </a>
            </Link>
            <hr />
            <Link href="/">
              <a>
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
              <Link href="/">
                <a>
                  <p className={styles.txtCardPlus}>
                    +
                    <br />
                    Tambah Produk
                  </p>
                </a>
              </Link>
            </div>
            {buku.map((a) => (
              <ProdukCard buku={a} key={a.id} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
    );
}
