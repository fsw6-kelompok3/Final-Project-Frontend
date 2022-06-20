import React from 'react';
import { Container,Button,Nav,Navbar, } from 'react-bootstrap';
import styles from "./login.module.css";
import Link from 'next/link';

// import images from 'images/imgLog.jpg';
// import styles from '../styles/Home.module.css';

export default function Login() {
    return (
        <Container>
            <Navbar className={styles.navTop} bg="light" variant="light">
                <Container>
                    <Navbar.Brand >3:19</Navbar.Brand>
                <Nav className="me-right">
                    <Nav.Link >
                    <img
                    src="/assets/img/bluetooth.png"
                    alt="icon-"/>
                    </Nav.Link>
                    <Nav.Link ><img
                    src="/assets/img/vibrate.png"
                    alt="icon-"/>
                    </Nav.Link>
                    <Nav.Link ><img
                    src="/assets/img/wifi.png"
                    alt="icon-"/>
                    </Nav.Link>
                    <Nav.Link ><img
                    src="/assets/img/cellular.png"
                    alt="icon-"/>
                    </Nav.Link>
                    <Nav.Link ><img
                    src="/assets/img/battery.png"
                    alt="icon-"/>
                    </Nav.Link>
                    <Nav.Link >59%</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Navbar>
            <Container>
                <Navbar.Brand href="/login" bg="transparent" ><img className={styles.arrow_icons}
                src="/assets/img/arrowLeft.png"
                alt="arrow-left"/>
                </Navbar.Brand>
            </Container>
            </Navbar>
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
    )
}

