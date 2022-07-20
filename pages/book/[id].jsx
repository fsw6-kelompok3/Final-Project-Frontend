/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/Book.module.css";
import Layout from "../../components/general/Layout";
import { Button, Container, Carousel, Modal } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export default function Book() {
  const router = useRouter();
  const routes = router.query; //get id from /book

  const [books, setBooks] = useState([]);
  //   console.log("tampiljannn id", routes.id);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = { harga_tawar: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const postData = async () => {
      const response = await axios.get(
        `https://secondhand-6-3-staging.herokuapp.com/user/buku/${routes.id}`
      );
      //   console.log(response);
      const data = await response.data;
      console.log(data);

      setBooks(data);
    };
    postData();
  }, []);

  const handleChange = (e) => {
    /*console.log(e.target);*/
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    /*console.log(formValues);*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <>
      <Layout>
        <Container>
          {books
            ? books.map((a, i) => {
              return (
                <div key={i} className={styles.container}>
                  <div className={styles.sideLeft}>
                    <Carousel interval={null} className={styles.carousel}>
                      {a.gambar.map((data, i) => (
                        <Carousel.Item key={i}>
                          <img src={data} alt="book" className={styles.img} />
                        </Carousel.Item>
                      ))}
                      {/* {gambarProduk.forEach( */}

                      {/* )} */}
                      {/* {books.gambar.map((gambar) => {
                          return (
                            <> */}

                      {/* </>
                          );
                        })} */}
                    </Carousel>

                    {/* <div>{JSON.stringify(router.query)}</div> */}
                    <div className={styles.containerDeskripsi}>
                      <p className={styles.titleDeskripsi}>Deskripsi</p>
                      <p className={styles.deskripsi}>{a.deskripsi}</p>
                    </div>
                  </div>
                  <div className={styles.sideRight}>
                    <div className={styles.nego}>
                      <p className={styles.judul}>{a.nama}</p>
                      <p className={styles.pengarang}>{a.pengarang}</p>
                      <p className={styles.harga}>{a.harga}</p>

                      <Link href="">
                        <a>
                          <Button
                            className={styles.btnNego}
                            onClick={handleShow}
                          >
                            <p className={styles.textBtn}>
                              Saya tertarik dan ingin nego
                            </p>
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
                        <p className={styles.namaPenjual}>
                          {a.penjual_barang.nama}
                        </p>
                        <p className={styles.kota}>{a.penjual_barang.kota}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            : "Loading..."}

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className={styles.modalHeader}>
              <Modal.Title className={styles.modalTitle}>
                Masukkan Harga Tawarmu
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
              <p className={styles.textModal}>
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
                akan segera dihubungi penjual.
              </p>
              <div className={styles.containerItemDialog}>
                <img
                  src="/assets/img/titik_nol.jpg"
                  alt="produk"
                  className={styles.imgItemDialog}
                />
                <div className={styles.boxproduk}>
                  <p className={styles.judulItemPopup}>Titik Nol</p>
                  <p className={styles.hargaItemPopup}>Rp 250.000</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.boxInput}>
                  <p className={styles.labelNego}>Harga Tawar</p>
                  <input
                    required
                    name="harga_tawar"
                    type="number"
                    placeholder="Rp 0,00"
                    className={styles.inputNego}
                    value={formValues.harga_tawar}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.harga_tawar}</p>

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmit}
                //   onClick={notify}
                // onChildClose={handleClose}
                >
                  Save Changes
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
            </Modal.Footer>
          </Modal>
        </Container>
      </Layout>
    </>
  );
}
