import React from "react";
import { Container,Card,Button,Form,Nav,Navbar, } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import styles from "./style.module.css";
import ListProduct from "../../components/home/ListProduct";
import Layout from "../../components/general/Layout"

export default function Seller() {
    return(
        <Layout>
        <Container className={styles.allSeller}>
            <Navbar className={styles.navTop} expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">
                    <img
                    className={styles.navLogo}
                    width={100}
                    height={50}
                    src="/assets/png/logoNav.png"
                    alt="icon-"
                    ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                <Form.Group className={styles.navSearch}>
                <input
                    type="search"
                    placeholder="Cari di sini.."
                    aria-label="Search"
                    className={styles.formSearch}
                />
                <button type="search" className={styles.btnSearch}>
                    <Search className={styles.iconSearch}> </Search>
                </button>
                </Form.Group>
                    </Nav>
                    <Nav className="justify-content-end">
                    <Navbar.Brand>
                        <img src="/assets/png/fi_list.png" alt="icon-" ></img>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <img src="/assets/png/fi_bell.png" ></img>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <img src="/assets/png/fi_user.png" ></img>
                    </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* container dua */}
            <h3 className={styles.wordOne}>Daftar Jual Saya</h3>
            <Card className={styles.cardOneBorder}>
                <Card.Body className={styles.cardOne}>
                    <img src="/assets/png/Rectangle.png" alt="picture_user"></img>
                    <div className={styles.fillCard}>
                    <Card.Text>Nama Penjual</Card.Text>
                    <h6>Kota</h6>
                    </div>
                    <div className={styles.btnCard}>
                    <Button variant="outline-dark">Edit</Button>{' '}
                    </div>
                </Card.Body>
            </Card>
            {/* card two */}
            <Card className={styles.cardTwo} style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title className={styles.cardTwoForm}>Kategori</Card.Title>
                <Form.Select className={styles.formCard} aria-label="Default select example">
                <option>Semua Product</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                <Form.Select className={styles.formCard} aria-label="Default select example">
                <option>Diminati</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                <Form.Select className={styles.formCard} aria-label="Default select example">
                <option>
                    Terjual
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </Card.Body>
            </Card>
            <ListProduct />
        </Container>
        </Layout>
    )

}