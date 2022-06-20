/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./css/Book.module.css";
import Layout from "../../components/general/Layout";
import { Button, Container, Carousel } from "react-bootstrap";
import Link from "next/link";

const book = [
  { id: 1, image: "/assets/img/titik_nol.jpg" },
  { id: 2, image: "/assets/img/titik_nol_1.jpg" },
  { id: 3, image: "/assets/img/titik_nol_2.jpg" },
];

export default function index() {
  return (
    <>
      <Layout>
        <Container className={styles.container}>
          <div className={styles.sideLeft}>
            <Carousel className={styles.carousel}>
              {book.map((a) => (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item>
                  <img src={a.image} alt="book" className={styles.img} />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className={styles.containerDeskripsi}>
              <p className={styles.titleDeskripsi}>Deskripsi</p>
              <p className={styles.deskripsi}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                odit quibusdam cumque laboriosam commodi aperiam rerum illo
                possimus? Ullam eos illum saepe eveniet veniam eligendi quis
                numquam voluptatum placeat ipsa? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus quaerat perferendis, sit
                nisi eius adipisci excepturi labore necessitatibus repellat
                nesciunt cumque molestiae eaque ratione repellendus aliquam
                accusamus assumenda impedit illo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Alias aspernatur officiis ea
                mollitia autem ut quod itaque, eaque dicta iure facere incidunt,
                porro suscipit velit dolor rerum similique laboriosam. Tenetur!
              </p>
            </div>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.addProduk}>
              <p className={styles.judul}>Titik Nol</p>
              <p className={styles.pengarang}>Agustinus Wibowo</p>
              <p className={styles.harga}>Rp 100000</p>

              <Link href="">
                <a>
                  <Button className={styles.btnTerbitkan} type="search">
                    <p className={styles.text}>Terbitkan</p>
                  </Button>
                </a>
              </Link>
              <Link href="">
                <a>
                  <Button className={styles.btnEdit} type="search">
                    <p className={styles.text}>Edit</p>
                  </Button>
                </a>
              </Link>
            </div>

            <div className={styles.identitasPenjual}>
              <img src="/assets/img/fotoPenjual.png" alt="penjual" className={styles.imgPenjual} />
              <div className={styles.box}>
                <p className={styles.namaPenjual}>Nama Penjual</p>
                <p className={styles.kota}>Kota</p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
