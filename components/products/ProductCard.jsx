import Link from "next/link";
import Image from "next/legacy/image";
import ProductsPageStyles from "./products.module.css"

export default function ProductCard({product, category}) {
    return (
        <div className={ProductsPageStyles.singleProductContainer}>
            <Link href={`/shop/${category}/${product._id}`}>
                <div className={ProductsPageStyles.productImgWrapper}>
                    <Image src={product.images[0]} className={ProductsPageStyles.productImg} layout="fill" sizes="100vw" alt="product image"></Image>
                </div>
                <div className={`${ProductsPageStyles.productLabel} ${ProductsPageStyles.flex}`}>
                    <p className={ProductsPageStyles.productName}>{(product.name).toUpperCase()}</p>
                    <p className={ProductsPageStyles.productDescription}>{product.description}</p>
                </div>
            </Link>
            <div>
                {product.onSale ? 
                <div className={`${ProductsPageStyles.priceContainer} ${ProductsPageStyles.flex}`}>
                    <p className={`${ProductsPageStyles.strike} ${ProductsPageStyles.productPrice}`}>{product.price} GBP</p>
                    <p className={ProductsPageStyles.discountedProductPrice}>{product.salePrice} GBP</p>
                </div> 
                : <div className={`${ProductsPageStyles.priceContainer}`}><p className={ProductsPageStyles.productPrice}>{product.price} GBP</p></div>}
            </div>
        </div>
    )
}

// data set example
// {"_id":"646f22a53207460080ed24ee","name":"alaia","description":"gilded blooms print","price":30,
// "images":["https://storage.googleapis.com/magma-bucket/airpods-case/alaia_front.jpg","https://storage.googleapis.com/magma-bucket/airpods-case/alaia_side.jpg","https://storage.googleapis.com/magma-bucket/airpods-case/alaia_down.jpg","https://storage.googleapis.com/magma-bucket/airpods-case/alaia_back.jpg"],
// "releaseDate":"2023-03-12","bestSeller":false,"category":"earbuds","onSale":true,"salePrice":23.99}