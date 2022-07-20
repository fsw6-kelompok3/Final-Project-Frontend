/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/OfferInfo.module.css";
import { Button, Container, Modal } from "react-bootstrap";
import Layout from "../../components/general/Layout";
import { ArrowLeftShort, Whatsapp } from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router"
import axios from '../api/axios'

const penawaran = [
  {
    buyer_name: "Atala Aruna W.",
    address: "Jakarta",
    buyer_img: "/assets/img/fotoPembeli.png",
    product_offer: [
      {
        datetime: "20 Apr, 14:04",
        product_img: "/assets/img/bara.jpg",
        product_name: "Bara",
        product_price: "75650",
        product_offer_price: "60000",
      },
      {
        datetime: "20 Apr, 14:04",
        product_img: "/assets/img/titik_nol.jpg",
        product_name: "Titik Nol",
        product_price: "104000",
        product_offer_price: "60000",
      },
    ],
  },
  {
    buyer_name: "Bruno Mars",
    address: "Bali",
    buyer_img: "/assets/img/fotoPenjual.png",
    product_offer: [
      {
        datetime: "20 Apr, 14:04",
        product_img: "/assets/img/titik_nol.jpg",
        product_name: "Titik Nol",
        product_price: "104000",
        product_offer_price: "50000",
      },
    ],
  },
  // {
  //   buyer: "",
  //   address: "",
  //   buyer_img: "",
  //   datetime: "",
  //   product_img:"",
  //   product_name:"",
  //   product_price:"",
  //   product_offer_price:"",
  // },
];

export default function OfferInfo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState({ transaksi: "" });

  const [gambarPembeli, setGambarPembeli] = useState('');
  const [namaPembeli, setNamaPembeli] = useState('');
  const [kotaPembeli, setKotaPembeli] = useState('');
  const router = useRouter();

  const getData = async () => {
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')

    try {
      const data = await axios.get('/transaksi/seller', {
        withCredentials: true,
        headers: {
          Token: token
        }
      });

      if (JSON.parse(user).user.level === 'admin') {
        console.log('This means you are authorized, but you are a seller and not a buyer')
        // console.log(data)
        setNamaPembeli(JSON.parse(user).user.nama)
        setKotaPembeli(JSON.parse(user).user.kota)
        setGambarPembeli(JSON.parse(user).user.foto)
      } else if (JSON.parse(user).user.level === 'user') {
        console.log('Access not authorized because role is user')
        router.push('/')
      } else {
        console.log('You are not logged in')
        router.push('/')
      }
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

  const handleBerhasil = () => {
    try {
      const data = axios.put('/transaksi/seller/:id', {
        withCredentials: true,
        headers: {
          Token: token
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleBatalkan = () => {
    try {
      const data = axios.put('/transaksi/seller/:id/batal', {
        withCredentials: true,
        headers: {
          Token: token
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

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

  useEffect(() => {
    getData()
  })

  return (
    <>
      <Layout>
        <Container className={styles.container}>
          <div className={styles.containerForm}>
            <div className={styles.boxLeft}>
              <Link href="/">
                <a>
                  <ArrowLeftShort className={styles.prevBtn} />
                </a>
              </Link>
            </div>
            <div className={styles.boxRight}>
              <div className={styles.containerPenawaran}>
                <div className={styles.boxContainerTop}>
                  <img
                    src={gambarPembeli}
                    alt="user"
                    className={styles.imgPembeli}
                  />
                  <div className={styles.boxInner}>
                    <p className={styles.username}>{namaPembeli}</p>
                    <p className={styles.address}>{kotaPembeli}</p>
                  </div>
                </div>

                <div className={styles.boxContainerBottom}>
                  <p className={styles.header}>Daftar Produkmu yang Ditawar</p>

                  <div className={styles.boxProduct}>
                    <div className={styles.boxAttributeProduct}>
                      <img
                        src="/assets/img/bara.jpg"
                        alt="product"
                        className={styles.imgProduct}
                      />

                      <div className={styles.boxDetailProduct}>
                        <div className={styles.boxDetailTop}>
                          <p className={styles.subTitle}>Penawaran produk</p>
                          <p className={styles.dateTime}>20 Apr, 14:04</p>
                        </div>
                        <div className={styles.boxDetailBottom}>
                          <p className={styles.productName}>Jam Tangan Casio</p>
                          <p className={styles.price}>Rp 250.000</p>
                          <p className={styles.offer}>Ditawar Rp 200.000</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.boxBtn}>
                      <Button onClick={handleShow} className={styles.btnStatus}>
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
