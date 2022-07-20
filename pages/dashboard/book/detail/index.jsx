import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../../../../components/general/Layout";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "./AddProduct.module.css";

export default function AddProduct() {
  const initialValues = {
    nama: "",
    harga: "",
    kategori: "",
    deskripsi: "",
    foto: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selected, setSelected] = useState(null);

  // console.log(selected);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.nama) {
      errors.nama = "Name is required!";
    }
    if (!values.harga) {
      errors.harga = "Price is required!";
    }
    if (!values.kategori) {
      errors.kategori = "Category is required!";
    }
    if (!values.deskripsi) {
      errors.deskripsi = "Description is required!";
    }
    if (!values.foto) {
      errors.foto = "Picture is required!";
    }

    return errors;
  };

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
                    name="kategori"
                    className={styles.input}
                    value={formValues.kategori}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="novel">Novel</option>
                    <option value="fiksi">Fiksi</option>
                    <option value="horror">Horror</option>
                    <option value="teknologi">Teknologi</option>
                    <option value="ensiklopedia">Ensiklopedia</option>
                  </select>
                  <p className={styles.alert}>{formErrors.kategori}</p>
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
                    value={formValues.foto}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.foto}</p>
                </div>

                <div className={styles.boxBtn}>
                  <Button href="/dashboard/book" className={styles.btnPreview}>
                    Preview
                  </Button>

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
        </Container>
      </Layout>
    </>
  );
}
