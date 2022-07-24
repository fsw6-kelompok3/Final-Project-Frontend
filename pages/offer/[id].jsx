/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/OfferInfo.module.css";
import { Button, Container, Modal } from "react-bootstrap";
import Layout from "../../components/general/Layout";
import { ArrowLeftShort, Whatsapp } from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router"
import axios from "axios"

export default function Offer() {
    const router = useRouter()
    const routes = router.query

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValues, setFormValues] = useState({ transaksi: "" });

    const [transaksiDetail, setTransaksiDetail] = useState([]);

    const handleBerhasil = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const response = await axios.put(`https://secondhand-6-3-staging.herokuapp.com/transaksi/seller/${routes.id}`, {
                withCredentials: true,
                headers: {
                    Token: token
                }
            })
            console.log(response)
            console.log('Handle Berhasil Sukses!')
            handleClose()
            router.push('/offer')
        } catch (error) {
            console.log(error)
        }
    }

    const handleBatalkan = () => {
        const token = window.localStorage.getItem('token')

        try {
            const response = axios.put(`https://secondhand-6-3-staging.herokuapp.com/transaksi/seller/${routes.id}/batal`, routes.id, {
                withCredentials: true,
                headers: {
                    Token: token
                }
            })
            console.log('Handle Batalkan Sukses!')
            handleClose()
            router.push('/offer')
        } catch (error) {
            console.log(error)
        }
    }

    // update inputs value
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Form Submit function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValues.transaksi === "berhasil") {
            handleBerhasil()
        } else if (formValues.transaksi == "batalkan") {
            handleBatalkan()
        }
    };
    // console.log(formValues.transaksi);

    const getData = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const response = await axios.get(`https://secondhand-6-3-staging.herokuapp.com/transaksi/detail/seller/${routes.id}`, {
                headers: {
                    Token: token
                }
            });

            console.log('!=====' + token)
            console.log(response.data.data[0])
            console.log('=====!')
            setTransaksiDetail(response.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Layout>
                <Container className={styles.container}>
                    <div className={styles.containerForm}>
                        {transaksiDetail.length != 0
                            ?
                            <>
                                <div className={styles.boxLeft}>
                                    <a>
                                        <ArrowLeftShort className={styles.prevBtn}
                                            onClick={() => router.push('/offer')} />
                                    </a>
                                </div>

                                <div className={styles.boxRight}>
                                    <div className={styles.containerPenawaran}>

                                        <div className={styles.boxContainerTop}>
                                            <img
                                                src={transaksiDetail.transaksi_user[0].detail_user.length != 0
                                                    ? transaksiDetail.transaksi_user[0].detail_user.foto
                                                    : "/assets/img/pict.png"}
                                                alt="user"
                                                className={styles.imgPembeli}
                                            />
                                            <div className={styles.boxInner}>
                                                <p className={styles.username}>{transaksiDetail.transaksi_user[0].detail_user.nama}</p>
                                                <p className={styles.address}>{transaksiDetail.transaksi_user[0].detail_user.alamat}</p>
                                            </div>
                                        </div>

                                        <div className={styles.boxContainerBottom}>
                                            <p className={styles.header}>Daftar Produkmu yang Ditawar</p>
                                            <div className={styles.boxProduct}>
                                                <div className={styles.boxAttributeProduct}>
                                                    <img
                                                        src={transaksiDetail == undefined
                                                            ? "/assets/img/bara.jpg"
                                                            : transaksiDetail.gambar[0]
                                                        }
                                                        alt="product"
                                                        className={styles.imgProduct}
                                                    />
                                                    <div className={styles.boxDetailProduct}>
                                                        <div className={styles.boxDetailTop}>
                                                            <p className={styles.subTitle}>Penawaran produk</p>
                                                            {/* <p className={styles.dateTime}>{Date(transaksiDetail.createdAt)}</p> */}
                                                        </div>
                                                        <div className={styles.boxDetailBottom}>
                                                            <p className={styles.productName}>{transaksiDetail.nama}</p>
                                                            <p className={styles.price}>Rp {transaksiDetail.harga}</p>
                                                            {/* <p className={styles.offer}>Ditawar Rp {transaksiDetail.transaksi_user[0].harga_tawar}</p> */}
                                                            <p className={styles.offer}>Status Transaksi :{transaksiDetail.status_penjualan == null
                                                                ? ' Belum Terkonfirmasi'
                                                                : a.status_penjualan == true
                                                                    ? ' Berhasil' : ' Gagal'} </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.boxBtn}>
                                                    <Button
                                                        onClick={handleShow}
                                                        className={styles.btnStatus}>
                                                        Status
                                                    </Button>
                                                    <Button
                                                        href="https://api.whatsapp.com/send?phone=6289693052276"
                                                        className={styles.btnWa}
                                                    >
                                                        Hubungi di
                                                        <Whatsapp className={styles.iconSosmed} />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                            : "Loading..."
                        }
                    </div>

                    <Modal show={show} onHide={handleClose} centered>
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
