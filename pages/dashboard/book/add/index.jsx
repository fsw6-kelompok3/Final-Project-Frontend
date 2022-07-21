import React, { useState, useEffect } from "react";
import { Button, Container, Carousel } from "react-bootstrap";
import Layout from "../../../../components/general/Layout";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "./AddProduct.module.css";
import styles2 from "./Book.module.css";
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
  const [dataPreview, setDataPreview] = useState([]);
  const [kategori, setKategori] = useState([])
  const [isPreview, setIsPreview] = useState(false);
  const [buku, setBuku] = useState([])

  const router = useRouter()

  const getKategori = async () => {
    try {
      const response = await axios.get('/v1/kategori')

      const data = await response.data
      console.log(data.data)
      setKategori(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddProduct = async () => {
    const token = window.localStorage.getItem('token')

    try {
      const formData = new FormData()

      formData.append('nama', formValues.nama)
      formData.append('deskripsi', formValues.deskripsi)
      /*
      for (let i = 0; i < multipleImages.length; i++) {
        formData.append('gambar[]', multipleImages[i])
      }
      */
      Object.values(fileInputState).forEach((file) => {
        formData.append('gambar', file);
      });
      formData.append('harga', formValues.harga)
      formData.append('pengarang', formValues.pengarang)
      formData.append('lokasi', formValues.lokasi)
      formData.append('tahun_terbit', formValues.tahun_terbit)
      formData.append('kategori_id', formValues.kategori_id)

      console.log(...formData)

      await axios.post('/seller/buku', formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Token: token
        }
      })

      router.push('/dashboard')

      console.log('This is a successful request, congratulations')
    } catch (error) {
      console.log('Unsuccessful post request')
    }
  }

  const handlePreview = (e) => {
    e.preventDefault()
    setIsPreview(true)

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

      setDataPreview([...formData])
      setBuku([...formData])
      console.log(buku)
    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
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
    handleAddProduct()
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
  }, []); //[fileInputState]);

  return (
    <>
      <Layout>
        <Container className={styles.container}>
          {
            isPreview === false
              ?
              <div className={styles.containerForm}>
                <div className={styles.boxLeft}>
                  <Link href="/dashboard">
                    <a>
                      <ArrowLeftShort className={styles.prevBtn} />
                    </a>
                  </Link>
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
                      {/**
                      <Button
                        className={styles.btnPreview}
                        onClick={handlePreview}
                      >
                        Preview
                      </Button>
                        */}

                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                      //   onClick={notify}
                      // onChildClose={handleClose}
                      >
                        Terbitkan
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              :
              "Loading..."
          }
        </Container>
      </Layout >
    </>
  );
}
