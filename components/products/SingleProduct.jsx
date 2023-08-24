'use client';
import Image from "next/legacy/image";
import ProductsPageStyles from "./products.module.css"
import React, { Component, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive"
import ClientOnly from "../common/ClientOnly";
import { useCartContext } from "@/app/context/cartStore";

export default function SingleProduct({product}) {

    const [qty, setQty] = useState(1)
    const [activeImg, setActiveImg] = useState(0)
    // retrieve global values from context
    const {cartItems, setCartItems, totalQty, setTotalQty} = useCartContext()

    product = JSON.parse(product)
    product = product[0]

    const desktopView = useMediaQuery({
        query: "(min-width: 992px)"
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    let modelTypes = [];
    switch(product.category) {
        case "laptop":
            modelTypes = ["Macbook Air 13.6", "Macbook Pro 13.3", "Macbook Pro 13", "Macbook Pro 16", "Macbook Pro 14", "Macbook Pro 15", "Macbook Air 15"]
            break;
        case "phone":
            modelTypes = ["Iphone 14", "Iphone 14 Pro", "Iphone 13", "Iphone 13 Pro", "Iphone 12", "Iphone 12 Pro", "Iphone 11", "Iphone 11 Pro", "Iphone X/XS", "Iphone SE", "Iphone XR"]
            break;
        case "watch":
            modelTypes = ["38mm/ 40mm/ 41mm", "42mm/ 44mm/ 45mm/ 49mm"]
            break;
        case "earbuds":
            modelTypes = ["Airpods Pro 2", "Airpods Pro", "Airpods 3", "Airpods Max"]
            break;
    }

    

    // product instance
    // [{"_id":"646f22f4044458c8600c3583","name":"cleo","description":"ethereal blossom print","price":40,
    // "images":["https://storage.googleapis.com/magma-bucket/macbook-case/cleo_front.jpg","https://storage.googleapis.com/magma-bucket/macbook-case/cleo_side.jpg","https://storage.googleapis.com/magma-bucket/macbook-case/cleo_closed.jpg","https://storage.googleapis.com/magma-bucket/macbook-case/cleo_layers.jpg"],
    // "releaseDate":"2023-07-12","bestSeller":true,"category":"laptop","onSale":false,"salePrice":32.99}]

    function addToCart () {
        
        // update totalQuantity for cart icon
        setTotalQty(prevValue => prevValue + qty)

        // check if the item added to cart already exists in the cart
        const checkProductsInCart = cartItems.find((cartItem) => cartItem.productID === product._id)
        const selectedModel = (document.querySelector("#model")).value
        
        // if there are no items in cart, add the first product
        if(!cartItems) {
            setCartItems([{
                productID: product._id, 
                productQuantity: qty,
                productPrice: product.onSale ? product.salePrice : product.price,
                productModel: [{model: selectedModel, modelQty: qty}],
                productCategory: product.category,
                productName: product.name,
                productImage: product.images[0]
            }])

        } else {
            // if the product already exists in the cart, check at what position and update its quantity
            if (checkProductsInCart) {
                const atIndex = cartItems.indexOf(checkProductsInCart)
                // add the new quantity to previous value
                cartItems[atIndex].productQuantity += qty

                // map through the product models added to cart and check if the new product that is being added has
                // the same model type, if yes update its quantity, else the new product being added has different model type chosen
                // so push a new object with the new model value and its quantity
                let modelValues = cartItems[atIndex].productModel
                modelValues.map((modelType) => {
                    if (modelType.model === selectedModel) {
                        modelType.modelQty += qty 
                    } else {
                        (cartItems[atIndex].productModel).push({model: selectedModel, modelQty: qty})
                    }
                })
                
    
            // if it is a new product added to the cart execute the block below
            } else {
                setCartItems([...cartItems, {
                    productID: product._id, 
                    productQuantity: qty,
                    productPrice: product.onSale ? product.salePrice : product.price,
                    productModel: [{model: selectedModel, modelQty: qty}],
                    productCategory: product.category,
                    productName: product.name,
                    productImage: product.images[0]
                }])
            }
        }
    }

    console.log("initial cart items")
    console.log(cartItems)

    return (
        <ClientOnly>
        <div className={ProductsPageStyles.container}>
            <div className={desktopView ? `${ProductsPageStyles.flex} ${ProductsPageStyles.singleProductPage}` : ProductsPageStyles.singleProductPage}>

                <div className={ProductsPageStyles.imageGallery}>
                    {desktopView ? 
                            <div>
                                <div className={ProductsPageStyles.mainGalleryImg}>
                                    <Image className={ProductsPageStyles.galleryImg} src={product.images[activeImg]} layout="fill" sizes="100vw" alt="product image"></Image>
                                </div>
                                <div className={ProductsPageStyles.smallProductImgContainer}>
                                    {(product.images).map((item, index) => {
                                        return (
                                            <div onMouseOver={() => setActiveImg(index)} className={ProductsPageStyles.smallProductImages} key={index}>
                                                <Image className={ProductsPageStyles.smallImg} src={item} layout="fill" sizes="100vw" alt="product image"></Image>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                    : 
                        <Slider {...settings}>
                            {(product.images).map((imgLink, index) => {
                                return (
                                    <div className={ProductsPageStyles.mainGalleryImg} key={index}>
                                        <Image className={ProductsPageStyles.galleryImg} src={imgLink} layout="fill" sizes="100vw" alt="product image"></Image>
                                    </div>
                                )
                            })}
                        </Slider>
            
                    }

                </div>

                <div className={ProductsPageStyles.purchasingDetails}>
                    <div className={ProductsPageStyles.detailsGeneralInfo}>
                        <h2 className={ProductsPageStyles.detailsTitle}>{(product.name).toUpperCase()} {product.description}</h2>
                        <p className={ProductsPageStyles.detailsPrice}>{product.onSale ? product.salePrice : product.price} GBP</p>
                    </div>

                    <div className={ProductsPageStyles.modelSection}>
                        <p className={ProductsPageStyles.modelSectionTitle}>Model</p>
                        <form className={ProductsPageStyles.modelSectionForm}>
                            <select className={ProductsPageStyles.modelSectionDropdown} id="model" name="model">
                                {modelTypes.map((model, index) => {
                                    return (
                                        <option value={model} key={index}>{model}</option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>

                    <div className={ProductsPageStyles.qtySection}>
                        <p className={ProductsPageStyles.qtySectionTitle}>Qty</p>
                        <div className={ProductsPageStyles.qtyOptions}>
                            <button onClick={() => setQty(qty > 1 ? qty - 1 : qty)} className={ProductsPageStyles.qtyBtn}>-</button>
                            <span className={ProductsPageStyles.qtyDisplay}>{qty}</span>
                            <button onClick={() => setQty(qty + 1)} className={ProductsPageStyles.qtyBtn}>+</button>
                        </div>
                    </div>

                    <div className={ProductsPageStyles.buySection}>
                        <button onClick={addToCart} className={ProductsPageStyles.buyBtn}>Add To Cart - £{product.onSale ? (qty * product.salePrice) : (qty * product.price)}</button>
                    </div>

                    <div className={ProductsPageStyles.extraProductInfo}>
                        <p className={ProductsPageStyles.extraInfoTitle}>Product Info</p>
                        <p className={ProductsPageStyles.releaseDate}>Release Date: {product.releaseDate}</p>
                        <p className={ProductsPageStyles.extraInfoCategory}>Category: {product.category} {product.category === "watch" ? "Band" : "Case"}</p>
                    </div>
                    
                    <div className={ProductsPageStyles.materialInfo}>
                        <p className={ProductsPageStyles.materialInfoTitle}>Material description</p>
                        <p className={ProductsPageStyles.materialInfoText}>All cases are dual-layered with silicone interior and hard shell exterior.
                        The raised bezels around the screen and camera protect the delicate glass against flat drops.</p>
                    </div>
                </div>

            </div>
        </div>
        </ClientOnly>
    )
}