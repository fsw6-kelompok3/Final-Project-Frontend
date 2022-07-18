/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/ListProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import ProdukCard from "../produkcard/ProdukCard";

const ListProduct = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const response = await axios.get(
        `https://secondhand-6-3-staging.herokuapp.com/user/buku`
      );
      console.log(response);
      const data = await response.data.data;
      console.log(data);

      setBooks(data);
    };
    postData();
  }, []);

  // console.log(books);

  return (
    <>
      <Container>
        <h1 className={styles.title}>Telusuri Kategori</h1>
        <div className={styles.btnFilterContainer}>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Semua</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Novel</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Fiksi</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Horror</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Teknologi</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Ensiklopedia</p>
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.produkContainer}>
          {books
            ? books.map((book, i) => {
                return (
                  <div key={i} className={styles.card}>
                    <Link href={`/book/${book.id}`}>
                      <a>
                        <img
                          src={book.gambar[0]}
                          alt={book.nama}
                          className={styles.imgProduk}
                        />
                      </a>
                    </Link>
                    <p className={styles.pengarang}>{book.pengarang}</p>
                    <Link href={`/book/${book.id}`}>
                      <a>
                        <p className={styles.judul}>{book.nama}</p>
                      </a>
                    </Link>
                    <p className={styles.harga}>Rp {book.harga}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </Container>
    </>
  );
};

export default ListProduct;
