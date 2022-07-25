// FUNGSIONAL MASIH BELUM BERJALAN
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../../components/general/Layout";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "./css/Profile.module.css";
import axios from "../api/axios"
import { useRouter } from "next/router";

export default function Profile() {
    const initialValues = {
        nama: "",
        kota: "",
        alamat: "",
        nohp: "",
        foto: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [avatar, setAvatar] = useState();

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState([]);

    const [user, setUser] = useState()
    const [fileInputState, setFileInputState] = useState([]);
    const [previewSource, setPreviewSource] = useState([]);

    const [identify, setIdentify] = useState(false)

    const router = useRouter()

    const getData = async () => {
        const user = window.localStorage.getItem('user')

        if (JSON.parse(user).user.level === 'admin') {
            getAdmin()
        } else if (JSON.parse(user).user.level === 'user') {
            getUser()
        } else {
            console.log('You are neither. What are you?')
        }
    }

    const getUser = async () => {
        const token = window.localStorage.getItem('token')

        const response = await axios.get('/v1/user', {
            headers: {
                Token: token
            }
        })

        const data = await response.data;

        setUser(data)
        setFormValues({
            nama: data.nama,
            kota: data.kota,
            alamat: data.alamat,
            foto: data.foto,
            nohp: data.nohp,
        })
    }

    const getAdmin = async () => {
        const token = window.localStorage.getItem('token')

        const response = await axios.get('/v1/admin', {
            headers: {
                Token: token
            }
        })

        const data = await response.data;

        setUser(data)
        setFormValues({
            nama: data.nama,
            kota: data.kota,
            alamat: data.alamat,
            foto: data.foto,
            nohp: data.nohp,
        })
    }

    const handleEdit = async () => {
        const user = window.localStorage.getItem('user')

        if (JSON.parse(user).user.level === 'admin') {
            handleEditAdmin()
        } else if (JSON.parse(user).user.level === 'user') {
            handleEditUser()
        } else {
            console.log('You are neither. What are you?')
        }
    }

    const handleEditUser = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const formData = new FormData()

            formData.append('nama', formValues.nama)
            formData.append('kota', formValues.kota)
            Object.values(fileInputState).forEach((file) => {
                formData.append('foto', file);
            });
            formData.append('alamat', formValues.alamat)
            formData.append('nohp', formValues.nohp)

            console.log(...formData)

            const response = await axios.put('/v1/user', formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Token: token
                }
            })

            router.push('/')
            console.log('This is a successful request, congratulations')
        } catch (error) {
            console.log('Unsuccessful put request')
        }
    }

    const handleEditAdmin = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const formData = new FormData()

            formData.append('nama', formValues.nama)
            formData.append('kota', formValues.kota)
            Object.values(fileInputState).forEach((file) => {
                formData.append('foto', file);
            });
            formData.append('alamat', formValues.alamat)
            formData.append('nohp', formValues.nohp)

            console.log(...formData)

            const response = await axios.put('/v1/admin', formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Token: token
                }
            })

            router.push('/dashboard')
            console.log('This is a successful request, congratulations')
        } catch (error) {
            console.log('Unsuccessful put request')
        }
    }

    const handleReturn = async () => {
        const user = window.localStorage.getItem('user')

        if (JSON.parse(user).user.level === 'admin') {
            router.push('/dashboard')
        } else if (JSON.parse(user).user.level === 'user') {
            router.push('/')
        } else {
            console.log('You are neither. What are you?')
        }
    }

    const prevbtn = async () => {
        const user = window.localStorage.getItem('user')

        if (JSON.parse(user).user.kota == null || JSON.parse(user).user.foto == null || JSON.parse(user).user.alamat == null) {
            setIdentify(false)
        } else {
            setIdentify(true)
        }
    }

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
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
        //setFormErrors(validate(formValues));
        handleEdit()
        setIsSubmit(true);
    };

    useEffect(() => {
        getData()
        prevbtn()

        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, []);

    const validate = (values) => {
        const errors = {};

        if (!values.nama) {
            errors.nama = "Name is required!";
        }
        if (!values.kota) {
            errors.kota = "City is required!";
        }
        if (!values.alamat) {
            errors.alamat = "Address is required!";
        }
        if (!values.nohp) {
            errors.nohp = "Phone number is required!";
        }
        if (!values.foto) {
            errors.foto = "Picture is required!";
        }
    };

    return (
        <>
            <Layout>
                <Container className={styles.container}>
                    <div className={styles.containerForm}>
                        <div className={styles.boxLeft}>
                            {identify == true
                                ?
                                <a>
                                    <ArrowLeftShort
                                        className={styles.prevBtn}
                                        onClick={handleReturn}
                                    />
                                </a>
                                : ""}
                        </div>
                        <div className={styles.boxRight}>
                            <h1 className={styles.titlePage}> Lengkapi Info Akun</h1>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.boxInput}>
                                    <img
                                        src={
                                            (avatar != null
                                                ? avatar
                                                : formValues.foto
                                                    ? formValues.foto
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
                                        id="formFile"
                                        type="file"
                                        accept="image/*"
                                        className={styles.input}
                                        //value={formValues.foto}
                                        // onChange={handleChange}
                                        /*
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            foto: e.target.files[0],
                                        })}
                                        */
                                        onChange={handleFileInputChange}

                                    />
                                    <p className={styles.alert}></p>
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
                                        name="nohp"
                                        type="number"
                                        placeholder="contoh: 628123456789"
                                        className={styles.input}
                                        value={formValues.nohp}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.alert}>{formErrors.nohp}</p>
                                </div>

                                <div className={styles.boxBtn}>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className={styles.btnSubmit}
                                    //   onClick={notify}
                                    // onChildClose={handleClose}
                                    >
                                        Perbarui
                                    </Button>
                                </div>
                            </form>
                            {/*
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
                                        onChange={handleFileInputChange}
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
                                    */}
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
}