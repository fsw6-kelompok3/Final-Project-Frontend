/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./css/ListProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const buku = [
  {
    image: "/assets/img/titik_nol.jpg",
    judul: "Titik Nol",
    pengarang: "Agustinus Wibowo",
    kategori: "Novel",
    deskripsi:
      "Perjalananku bukan perjalananmu Perjalananku adalah perjalananmu Jauh. Mengapa setiap orang terobsesi oleh kata itu? Marco Polo melintasi perjalanan panjang dari Venesia hingga negeri Mongol. Para pengelana lautan mengarungi samudra luas. Para pendaki menyabung nyawa menaklukkan puncak. Juga terpukau pesona kata “jauh”, si musafir menceburkan diri dalam sebuah perjalanan akbar keliling dunia. Menyelundup ke tanah terlarang di Himalaya, mendiami Kashmir yang misterius, hingga menjadi saksi kemelut perang dan pembantaian. Dimulai dari sebuah mimpi, ini adalah perjuangan untuk mencari sebuah makna. Hingga akhirnya setelah mengelana begitu jauh, si musafir pulang, bersujud di samping ranjang ibunya. Dan justru dari ibunya yang tidak pernah ke mana-mana itulah, dia menemukan satu demi satu makna perjalanan yang selama ini terabaikan. 'Agustinus telah menarik cakrawala yang jauh pada penulisan perjalanan (travel writing) di Indonesia. Penulisan yang dalam, pengalaman yang luar biasa, membuat tulisan ini seperti buku kehidupan. Titik Nol merupakan cara bertutur yang benar-benar baru dalam travel writing di negeri ini.' —Qaris Tajudin, editor Tempo dan penulis novel.",
    harga: "104000",
  },
  {
    image: "/assets/img/10_Juta_Pertama_dari_Google_AdSense.jpg",
    judul: "10 Juta Pertama dari Google AdSense",
    pengarang: "Jefferly Helianthusonfri",
    kategori: "Teknologi",
    deskripsi:
      "Mau meraih pendapatan dari Google AdSense? Ingin membangun channel YouTube atau blog yang sukses dan bisa menghasilkan pendapatan dari internet? Jika ya, Google AdSense bisa jadi salah satu solusinya. Melalui Google AdSense, kita bisa menampilkan iklan guna menghasilkan pendapatan dari website/blog/channel YouTube/konten kita di internet. Buku ini adalah panduan lengkap untuk Anda yang ingin belajar tentang Google AdSense. Tak hanya itu, buku ini berisi panduan langkah demi langkah membangun website ataupun channel YouTube yang bisa Anda monetisasi dengan Google AdSense. Inilah berbagai hal menarik yang dibahas dalam buku ini. ● Pengenalan tentang Google AdSense dan cara kerjanya. ● Panduan lengkap membuat website/blog untuk pemula. Mulai dari awal hingga blog siap dipakai untuk Google AdSense. ● Tips dan panduan menulis konten blog yang bagus dan optimal. ● Panduan lengkap pengelolaan blog memakai WordPress. ● Cara, tips, dan panduan lengkap daftar Google AdSense agar lolos review. ● Cara menghasilkan pendapatan dari YouTube dengan Google AdSense. ● Panduan lengkap membuat dan mengedit video YouTube untuk pemula. ● Tips dan strategi jitu mengelola channel YouTube, hingga meningkatkan subscriber dan penonton YouTube. ● Cara-cara inspiratif monetisasi channel YouTube. Tunggu apalagi, segera dapatkan dan pelajari buku ini. Mulailah perjalanan menyenangkan Anda sebagai content creator di internet bersama Google AdSense.",
    harga: "52000",
  },
  {
    image: "/assets/img/ensiklopedia_tionghoa.jpg",
    judul: "5000 Tahun Ensiklopedia Tionghoa 1",
    pengarang: "Christine Dkk",
    kategori: "",
    harga: "76500",
  },
  {
    image: "/assets/img/Boruto_12.jpg",
    judul: "Boruto - Naruto Next Generation Vol. 12",
    pengarang: "Masashi Kishimoto",
    kategori: "Fiksi",
    harga: "32000",
  },
  {
    image: "/assets/img/Konspirasi-Alam-Semesta.jpg",
    judul: "Konspirasi Alam Semesta",
    pengarang: "Fiersa Besari",
    kategori: "Novel",
    harga: "63750",
  },
  {
    image: "/assets/img/bara.jpg",
    judul: "Bara",
    pengarang: "Febrialdi R.",
    kategori: "Novel",
    harga: "75650",
  },
  {
    image: "/assets/img/Hujan-Bulan-Juni-Serpihan-Sajak.jpg",
    judul: "Hujan Bulan Juni - Sepilihan Sajak",
    pengarang: "Sapardi Djoko Damono",
    kategori: "",
    harga: "100000",
  },
];

export default function ListProduct() {
  const router = useRouter();
  return (
    <>
      <Container>
        <h1 className={styles.title}>Telusuri Kategori</h1>
        <div className={styles.btnFilterContainer}>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Semua</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Novel</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Fiksi</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Horror</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Teknologi</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Ensiklopedia</p>
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.btnContainer}>
          {buku.map((a) => (
            // eslint-disable-next-line react/jsx-key
            <Link href="/">
              <a>
                <div className={styles.card}>
                  <img
                    src={a.image}
                    alt={a.judul}
                    className={styles.imgProduk}
                  />
                  <p className={styles.pengarang}>{a.pengarang}</p>
                  <p className={styles.judul}>{a.judul}</p>
                  <p className={styles.harga}>Rp {a.harga}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
