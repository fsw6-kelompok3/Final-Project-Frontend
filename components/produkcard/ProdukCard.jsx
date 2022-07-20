/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./css/ProdukCard.module.css";
import { useRouter } from "next/router";

export default function ProdukCard(props) {
  const router = useRouter()
  const { buku, i } = props;

  return (
    <>
      <div key={i} className={styles.card} onClick={() => router.push(`/dashboard/book/detail/${buku.id}`)}>
        <img
          src={buku.gambar[0]}
          alt={buku.nama}
          className={styles.imgProduk}
        />
        <p className={styles.pengarang}>{buku.pengarang}</p>

        <p className={styles.judul}>{buku.nama}</p>

        <p className={styles.harga}>Rp {buku.harga}</p>
      </div>
    </>
  );
}
