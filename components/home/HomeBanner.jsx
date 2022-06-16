/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./css/HomeBanner.module.css";
import { Carousel, Container } from "react-bootstrap";

const imageBanner = [
  { id: 1, image: "/assets/img/img_banner_1.png" },
  { id: 2, image: "/assets/img/img_banner_2.png" },
  { id: 3, image: "/assets/img/img_banner_3.png" },
];

export default function HomeBanner() {
  return (
    <>
      <Container className={styles.container}>
        <Carousel>
          {imageBanner.map((a) => (
            // eslint-disable-next-line react/jsx-key
            <Carousel.Item>
              <img src={a.image} alt="banner" className={styles.img} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
