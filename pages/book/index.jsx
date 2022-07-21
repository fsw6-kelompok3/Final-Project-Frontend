/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/ListProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Index = () => {
  // const books = data.data;
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [kategori, setKategori] = useState([])
  const [kategoriValue, setKategoriValue] = useState('')

  // console.log("jsjjsjs", books);
  const getKategori = async () => {
    const response = await axios.get('https://secondhand-6-3-staging.herokuapp.com/v1/kategori')

    const data = await response.data
    // console.log(data.data)
    setKategori(data.data)
  }

  const handleFilterKategori = async () => {
    const response = await axios.get('https://secondhand-6-3-staging.herokuapp.com/user/buku/kategori')

    const data = await response.data
    // console.log(data.data)
    console.log(data)
  }

  useEffect(() => {
    getKategori()
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
          {kategori.map(kategori =>
            <a key={kategori.id}>
              <Button
                className={styles.btnFilterActive}
                type="search"
                onClick={handleFilterKategori}>
                <Search className={styles.icon} />
                <p className={styles.text}>{kategori.jenis_buku}</p>
              </Button>
            </a>
          )}
        </div>
        <div className={styles.produkContainer}>
          {books
            ? books.map((book, i) => {
              // return <ProdukCard key={i} props={book}/>
              return (
                <div key={i} className={styles.card}>
                  <img
                    src={book.gambar[0]}
                    alt={book.nama}
                    className={styles.imgProduk}
                    onClick={() => router.push(`/book/${book.id}`)} //post id buku ke /book/id
                  />
                  <p className={styles.pengarang}>{book.pengarang}</p>

                  <p
                    className={styles.judul}
                    onClick={() => router.push(`/book/${book.id}`)}
                  >
                    {book.nama}
                  </p>

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

export default Index;
