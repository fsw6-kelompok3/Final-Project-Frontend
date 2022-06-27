/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "react-bootstrap";
import styles from "./css/Register.module.css";
import Link from "next/link";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function Register() {
  const initialValues = { nama: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //eye visibility password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
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
