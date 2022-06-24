import React from 'react';
import { Container,Button,Nav,Navbar, } from 'react-bootstrap';
import styles from "./login.module.css";
import Link from 'next/link';
import Layout from "../../components/general/Layout"

// import images from 'images/imgLog.jpg';
// import styles from '../styles/Home.module.css';

export default function Login() {
    return (
        <Layout>
        <Container>
        <div className={styles.allPage}>
            <div className={styles.imgLogin}>
                <div className={styles.logLeft}>
                    <img src="/assets/img/imgLog.png" alt="leftImage" />
                    <h1>Second Hand Books.</h1>
                </div>
            </div>
            <div className={styles.logRight}>
                <div className={styles.logRightOne}>
                    <h2>Masuk</h2>
                    <div className={styles.logInput}>
                        <h5>Email</h5>
                        <input type="text" className="form-control" placeholder="Contoh: jhondoe@gmail.com" aria-label="Username" />
                        <h5>Password</h5>
                        <input type="password" className="form-control" placeholder="Masukan Password" aria-label="Username" />
                    </div>
                    <div className="d-grid">  
                    <Button className={styles.btnLog} type="submit">
                        Masuk
                    </Button>{' '}
                    </div>
                    <div className={styles.logBottom} >
                        <h5>
                            Belum punya akun ? &nbsp;
                            <Link href="/register">
                            <strong className={styles.logBottomReg}> Daftar di sini</strong>
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    </Layout>
    )
}

