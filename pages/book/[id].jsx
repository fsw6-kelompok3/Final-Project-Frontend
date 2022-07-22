/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./css/Book.module.css";
import Layout from "../../components/general/Layout";
import { Button, Container, Carousel, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Book() {
  const router = useRouter();
  const routes = router.query; //get id from /book

  const [books, setBooks] = useState([]);
  //   console.log("tampiljannn id", routes.id);
  const [tawaran, setTawaran] = useState([]);

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = { harga_tawar: "" };
  const [formValues, setFormValues] = useState(initialValues);
 
  const [isSubmit, setIsSubmit] = useState(false);
  const [isShown, setIsShown] = useState(false)

  const handleChange = (e) => {
    /*console.log(e.target);*/
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    /*console.log(formValues);*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct();
  };

  const handleAddProduct = async () => {
    const token = window.localStorage.getItem("token");

    try {
      await axios.post(
        "https://secondhand-6-3-staging.herokuapp.com/transaksi",
        {
          id_barang: routes.id,
          persetujuan_harga: null,
          harga_tawar: formValues.harga_tawar,
          status_penjualan: null,
        },
        {
          withCredentials: true,
          headers: {
            Token: token,
          },
        }
      );

      handleClose();
      toast.success("Tawaran Anda Berhasil Dikirim!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      // console.log("This is a successful request, congratulations");

    } catch (error) {
      toast.error("Tawaran Anda Gagal Dikirim!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      // console.log("Unsuccessful post request");
    }
    // window.location.reload();
  };

  useEffect(() => {
    getInfo();
    
    //get data
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

    const tawaran = async () => {
      const token = window.localStorage.getItem("token");
      const response = await axios.get(
        `https://secondhand-6-3-staging.herokuapp.com/transaksi`,
        {
          headers: {
            Token: token,
          },
        }
      );
      //   console.log(response);
      const data = await response.data.data;
      console.log("tawaran", data);
      setTawaran(data);
    };
    tawaran();
  }, []);
  
  const getInfo = async () => {
    const token = await window.localStorage.getItem('token')
    const user = await window.localStorage.getItem('user')

    if (token) {
      console.log('This means you have a token!')
      if (JSON.parse(user).user.level === 'admin') {
        console.log('This means you are authorized, you are an admin');
        setIsShown(false)
      } else if (JSON.parse(user).user.level === 'user') {
        console.log('This means you are authorized, you are a user');
        setIsShown(true)
      } else {
        console.log('You are neither. What are you?')
        setIsShown(false)
      }
    } else {
      console.log('Your token is not here. Login first')
      setIsShown(false)
    }
  }

  const cekTawaran = async () => {
  };

  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
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
        <Container>
          {/* <ToastContainer /> */}
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
                        <p className={styles.harga}>Rp {a.harga}</p>

                        {/* {tawaran.id_barang && tawaran.id_user
                          ? tawaran.map((b, i) => {
                              return (
                                <>
                                  <p key={i}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aspernatur id aut nesciunt
                                    eum nostrum est corrupti nemo eos rem, at
                                    blanditiis recusandae dolore, laboriosam
                                    enim nulla amet! Veritatis, reprehenderit
                                    aperiam.
                                    {b.harga_tawar}
                                  </p>
                                </>
                              );
                            })
                          : "loading.."} */}
                        <Button className={styles.btnNego} onClick={handleShow}>
                          <p className={styles.textBtn}>
                            Saya tertarik dan ingin nego
                          </p>
                        </Button>
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
              {books.map((a, i) => {
                return (
                  <div key={i} className={styles.containerItemDialog}>
                    <img
                      src={a.gambar[0]}
                      alt="produk"
                      className={styles.imgItemDialog}
                    />
                    <div className={styles.boxproduk}>
                      <p className={styles.judulItemPopup}>{a.nama}</p>
                      <p className={styles.hargaItemPopup}>Rp {a.harga}</p>
                    </div>
                  </div>
                );
              })}

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

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmit}
                  //   onClick={notify}
                  // onClose={handleClose}
                >
                  Save Changes
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}></Modal.Footer>
          </Modal>
        </Container>
      </Layout>
    </>
  );
}