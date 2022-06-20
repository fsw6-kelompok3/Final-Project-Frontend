import React from 'react';
import { Container,Button,Search, } from 'react-bootstrap';
import styles from "./register.module.css";
import Link from 'next/link';

// import images from 'images/imgLog.jpg';
// import styles from '../styles/Home.module.css';

export default function Register() {
    return (
    <Container className={styles.allPage}>
        <div className={styles.allPage}>
            <div className={styles.imgLogin}>
                <div className={styles.logLeft}>
                    <img src="/assets/img/imgLog.png" alt="leftImage" />
                    <h1>Second Hand Books.</h1>
                </div>
            </div>
            <div className={styles.logRight}>
                <div>
                    <h2>Daftar</h2>
                    <div className={styles.logInput}>
                        <h5>Nama</h5>
                        <input type="text" className="form-control" placeholder="Nama Lengkap" aria-label="Username" />
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
                        <p>Sudah Punya Akun?</p>
                        <Link href="/login">
                            <strong className={styles.logBottomReg}> Masuk di sini</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    )
}

