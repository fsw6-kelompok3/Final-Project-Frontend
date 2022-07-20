/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./css/ProdukCard.module.css";

export default function ProdukCard(props) {
  const { buku } = props;

  return (
    <>
      <div className={styles.card}>
        <Link href="/book">
          <a>
            <img
              src={buku.gambar[0]}
              alt={buku.nama}
              className={styles.imgProduk}
            />
          </a>
        </Link>
        <p className={styles.pengarang}>{buku.pengarang}</p>
        <Link href="/">
          <a>
            <p className={styles.judul}>{buku.nama}</p>
          </a>
        </Link>
        <p className={styles.harga}>Rp {buku.harga}</p>
      </div>
    </>
  );
}
