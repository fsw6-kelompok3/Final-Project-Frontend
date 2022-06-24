/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./css/ProdukCard.module.css";

export default function ProdukCard(props) {
  const { buku } = props;
  
  return (
    <>
      <div className={styles.card}>
        <Link href="/">
          <a>
            <img
              src={buku.image}
              alt={buku.judul}
              className={styles.imgProduk}
            />
          </a>
        </Link>
        <p className={styles.pengarang}>{buku.pengarang}</p>
        <Link href="/">
          <a>
            <p className={styles.judul}>{buku.judul}</p>
          </a>
        </Link>
        <p className={styles.harga}>Rp {buku.harga}</p>
      </div>
    </>
  );
}
