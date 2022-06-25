/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "react-bootstrap";
import styles from "./css/Login.module.css";
import Link from "next/link";

export default function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
              <p className={styles.header}>Masuk</p>
              <form onSubmit={handleSubmit}>
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
                    type="password"
                    placeholder="Masukkan password"
                    className={styles.input}
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className={styles.alert}>{formErrors.password}</p>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmit}
                  //   onClick={notify}
                  // onChildClose={handleClose}
                >
                  Masuk
                </Button>
              </form>

              <p className={styles.register}>
                Belum punya akun?
                <span className={styles.registerLink}>
                  <Link href="/register">
                    <a> Daftar di sini</a>
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
