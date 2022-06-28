import React from "react";
import HeadInfo from "../../components/layout/HeadInfo";
import styles from "../../styles/Headinfo.module.css";

const EditProfile = () => {
  return (
    <>
      <HeadInfo />
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-6">
            <form>
              <div className="d-flex justify-content-center">
                <div className={styles.inputPhoto}>
                  <i className="fa-solid fa-camera"></i>
                </div>
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name*
                </label>
                <input type="text" className="form-control" id="name" placeholder="Name" />
              </div>
              <div className="mb-3">
                <label for="kota" className="form-label">
                  Kota*
                </label>
                <select class="form-select">
                  <option selected>Pilih Kota</option>
                  <option value="1">Jakarta</option>
                  <option value="2">Bandung</option>
                  <option value="3">Yogyakarta</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">
                  Alamat*
                </label>
                <textarea
                  class="form-control"
                  id="address"
                  rows="3"
                  placeholder="contoh: Jl. Jakarta no 1"
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="nohp" className="form-label">
                  No Handphone*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nohp"
                  placeholder="contoh: +62812345678"
                />
              </div>
              <button type="submit" className="btn btn-edit w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
