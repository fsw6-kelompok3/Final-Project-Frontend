/* eslint-disable @next/next/no-img-element */
//BELUM SEPENUHNYA BERJALAN
import React, { useState, useEffect } from "react";
import styles from "./css/DetailProduct.module.css";
import Layout from "../../components/general/Layout";
import { Button, Container, Carousel, Form, Modal } from "react-bootstrap";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

const book = [
  { id: 1, image: "/assets/img/titik_nol.jpg" },
  { id: 2, image: "/assets/img/titik_nol_1.jpg" },
  { id: 3, image: "/assets/img/titik_nol_2.jpg" },
];

export default function DetailProduct(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = { harga_tawar: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    notify();
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.harga_tawar) {
      errors.harga_tawar = "Tentukan harga tawaranmu!";
    }
    return errors;
  };

  const notify = () => {
    toast.success("Harga tawarmu berhasil dikirim ke penjual!", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Layout>
        <Container className={styles.container}>
          <div className={styles.sideLeft}>
            <Carousel className={styles.carousel}>
              {book.map((a) => (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item>
                  <img src={a.image} alt="book" className={styles.img} />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className={styles.containerDeskripsi}>
              <p className={styles.titleDeskripsi}>Deskripsi</p>
              <p className={styles.deskripsi}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                odit quibusdam cumque laboriosam commodi aperiam rerum illo
                possimus? Ullam eos illum saepe eveniet veniam eligendi quis
                numquam voluptatum placeat ipsa? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus quaerat perferendis, sit
                nisi eius adipisci excepturi labore necessitatibus repellat
                nesciunt cumque molestiae eaque ratione repellendus aliquam
                accusamus assumenda impedit illo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Alias aspernatur officiis ea
                mollitia autem ut quod itaque, eaque dicta iure facere incidunt,
                porro suscipit velit dolor rerum similique laboriosam. Tenetur!
              </p>
            </div>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.nego}>
              <p className={styles.judul}>Titik Nol</p>
              <p className={styles.pengarang}>Agustinus Wibowo</p>
              <p className={styles.harga}>Rp 100000</p>

              <Link href="">
                <a>
                  <Button className={styles.btnNego} onClick={handleShow}>
                    <p className={styles.textBtn}>
                      Saya tertarik dan ingin nego
                    </p>
                  </Button>
                </a>
              </Link>
            </div>

            <div className={styles.identitasPenjual}>
              <img
                src="/assets/img/fotoPenjual.png"
                alt="penjual"
                className={styles.imgPenjual}
              />
              <div className={styles.box}>
                <p className={styles.namaPenjual}>Nama Penjual</p>
                <p className={styles.kota}>Kota</p>
              </div>
            </div>
          </div>

          {/* dialogClassName={styles.modal} */}
          <Modal {...props} show={show} onHide={handleClose} centered>
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
                  onClick={notify}
                  // onChildClose={handleClose}
                >
                  Save Changes
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
              {/* <Button
                variant="primary"
                type="submit"
                className={styles.btnSubmit}
                // onClick={notify}
                // onChildClose={handleClose}
              >
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </Container>
      </Layout>
    </>
  );
}
