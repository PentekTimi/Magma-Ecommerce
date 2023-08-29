"use client"
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link"
import Image from "next/legacy/image"
import cart1 from "../../public/empty-cart/cart1.jpg"
import cart2 from "../../public/empty-cart/cart2.jpg"
import cart3 from "../../public/empty-cart/cart3.jpg"
import cart5 from "../../public/empty-cart/cart5.jpg"
import cart6 from "../../public/empty-cart/cart6.jpg"
import cart7 from "../../public/empty-cart/cart7.jpg"
import cart8 from "../../public/empty-cart/cart8.jpg"
import cart9 from "../../public/empty-cart/cart9.jpg"
import cart10 from "../../public/empty-cart/cart10.jpg"
import cart11 from "../../public/empty-cart/cart11.jpg"
import CartStyles from "./cart.module.css"


export default function EmptyCart() {

    let imageSources = [cart1, cart2, cart3, cart5, cart6, cart7, cart8, cart9, cart10, cart11]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
        ]
      }
      
    return (
        <div className={CartStyles.emptyCart}>
            <div className={CartStyles.container}>
                <p className={CartStyles.emptyCartTitle}>Your cart is empty. Maybe you should <Link className={CartStyles.emptyCartLink} href="/shop/phone-cases">take a look at our phone cases?</Link></p>
            </div>
                    <div className={CartStyles.emptyCartSlider}>
                        <Slider {...settings}>
                            {imageSources.map((imgSource) => {
                                return (
                                    <div key={imgSource} className={CartStyles.sliderImgWrapper}>
                                        <Image priority className={CartStyles.sliderImg} src={imgSource} sizes="100vw" layout="fill" alt="promotional image"></Image>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
        </div>
    )
}