import React, { useState, useEffect } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Layout from "../../../../components/general/Layout";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "./AddProduct.module.css";
import styles2 from "./Modal.module.css";
import axios from '../../../api/axios';
import { useRouter } from "next/router";

export default function AddProduct() {
  const initialValues = {
    nama: "",
    deskripsi: "",
    gambar: [],
    harga: "",
    pengarang: "",
    lokasi: "",
    tahun_terbit: "",
    kategori_id: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [fileInputState, setFileInputState] = useState([]);
  const [previewSource, setPreviewSource] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter()
  const routes = router.query

  const [buku, setBuku] = useState()
  const [kategori, setKategori] = useState([])

  const getKategori = async () => {
    const response = await axios.get('/v1/kategori')

    const data = await response.data
    // console.log(data.data)
    setKategori(data.data)
  }

  const getData = async () => {
    const response = await axios.get(`/user/buku/${routes.id}`)

    const data = await response.data;

    setBuku(data[0])
    setFormValues({
      nama: data[0].nama,
      deskripsi: data[0].deskripsi,
      harga: data[0].harga,
      pengarang: data[0].pengarang,
      lokasi: data[0].lokasi,
      tahun_terbit: data[0].tahun_terbit,
      kategori_id: data[0].kategori_id,
    })
  }

  const handleEditProduct = async () => {
    const token = window.localStorage.getItem('token')

    try {
      const formData = new FormData()

      formData.append('nama', formValues.nama)
      formData.append('deskripsi', formValues.deskripsi)
      Object.values(fileInputState).forEach((file) => {
        formData.append('gambar', file);
      });
      formData.append('harga', formValues.harga)
      formData.append('pengarang', formValues.pengarang)
      formData.append('lokasi', formValues.lokasi)
      formData.append('tahun_terbit', formValues.tahun_terbit)
      formData.append('kategori_id', formValues.kategori_id)

      console.log(...formData)

      const response = await axios.post(`/seller/buku/${routes.id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Token: token
        }
      })

      router.push('/dashboard')
      console.log('This is a successful request, congratulations')
    } catch (error) {
      console.log('Unsuccessful put request')
    }
  }

  const handleDeleteProduct = async () => {
    const token = window.localStorage.getItem('token')

    try {
      const response = await axios.delete(`/seller/buku/${routes.id}`, {
        withCredentials: true,
        headers: {
          Token: token
        }
      })

      console.log('This is a successful request, congratulations')
      router.push('/dashboard')
    } catch (error) {
      console.log('Unsuccessful put request')
    }
  }

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const { files } = e.target;
    const validImageFiles = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      validImageFiles.push(file);
    }
    if (validImageFiles.length) {
      setFileInputState(validImageFiles);
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    handleEditProduct()
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.nama) {
      errors.nama = "Name is required!";
    }
    if (!values.harga) {
      errors.harga = "Price is required!";
    }
    if (!values.kategori_id) {
      errors.kategori_id = "Category is required!";
    }
    if (!values.deskripsi) {
      errors.deskripsi = "Description is required!";
    }
    if (!values.pengarang) {
      errors.pengarang = "Author is required!";
    }
    if (!values.lokasi) {
      errors.lokasi = "Location is required!";
    }
    if (!values.tahun_terbit) {
      errors.tahun_terbit = "Year is required!";
    }

    return errors;
  };

  useEffect(() => {
    /*
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    */
    getData()
    getKategori()

    const previewSource = [], fileReaders = [];
    let isCancel = false;

    if (fileInputState.length) {
      fileInputState.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            previewSource.push(result);
          }
          if (previewSource.length === fileInputState.length && !isCancel) {
            setPreviewSource(previewSource);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, []);

  return (
    <>
      <Layout>
        <Container className={styles.container}>
          <div className={styles.containerForm}>

            <div className={styles.boxLeft}>

              <a>
                <ArrowLeftShort
                  className={styles.prevBtn}
                  onClick={() => router.push(`/dashboard/book/${routes.id}`)} />
              </a>

            </div>

            <div className={styles.boxRight}>
              <form onSubmit={handleSubmit}>
                <div className={styles.boxInput}>
                  <p className={styles.label}>Nama Produk</p>
                  <input
                    required
                    name="nama"
                    type="text"
                    placeholder="Nama Produk"
                    className={styles.input}
                    value={formValues.nama}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.nama}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Harga Produk</p>
                  <input
                    required
                    name="harga"
                    type="number"
                    placeholder="Rp 0.00"
                    className={styles.input}
                    value={formValues.harga}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.harga}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Kategori</p>
                  <select
                    required
                    name="kategori_id"
                    className={styles.input}
                    value={formValues.kategori_id}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Kategori</option>
                    {kategori.map(kategori =>
                      <option
                        key={kategori.id}
                        value={kategori.id}
                      >{kategori.jenis_buku}
                      </option>)}
                  </select>
                  <p className={styles.alert}>{formErrors.kategori_id}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Pengarang</p>
                  <input
                    required
                    name="pengarang"
                    type="text"
                    placeholder="Pengarang"
                    className={styles.input}
                    value={formValues.pengarang}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.pengarang}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Lokasi</p>
                  <input
                    required
                    name="lokasi"
                    type="text"
                    placeholder="Lokasi"
                    className={styles.input}
                    value={formValues.lokasi}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.lokasi}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Tahun Terbit</p>
                  <input
                    required
                    name="tahun_terbit"
                    type="number"
                    placeholder="Tahun Terbit"
                    className={styles.input}
                    value={formValues.tahun_terbit}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.tahun_terbit}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Deskripsi</p>
                  <textarea
                    required
                    name="deskripsi"
                    placeholder="Contoh: Pengarang, Sinopsis, dll."
                    className={styles.input}
                    rows="3"
                    value={formValues.deskripsi}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.deskripsi}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Foto Produk</p>
                  <input
                    required
                    multiple
                    name="foto"
                    type="file"
                    accept="image/*"
                    className={styles.input}
                    // value={multipleImages}
                    onChange={handleFileInputChange}
                  />
                  <p className={styles.alert}></p>
                </div>

                <div className={styles.boxBtn}>
                  <Button
                    className={styles.btnPreview}
                    onClick={handleShow}
                  >
                    Delete
                  </Button>

                  <Button
                    variant="primary"
                    type="submit"
                    className={styles.btnSubmit}
                  //   onClick={notify}
                  // onChildClose={handleClose}
                  >
                    Update
                  </Button>
                </div>

                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton className={styles2.modalHeader} />
                  <Modal.Body className={styles2.modalBody}>
                    <div className={styles2.containerItemDialog}>
                      <img
                        src="/assets/img/delete.jpg"
                        alt="produk"
                        className={styles2.imgItemDialog}
                      />
                    </div>
                    <Modal.Title className={styles2.modalTitle}>
                      Menghapus Data Buku
                    </Modal.Title>
                    <p className={styles2.textModal}>
                      Setelah dihapus, data buku tidak dapat dikembalikan lagi.
                      <span className={styles2.spanTextModal}>
                        {" "}
                        Yakin ingin menghapus?
                      </span>
                    </p>
                  </Modal.Body>
                  <Modal.Footer className={styles2.modalFooter}>
                    <div className={styles2.btnContainer}>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles2.btnYa}
                        onClick={handleDeleteProduct}
                      >
                        Ya
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles2.btnTidak}
                        onClick={handleClose}
                      >
                        Tidak
                      </Button>
                    </div>
                  </Modal.Footer>
                </Modal>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
