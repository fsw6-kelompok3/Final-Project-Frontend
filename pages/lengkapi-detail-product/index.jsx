import React from "react";
import HeadInfo from "../../components/layout/HeadInfo";
import styles from "../../styles/Headinfo.module.css";

const LengkapiDetailProfile = () => {
  return (
    <>
      <HeadInfo />
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name Product
                </label>
                <input type="text" className="form-control" id="name" placeholder="Name Product" />
              </div>
              <div className="mb-3">
                <label for="harga" className="form-label">
                  Harga Product
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="harga"
                  placeholder="Harga Product"
                />
              </div>
              <div className="mb-3">
                <label for="kota" className="form-label">
                  Kategori
                </label>
                <select class="form-select">
                  <option selected>Pilih Kategori</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">
                  Deskripsi
                </label>
                <textarea
                  class="form-control"
                  id="address"
                  rows="3"
                  placeholder="contoh: Jl. Jakarta no 1"
                ></textarea>
              </div>
              {/* <div className="mb-3">
                <input type="file" className="input-file" />
                <i class="fa-solid fa-plus"></i>
              </div> */}
              <div className="mb-3">
                <label for="address" class="form-label">
                  Foto Product
                </label>
                <label className="filelabel">
                  <i class="fa-solid fa-plus"></i>
                  <input id="FileInput" name="input_file" type="file" />
                </label>
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

export default LengkapiDetailProfile;
