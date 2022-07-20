// FUNGSIONAL MASIH BELUM BERJALAN
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../../components/general/Layout";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "./css/Profile.module.css";

export default function Profile() {
  const initialValues = {
    nama: "",
    kota: "",
    alamat: "",
    telepon: "",
    foto_profil: "",
  };
  // const {nama, kota, alamat, telepon, foto_profil} = initialValues
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [avatar, setAvatar] = useState(undefined);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState(null);

  // const handleChange = (e) => {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   });
  //   console.log(formValues);
  // };

  const avatarOnChange = (e) => {
    console.log(e.target.files);
    setFormValues({
      ...formValues,
      // foto_profil: URL.createObjectURL(e.target.files[0]),
      foto_profil: e.target.files[0],
    });
    const objectUrl = URL.createObjectURL([formValues.foto_profil]);
    setAvatar(objectUrl);
    // setAvatar(URL.createObjectURL([formValues.foto_profil]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.nama) {
  //     errors.nama = "Name is required!";
  //   }
  //   if (!values.kota) {
  //     errors.kota = "City is required!";
  //   }
  //   if (!values.alamat) {
  //     errors.alamat = "Address is required!";
  //   }
  //   if (!values.telepon) {
  //     errors.telepon = "Phone number is required!";
  //   }
  //   if (!values.foto_profil) {
  //     errors.foto_profil = "Picture is required!";
  //   }
  // };

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
              <h1 className={styles.titlePage}> Lengkapi Info Akun</h1>
              {/* <form onSubmit={handleSubmit}>
                <div className={styles.boxInput}>
                  <img
                    src={
                      (avatar != undefined 
                        ? avatar 
                        : formValues.foto_profil
                        ? formValues.foto_profil
                        : "/assets/img/pict.png")
                    }
                    alt="picture"
                    className={styles.pictureUser}
                  />

                  <p id="formFile" className={styles.label}>
                    Foto Profil
                  </p>
                  <input
                    required
                    name="foto-profil"
                    // id="formFile"
                    type="file"
                    accept="image/*"
                    className={styles.input}
                    value={formValues.foto_profil}
                    // onChange={handleChange}
                    onChange={(e) => setFormValues({
                      ...formValues,
                      foto_profil: e.target.files[0],
                  })}
                    
                  />
                  <p className={styles.alert}>{formErrors.foto_profil}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Nama*</p>
                  <input
                    required
                    name="nama"
                    type="text"
                    placeholder="Nama"
                    className={styles.input}
                    value={formValues.nama}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.nama}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Kota*</p>
                  <input
                    required
                    name="kota"
                    type="text"
                    placeholder="Kota"
                    className={styles.input}
                    value={formValues.kota}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.kota}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Alamat*</p>
                  <textarea
                    required
                    name="alamat"
                    placeholder="Contoh: Contoh: Jalan Ikan Hiu 33"
                    className={styles.input}
                    rows="3"
                    value={formValues.alamat}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.alamat}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>No Handphone*</p>
                  <input
                    required
                    name="telepon"
                    type="number"
                    placeholder="contoh: 628123456789"
                    className={styles.input}
                    value={formValues.telepon}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.telepon}</p>
                </div>

                <div className={styles.boxBtn}>
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
              </form> */}

              <form onSubmit={handleSubmit}>
                <div className={styles.boxInput}>
                  <img
                    src={
                      avatar != undefined
                        ? avatar
                        : formValues.foto_profil
                        ? formValues.foto_profil
                        : "/assets/img/pict.png"
                    }
                    alt="picture"
                    className={styles.pictureUser}
                  />

                  <p id="formFile" className={styles.label}>
                    Foto Profil*
                  </p>
                  <input
                    required
                    name="foto_profil"
                    // id="formFile"
                    type="file"
                    accept="image/*"
                    className={styles.input}
                    value={formValues.foto_profil}
                    onChange={avatarOnChange}
                    // onChange={(e) =>
                    //   setFormValues({
                    //     ...formValues,
                    //     foto_profil: e.target.files[0],
                    //   })
                    // }
                  />
                  <p className={styles.alert}>{formErrors.foto_profil}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Nama*</p>
                  <input
                    required
                    name="nama"
                    type="text"
                    placeholder="Nama"
                    className={styles.input}
                    value={formValues.nama}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        nama: e.target.value,
                      })
                    }
                  />
                  <p className={styles.alert}>{formErrors.nama}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Kota*</p>
                  <input
                    required
                    name="kota"
                    type="text"
                    placeholder="Kota"
                    className={styles.input}
                    value={formValues.kota}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        kota: e.target.value,
                      })
                    }
                  />
                  <p className={styles.alert}>{formErrors.kota}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Alamat*</p>
                  <textarea
                    required
                    name="alamat"
                    placeholder="Contoh: Contoh: Jalan Ikan Hiu 33"
                    className={styles.input}
                    rows="3"
                    value={formValues.alamat}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        alamat: e.target.value,
                      })
                    }
                  />
                  <p className={styles.alert}>{formErrors.alamat}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>No Handphone*</p>
                  <input
                    required
                    name="telepon"
                    type="number"
                    placeholder="contoh: 628123456789"
                    className={styles.input}
                    value={formValues.telepon}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        telepon: e.target.value,
                      })
                    }
                  />
                  <p className={styles.alert}>{formErrors.telepon}</p>
                </div>

                <div className={styles.boxBtn}>
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
