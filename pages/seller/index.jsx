/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import styles from "./style.module.css";
import Layout from "../../components/general/Layout";
// import ListProduct from "../../components/home/ListProduct";
import ProdukCard from "../../components/produkcard/ProdukCard";

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
    link: "/book"
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
    link: ""
  },
  {
    id: 3,
    image: "/assets/img/ensiklopedia_tionghoa.jpg",
    judul: "5000 Tahun Ensiklopedia Tionghoa 1",
    pengarang: "Christine Dkk",
    kategori: "",
    harga: "76500",
    link: ""
  },
  {
    id: 4,
    image: "/assets/img/Boruto_12.jpg",
    judul: "Boruto - Naruto Next Generation Vol. 12",
    pengarang: "Masashi Kishimoto",
    kategori: "Fiksi",
    harga: "32000",
    link: ""
  },
  {
    id: 5,
    image: "/assets/img/Konspirasi-Alam-Semesta.jpg",
    judul: "Konspirasi Alam Semesta",
    pengarang: "Fiersa Besari",
    kategori: "Novel",
    harga: "63750",
    link: ""
  },
  {
    id: 6,
    image: "/assets/img/bara.jpg",
    judul: "Bara",
    pengarang: "Febrialdi R.",
    kategori: "Novel",
    harga: "75650",
    link:"/book/buyer"
  },
  {
    id: 7,
    image: "/assets/img/Hujan-Bulan-Juni-Serpihan-Sajak.jpg",
    judul: "Hujan Bulan Juni - Sepilihan Sajak",
    pengarang: "Sapardi Djoko Damono",
    kategori: "",
    harga: "100000",
    link: ""
  },
  {
    id: 8,
    image: "/assets/img/pinkan_melipat_jarak.jpg",
    judul: "Pingkan Melipat Jarak (Novel Kedua Trilogi Hujan Bulan Juni)",
    pengarang: "Sapardi Djoko Damono",
    kategori: "",
    harga: "48000",
    link: ""
  },
];

export default function Seller() {
  return (
    <Layout>
      <Container className={styles.allSeller}>
        <Navbar className={styles.navTop} expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                className={styles.navLogo}
                width={100}
                height={50}
                src="/assets/png/logoNav.png"
                alt="icon-"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form.Group className={styles.navSearch}>
                  <input
                    type="search"
                    placeholder="Cari di sini.."
                    aria-label="Search"
                    className={styles.formSearch}
                  />
                  <button type="search" className={styles.btnSearch}>
                    <Search className={styles.iconSearch}> </Search>
                  </button>
                </Form.Group>
              </Nav>
              <Nav className="justify-content-end">
                <Navbar.Brand>
                  <img src="/assets/png/fi_list.png" alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <img src="/assets/png/fi_bell.png" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <img src="/assets/png/fi_user.png" />
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* container dua */}
        <h3 className={styles.wordOne}>Daftar Jual Saya</h3>
        <Card className={styles.cardOneBorder}>
          <Card.Body className={styles.cardOne}>
            <img src="/assets/png/Rectangle.png" alt="picture_user" />
            <div className={styles.fillCard}>
              <Card.Text>Nama Penjual</Card.Text>
              <h6>Kota</h6>
            </div>
            <div className={styles.btnCard}>
              <Button variant="outline-dark">Edit</Button>
            </div>
          </Card.Body>
        </Card>
        {/* card two */}
        <Container className={styles.containerTwo}>
          <Card className={styles.cardTwo} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className={styles.cardTwoForm}>Kategori</Card.Title>
              <Form.Select
                className={styles.formCard}
                aria-label="Default select example"
              >
                <option>Semua Product</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                className={styles.formCard}
                aria-label="Default select example"
              >
                <option>Diminati</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                className={styles.formCard}
                aria-label="Default select example"
              >
                <option>Terjual</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Card.Body>
          </Card>
          <div className={styles.produkContainer}>
            <Card className={styles.cardPlus}>
              <Card.Body className={styles.cardFill}>
                <Button href="/" variant="">
                  <img src="/assets/png/fi_plus.png" alt="" />
                  <br />
                  Tambah Produk
                </Button>
              </Card.Body>
            </Card>
            {buku.map((a) => (
              <ProdukCard buku={a} key={a.id} />
            ))}
          </div>
        </Container>
      </Container>
    </Layout>
  );
}
