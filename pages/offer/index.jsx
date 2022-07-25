/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/OfferInfo.module.css";
import { Button, Container, Modal } from "react-bootstrap";
import Layout from "../../components/general/Layout";
import { ArrowLeftShort, Whatsapp } from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router"
import axios from "axios"

export default function Index(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValues, setFormValues] = useState({ transaksi: "" });

    const [transaksiDetail, setTransaksiDetail] = useState();
    const [transaksi, setTransaksi] = useState([])


    const router = useRouter()
    const routes = router.query

    const getTransaksi = async () => {
        const token = window.localStorage.getItem('token')
        try {
            const response = await axios.get('https://secondhand-6-3-staging.herokuapp.com/transaksi/seller', {
                headers: {
                    Token: token
                }
            })

            console.log(response.data.data)
            setTransaksi(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // update inputs value
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Form Submit function
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    // console.log(formValues.transaksi);

    useEffect(() => {
        getTransaksi()
    }, [])

    return (
        <>
            <Layout>
                <Container className={styles.container}>
                    <div className={styles.containerForm}>
                        <div className={styles.boxRight}>
                            <div className={styles.containerPenawaran}>
                                <div className={styles.boxContainerBottom}>
                                    <p className={styles.header}>Daftar Produkmu yang Ditawar</p>
                                    {transaksi.map((a, i) => {
                                        return (
                                            <div className={styles.boxContainerTop} key={i}>
                                                <div className={styles.boxProduct} onClick={() => router.push(`/offer/${a.id}`)}>
                                                    <div className={styles.boxAttributeProduct}>
                                                        <img
                                                            src={a == undefined
                                                                ? "/assets/img/bara.jpg"
                                                                : a.nama_buku.gambar[0]
                                                            }
                                                            alt="product"
                                                            className={styles.imgProduct}
                                                        />

                                                        <div className={styles.boxDetailProduct}>
                                                            <div className={styles.boxDetailTop}>
                                                                <p className={styles.subTitle}>Penawaran produk</p>
                                                                {/**<p className={styles.dateTime}>{console.log("")}</p> */}
                                                            </div>
                                                            <div className={styles.boxDetailBottom}>
                                                                <p className={styles.productName}>{a.nama_buku.nama}</p>
                                                                <p className={styles.price}>Rp {a.nama_buku.harga}</p>
                                                                <p className={styles.offer}>Ditawar Rp {a.harga_tawar}</p>
                                                            </div>
                                                            <p className={styles.offer}>Status Transaksi :{a.status_penjualan == null ? ' Belum Terkonfirmasi' : a.status_penjualan == true ? ' Berhasil' : ' Gagal'} </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })}


                                </div>

                            </div>
                        </div>

                    </div>

                    <Modal {...props} show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton className={styles.modalHeader}>
                            <Modal.Title className={styles.modalTitle}>
                                Perbarui status penjualan produkmu
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className={styles.modalBody}>

                            <form onSubmit={handleSubmit}>
                                <div className={styles.boxInput}>
                                    <label className={styles.modalLabel}>
                                        <input
                                            required
                                            type="radio"
                                            name="transaksi"
                                            id="behasil"
                                            className={styles.input}
                                            checked={formValues.transaksi === "berhasil"}
                                            value="berhasil"
                                            onChange={handleChange}
                                        // onChange={(e) => {
                                        //   setRadio(e.target.transaksi.value);
                                        // }}
                                        />
                                        <div>
                                            <p className={styles.modalOption}>Berhasil terjual</p>
                                            <p className={styles.modalText}>
                                                Kamu telah sepakat menjual produk ini kepada pembeli
                                            </p>
                                        </div>
                                    </label>

                                    <label className={styles.modalLabel}>
                                        <input
                                            required
                                            type="radio"
                                            name="transaksi"
                                            id="batal"
                                            className={styles.input}
                                            checked={formValues.transaksi === "batalkan"}
                                            value="batalkan"
                                            onChange={handleChange}
                                        // onChange={(e) => {
                                        //   setRadio(e.target.transaksi.value);
                                        // }}
                                        />
                                        <div>
                                            <p className={styles.modalOption}>Batalkan transaksi</p>
                                            <p className={styles.modalText}>
                                                Kamu membatalkan transaksi produk ini dengan pembeli
                                            </p>
                                        </div>
                                    </label>

                                    {/* {formValues.transaksi} */}
                                </div>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className={styles.btnSubmit}
                                // onClick={notify}
                                // onChildClose={handleClose}
                                >
                                    Kirim
                                </Button>
                            </form>

                        </Modal.Body>
                        <Modal.Footer className={styles.modalFooter}>
                            {/* <Link href="">
                <a>
                  <Button
                    variant="primary"
                    className={styles.btnSubmit}
                    // onClick={notify}
                    // onChildClose={handleClose}
                  >
                    Save Changes
                  </Button>
                </a>
              </Link> */}
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Layout>
        </>
    );
}
