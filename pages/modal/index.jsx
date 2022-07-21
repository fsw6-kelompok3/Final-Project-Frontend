/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { Button, Container, Carousel, Modal } from "react-bootstrap";

export default function index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button className={styles.btnNego} onClick={handleShow}>
        <p className={styles.textBtn}>Saya tertarik dan ingin nego</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className={styles.modalHeader} />
        <Modal.Body className={styles.modalBody}>
          <div className={styles.containerItemDialog}>
            <img
              src="/assets/img/delete.jpg"
              alt="produk"
              className={styles.imgItemDialog}
            />
          </div>
          <Modal.Title className={styles.modalTitle}>
            Menghapus Data Buku
          </Modal.Title>
          <p className={styles.textModal}>
            Setelah dihapus, data buku tidak dapat dikembalikan lagi.
            <span className={styles.spanTextModal}>
              {" "}
              Yakin ingin menghapus?
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <div className={styles.btnContainer}>
            <Button
              variant="primary"
              type="submit"
              className={styles.btnYa}
              onClick={() => router.push(`/book/`)}
            >
              Ya
            </Button>
            <Button
              variant="primary"
              type="submit"
              className={styles.btnTidak}
              onClick={handleClose}
            >
              Tidak
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
