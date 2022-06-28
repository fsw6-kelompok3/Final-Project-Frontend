import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import HeadInfo from "../../components/layout/HeadInfo";
import Style from "../../styles/InfoPenawaran.module.css";

const index = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [showOffering, setShowOffering] = useState(false);

  const handleCloseStatus = () => setShowStatus(false);
  const handleShowStatus = () => setShowStatus(true);
  const handleCloseOffering = () => setShowOffering(false);
  const handleShowOffering = () => setShowOffering(true);

  return (
    <div>
      <HeadInfo />

      <div className="row my-3">
        <div className="col-6 mx-auto">
          <div class="alert alert-success" role="alert">
            Status produk berhasil diperbaharui
          </div>
          <div className="card cardPenawaran">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className={Style.profile}>
                  <img src="https://placeimg.com/60/60/people" alt="" />
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Elin Febriani</p>
                  <p className="mb-0">Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <h5 className="my-4">Daftar Produkmu yang Ditawar</h5>

          <div className="border-bottom pb-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className={Style.profile}>
                  <img src="https://placeimg.com/60/60/people" alt="" />
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-lighter">Penawaran Produk</p>
                  <p className="mb-0">Jam Tangan Casio</p>
                  <p className="mb-0">Rp 250.000</p>
                  <p className="mb-0">Ditawar Rp 200.000</p>
                </div>
              </div>
              <div>
                <p className="mb-0 fw-lighter">20 Agustus 2022</p>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn-border px-3 me-2" onClick={handleShowStatus}>
                Status
              </button>
              <button className="btn-edit px-3">
                Hubungi di <i class="fa-brands fa-whatsapp"></i>
              </button>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn-border px-3 me-2">Tolak</button>
              <button className="btn-edit px-3" onClick={handleShowOffering}>
                Terima
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Status */}
      <Modal show={showOffering} onHide={handleCloseOffering}>
        <Modal.Body>
          <p className="fw-bold mb-2">Yeay kamu berhasil mendapatkan harga yang sesuai</p>
          <p className="text-secondary">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="bg-gray p-3">
            <h6 className="text-center mb-3">Product Match</h6>
            <div className="d-flex mb-3">
              <div className={Style.profile}>
                <img src="https://placeimg.com/60/60/people" alt="" />
              </div>
              <div className="ms-3">
                <p className="mb-0">Agung</p>
                <p className="mb-0 fw-lighter">Jakarta</p>
              </div>
            </div>
            <div className="d-flex">
              <div className={Style.profile}>
                <img src="https://placeimg.com/60/60/people" alt="" />
              </div>
              <div className="ms-3">
                <p className="mb-0">Jam Tangan Casio</p>
                <p className="mb-0 text-decoration-line-through">Rp 250.000</p>
                <p className="mb-0">Rp 200.000</p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-edit w-100 mt-3">
            Hubungi via Whatsapp <i class="fa-brands fa-whatsapp"></i>
          </button>
        </Modal.Body>
      </Modal>

      {/* Modal Success */}
      <Modal show={showStatus} onHide={handleCloseStatus}>
        <Modal.Body>
          <p className="fw-bold">Perbarui status penjualan produkmu</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="status" id="success" />
            <label class="form-check-label" for="success">
              <p className="fw-bold mb-1">Berhasil Terjual</p>
              <p>
                Kamu telah sepakat menjual produk <br /> ini kepada pembeli
              </p>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="status" id="error" />
            <label class="form-check-label" for="error">
              <p className="fw-bold mb-1">Batalkan Transaksi</p>
              <p>
                Kamu mambatalkan transaksi <br /> produk ini dengan pembeli
              </p>
            </label>
          </div>
          <button type="submit" className="btn btn-edit w-100 mt-3">
            Kirim
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default index;
