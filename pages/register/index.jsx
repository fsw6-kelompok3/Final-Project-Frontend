/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "react-bootstrap";
import styles from "./css/Register.module.css";
import Link from "next/link";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useRouter } from "next/router"
import axios from "axios"

export default function Register() {
  const initialValues = { nama: "", email: "", password: "", jenis: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const router = useRouter()

  //eye visibility password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleRegisterAdmin = async () => {
    try {
      const response = await axios.post("https://secondhand-6-3-staging.herokuapp.com/auth/register/admin", {
        nama: formValues.nama,
        email: formValues.email,
        password: formValues.password,
      })

      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://secondhand-6-3-staging.herokuapp.com/auth/register/user", {
        nama: formValues.nama,
        email: formValues.email,
        password: formValues.password,
      })

      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (formValues.jenis == 'admin') {
      handleRegisterAdmin()
    } else if (formValues.jenis == 'user') {
      handleRegister()
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (!values.nama) {
      errors.nama = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password can not exceed more than 10 characters!";
    }

    return errors;
  };

  return (
    <Container fluid>
      <Row className={styles.container}>
        <div className={styles.loginPanel}>
          <div className={styles.logLeft}>
            <div className={styles.brand}>
              <p>
                Second <br /> Hand Books.
              </p>
            </div>
          </div>

          <div className={styles.logRight}>
            <div className={styles.form}>
              <p className={styles.header}>Daftar</p>
              <form onSubmit={handleSubmit}>
                <div className={styles.boxInput}>
                  <p className={styles.label}>Nama</p>
                  <input
                    required
                    name="nama"
                    type="text"
                    placeholder="Nama Lengkap"
                    className={styles.input}
                    value={formValues.nama}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.nama}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Email</p>
                  <input
                    required
                    name="email"
                    type="text"
                    placeholder="Contoh: johndee@gmail.com"
                    className={styles.input}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.email}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Jenis Akun</p>
                  <div className={styles.boxInputRadio}>
                    <label className={styles.boxRadio}>
                      <input
                        required
                        name="jenis"
                        type="radio"
                        className={styles.inputRadio}
                        checked={formValues.jenis === "user"}
                        value="user"
                        onChange={handleChange}
                      />
                      <p className={styles.labelRadio}>Pengguna</p>
                    </label>

                    <label className={styles.boxRadio}>
                      <input
                        required
                        name="jenis"
                        type="radio"
                        className={styles.inputRadio}
                        checked={formValues.jenis === "admin"}
                        value="admin"
                        onChange={handleChange}
                      />
                      <p className={styles.labelRadio}>Penjual</p>
                    </label>
                  </div>

                  <p className={styles.alert}>{formErrors.email}</p>
                </div>

                <div className={styles.boxInput}>
                  <p className={styles.label}>Password</p>
                  <input
                    required
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    className={styles.input}
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  {showPassword === true ? (
                    <EyeSlash
                      onClick={togglePasswordVisiblity}
                      className={styles.eyebtn}
                    />
                  ) : (
                    <Eye
                      onClick={togglePasswordVisiblity}
                      className={styles.eyebtn}
                    />
                  )}
                  <p className={styles.alert}>{formErrors.password}</p>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmit}
                //   onClick={notify}
                // onChildClose={handleClose}
                >
                  Daftar
                </Button>
              </form>

              <p className={styles.register}>
                Sudah punya akun?
                <span className={styles.registerLink}>
                  <Link href="/login">
                    <a> Masuk di sini</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
