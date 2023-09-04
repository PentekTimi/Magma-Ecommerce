import ProductsPageStyles from "./products.module.css"
import Link from "next/link"
import { getData } from "@/app/shop/[category]/page"
import ProductCard from "./ProductCard"

export default async function Products({category, searchParams, lengthData}) {

    const page = typeof(searchParams.page) === "string" ? Number(searchParams.page) : 1
    let productsData;
    
    if(category === "sale") {
        // get products data
        const initial = await getData(page, 12, {onSale:true})
        productsData = JSON.parse(initial)
    } if (category === "new-in") {
        const initial = await getData(page, 12, {bestSeller:true})
        productsData = JSON.parse(initial)
    } else {
        // get products data
        const initial = await getData(page, 12, {})
        productsData = JSON.parse(initial)
    }

    // calculate the total page numbers that will fit all the products. based on this number the "next" page control button, and linking will be enabled or disabled
    let pageNumbers = Math.ceil(lengthData / 12)


    return (
        <div>
            <div className={ProductsPageStyles.productsHeader}>
                <h2 className={ProductsPageStyles.productsHeaderTitle}>Free standard delivery</h2>
                <h3 className={ProductsPageStyles.productsHeaderSubtitle}>On orders over £30</h3>
            </div>

            <div className={ProductsPageStyles.container}>
                <div className={ProductsPageStyles.productInfo}>
                    <div className={`${ProductsPageStyles.flex} ${ProductsPageStyles.categoryInfo}`}>
                        <p className={ProductsPageStyles.productCategory}>{category.split("-").join(" ")}</p>
                        <p className={ProductsPageStyles.productAmount}>{lengthData} designs found</p>
                    </div>
                    <div className={`${ProductsPageStyles.flex} ${ProductsPageStyles.productFilter}`}>
                        <p className={ProductsPageStyles.filterLabel}>Sort by</p>
                        <p>Recommended</p>
                    </div>
                </div>

                <div className={ProductsPageStyles.productsContainer}>
                    {productsData.map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard product={product} category={category}/>
                            </div>
                        )
                    })}
                </div>

                <div className={`${ProductsPageStyles.pageControls} ${ProductsPageStyles.flex}`}>
                    <Link href={`/shop/${category}?page=${page > 1 ? page-1 : 1}`} className={ProductsPageStyles.previousBtn}>
                    <div className={`${page <= 1 ? `${ProductsPageStyles.disableBtn} ${ProductsPageStyles.pageControlBtn}`: ProductsPageStyles.pageControlBtn}`}>Previous</div>
                    </Link>
                    <Link href={`/shop/${category}?page=${page < pageNumbers ? page + 1 : pageNumbers}`} className={ProductsPageStyles.nextBtn}>
                    <div className={page < pageNumbers ? `${ProductsPageStyles.pageControlBtn}` : `${ProductsPageStyles.pageControlBtn} ${ProductsPageStyles.disableBtn}`}>Next</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

