/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import styles from "./Book.module.css";
import Layout from "../../../components/general/Layout";
import { Button, Container, Carousel } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from '../../api/axios'

export default function Book() {
    const router = useRouter()

    const [buku, setBuku] = useState([])

    const handlePreview = async () => {
        const data = window.localStorage.getItem('preview')

        setBuku(data)
    }

    useEffect(() => {
        handlePreview()
    }, [])

    return (
        <>
            <Layout>
                <Container>
                    {buku.length > 0
                        ? buku.map((a, i) => {
                            return (
                                <div key={i} className={styles.container}>
                                    <div className={styles.sideLeft}>

                                        <Carousel interval={null} className={styles.carousel}>
                                            {a.gambar.map((data, i) => (
                                                <Carousel.Item key={i}>
                                                    <img src={data} alt="buku" className={styles.img} />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>

                                        <div className={styles.containerDeskripsi}>
                                            <p className={styles.titleDeskripsi}>Deskripsi</p>
                                            <p className={styles.deskripsi}>{a.deskripsi}</p>
                                        </div>
                                    </div>
                                    <div className={styles.sideRight}>
                                        <div className={styles.addProduk}>
                                            <p className={styles.judul}>{a.nama}</p>
                                            <p className={styles.pengarang}>{a.pengarang}</p>
                                            <p className={styles.harga}>{a.harga}</p>

                                            <Link href="/dashboard">
                                                <a>
                                                    <Button className={styles.btnTerbitkan} type="search">
                                                        <p className={styles.text}>Terbitkan</p>
                                                    </Button>
                                                </a>
                                            </Link>
                                            <Link href="/dashboard/book/detail">
                                                <a>
                                                    <Button className={styles.btnEdit} type="search">
                                                        <p className={styles.text}>Edit</p>
                                                    </Button>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className={styles.identitasPenjual}>
                                            <img
                                                src={a.penjual_barang.foto}
                                                alt="penjual"
                                                className={styles.imgPenjual}
                                            />
                                            <div className={styles.box}>
                                                <p className={styles.namaPenjual}>{a.penjual_barang.nama}</p>
                                                <p className={styles.kota}>{a.penjual_barang.kota}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : "Loading..."}
                </Container>
            </Layout>
        </>
    );
}
