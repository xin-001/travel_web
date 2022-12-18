import React from "react";
import styles from "./carousel.module.css"
import { Image, Carousel as AntCarousel } from "antd";
import carouselImage1 from "../../assets/image/carousel_1.jpeg"
import carouselImage2 from "../../assets/image/carousel_2.jpeg"
import carouselImage3 from "../../assets/image/carousel_3.jpeg"



export const Carousel: React.FC = () => {
    return(
        <AntCarousel className={styles.slider} autoplay>
            <Image src={carouselImage1} />
            <Image src={carouselImage2}/>
            <Image src={carouselImage3}/>
        </AntCarousel>
    )
}