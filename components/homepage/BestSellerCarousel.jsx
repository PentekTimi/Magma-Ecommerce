"use client"
import React, { useState } from 'react';
import Image from "next/legacy/image";
import Link from "next/link";
import arrow from "../../public/arrow.svg";
import homePageStyles from "./home.module.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/aya.png", name: "Aya", price: 39}, 
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/elara.png", name: "zara", price: 39}, 
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/quinn.png", name: "elara", price: 39}, 
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/farrah.png", name: "farrah", price: 39}, 
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/zariah.png", name: "alana", price: 39}, 
    {src: "https://storage.googleapis.com/magma-bucket/bestSeller-sliderImg/yara.png", name: "yAra", price: 39}]

// props are destructured- we have access to both active, and initialActive var
export default function BestSellerCarousel () {

    const [imageIndex, setImageIndex] = useState(0);

    const PrevArrow = ({onClick}) => {
        return (
            <div onClick={onClick} className={`${homePageStyles.bestSellersArrow} ${homePageStyles.leftArrow}`}>
                <Image src={arrow}></Image>
            </div>
        )
    }

    const NextArrow = ({onClick}) => {
        return (
            <div onClick={onClick} className={`${homePageStyles.bestSellersArrow} ${homePageStyles.rightArrow}`}>
                <Image src={arrow}></Image>
            </div>
        )
    }


    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        className: "slider",
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                infinite: true,
              }
            },
        ]
    };

    return (
        <div className={homePageStyles.carousel}>
            <Slider {...settings}>
                    {items.map((item, idx) => {
                        return(
                         <div className={homePageStyles.singleCarouselItem} key={idx}>
                            <div className={idx === imageIndex ? `${homePageStyles.bestSellersImgContainer} ${homePageStyles.activeImg}`: `${homePageStyles.bestSellersImgContainer}`}>
                                <Image src={item.src} alt={item.name} layout='fill'/>
                            </div>
                            <Link href={"/shop/"} className={homePageStyles.carouselCopy}>
                                <div className={homePageStyles.carouselItemsCopy}>
                                    <p className={homePageStyles.carouselItemName}>{item.name}</p>
                                    <p className={homePageStyles.carouselItemPrice}>£{item.price}</p>
                                </div>
                            </Link>
                        </div> 
                        )
                    })}
            </Slider>
        </div>
    )
}

